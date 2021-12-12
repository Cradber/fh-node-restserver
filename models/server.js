
const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersRoutes = '/api/users'

        // Middlewares
        this.middlewares()

        // Routes
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        // Public directory
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersRoutes, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running at port ', process.env.PORT)
        })
    }
}

module.exports = Server