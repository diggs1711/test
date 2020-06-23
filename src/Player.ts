export default class Player {
    name: string
    stats: Stats | undefined

    constructor (name: string) {
        this.name = name
    }

    getPlayerStats() {
        return this.stats
    }
}

interface Stats {
    gamesWon: number
    gamesLost: number
}