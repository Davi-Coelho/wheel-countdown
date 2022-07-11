const app = require('./config/server')
const port = 3002

app.listen(port, () => console.log(`App Express is running on port ${port}`))
