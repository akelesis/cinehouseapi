const db = require('../movies.json')
const fs = require('fs')
const path = '../movies.json'

module.exports = app => {

    const get = (req, res) => {
        try{
            res.status(200).json(db)
        }
        catch(err) {
            res.status(500).json({error: true, msg: "Erro no servidor!", err})
        }
    }

    const getById = (req, res) => {
        const movieId = req.params.id
        const movie = db.filter(register => register.id == movieId)
        res.status(200).json(movie)
    }

    const post = (req, res) => {
        const movie = req.body
        db.push(movie)
        try {
            fs.writeFileSync(path, JSON.stringify(db))
            res.status(201).send(movie.id)
        }
        catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    return { get, getById, post }
}