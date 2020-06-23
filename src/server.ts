import express from 'express'
import Tournamnet from './Tournamnet'
import DB from './db'

const PORT = 8000

const app = express()
let db = new DB()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/matches', (req, res) => {
    res.send({
        "result": 34
    })
})

app.post("/uploadTournamentResults", (req, res, next) => {
    let match = Object.keys(req.body)[0]

    const parsedTournamentString = Tournamnet.parseTournamentString(match)
    const tournament = new Tournamnet(parsedTournamentString)
    db.setTournament(tournament)

    res.sendStatus(200)
})


app.listen(PORT, () => {

    console.log(`Server listening on port: ${PORT}`)
})


