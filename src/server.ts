import express from 'express'
import Tournament from './tournament'
import db from './db'

export class Server {
    port = 8000
    app = express()

    constructor () {
        this.app.use(express.urlencoded({ extended: true }))

        this.app.get('/getPlayerStats', (req, res) => {
            const playerName = req.param('playerName')
            const player = db.getPlayer(playerName)

            if (!player) {
                return res.send("No such player exists")
            } else {
                return res.send(`Games won: ${player?.stats.gamesWon}, Games Lost: ${player?.stats.gamesLost}`)
            }
        })

        this.app.get('/getMatchResult', (req, res) => {
            const tournament = db.getTournament()
            const matchId = parseInt(req.param("matchId"))
            const match = tournament.matches.find(match => match.id == matchId)

            if (!match?.winner) {
                return res.send(`No winner`)
            } else if (match?.winner == match.player1) {
                return res.send(`${match.player1.name} defeated ${match.player2.name}`)
            } else {
                return res.send(`${match.player2.name} defeated ${match.player1.name}`)
            }
        })

        this.app.post("/uploadTournamentResults", (req, res) => {
            let matches = Object.keys(req.body)[0]
            const tournament = new Tournament(matches)
            db.setTournament(tournament)
            return res.sendStatus(200)
        })


        this.app.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}`)
        })
    }

}

export default new Server()