module.exports = (application) => {
    application.post('/wheel-countdown', (req, res) => {
        application.app.controllers.index.wheelCounter(application, req, res)
    })
}
