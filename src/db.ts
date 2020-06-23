// Fake db to store tournament

import Tournament from "./tournament"
import Player from "./player"

class DB {
    tournament: Tournament | undefined
    players: Player[] = []

    getTournament() {
        if (this.tournament) {
            return this.tournament
        } else {
            throw Error("No tournament entered")
        }
    }

    setTournament(tournament: Tournament) {
        this.tournament = tournament
    }

    addPlayer(player: Player) {
        if (!this.players.find(p => p.name == player.name)) {
            this.players.push(player)
        }
    }

    getPlayer(name: string) {
        return this.players.find(player => player.name === name)
    }
}

export default new DB()