// Fake db to store tournament

import Tournamnet from "./Tournamnet"

export default class DB {
    tournament: Tournamnet | undefined

    getTournament() {
        if (this.tournament) {
            return this.tournament
        } else {
            throw Error("No tournament entered")
        }
    }

    setTournament(tournament: Tournamnet) {
        this.tournament = tournament
    }
}