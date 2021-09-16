const olaMundo = (req, res) => {
    res.send("Olá mundo!")
}

const olaJoabe = (req, res) => {
    res.send("Olá Joabe!")
}

module.exports = { olaMundo, olaJoabe }