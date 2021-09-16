module.exports = app => {
    app.route('/')
        .get(app.api.movies.get)
        .post(app.api.movies.post)

    app.get('/:id', app.api.movies.getById)
}