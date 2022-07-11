const cors = require('cors')

module.exports = (application) => {
    application.get('/wheel-countdown', (req, res) => {
        application.app.controllers.index.index(application, req, res)
    })

    application.post('/wheel-countdown', cors({ origin: 'https://streamlabs.com/', optionsSuccessStatus: 200 }), (req, res) => {
        application.app.controllers.index.wheelCounter(application, req, res)
    })
}
