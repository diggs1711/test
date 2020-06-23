import db from './db'

export default class Player {
    name: string
    stats: Stats = {
        gamesLost: 0,
        gamesWon: 0
    }

    constructor (name: string) {
        this.name = name
    }

    getPlayerStats() {
        return this.stats
    }

    static createPlayersFromString(players: string) {
        const splitPlayerString = players.split(" vs ")
        const player1Name = splitPlayerString[0].trim()
        const player2Name = splitPlayerString[1].trim()
        let p1, p2;

        // check if player is already in db
        if (db.getPlayer(player1Name)) {
            p1 = db.getPlayer(player1Name)
        } else {
            p1 = new Player(player1Name)
        }

        if (db.getPlayer(player2Name)) {
            p2 = db.getPlayer(player2Name)
        } else {
            p2 = new Player(player2Name)
        }

        return {
            p1,
            p2
        } as {
            p1: Player,
            p2: Player
        }
    }
}

interface Stats {
    gamesWon: number
    gamesLost: number
}