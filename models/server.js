
const express = require('express')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // Middlewares
        this.middlewares()

        // Routes
        this.routes()
    }

    middlewares() {
        // Public directory
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                msg: "'Get API"
            })
        })

        this.app.put('/api', (req, res) => {
            res.json({
                msg: "'Put API"
            })
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running at port ', process.env.PORT)
        })
    }
}

module.exports = Server