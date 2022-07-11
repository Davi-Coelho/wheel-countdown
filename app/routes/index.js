module.exports = (application) => {
    application.get('/wheel-countdown', (req, res) => {
        application.app.controllers.index.index(application, req, res)
    })

    application.post('/wheel-countdown', (req, res) => {
        application.app.controllers.index.wheelCounter(application, req, res)
    })
}
