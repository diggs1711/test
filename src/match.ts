import Player from "./player"

interface Score {
    player1SetsWon: number,
    player2SetsWon: number
}

export default class Match {
    id: number
    player1: Player
    player2: Player
    winner: Player | undefined
    score: Score = {
        player1SetsWon: 0,
        player2SetsWon: 0
    }

    constructor (id: number, p1: Player, p2: Player, scores: number[]) {
        this.id = id
        this.player1 = p1
        this.player2 = p2
        this.calculateMatchScores(scores)
    }

    calculateMatchScores(scores: number[]) {
        let p1GameScore = 0
        let p2GameScore = 0

        let p1GamesWon = 0
        let p2GamesWon = 0

        for (let score of scores) {

            if (score == 0) {
                p1GameScore++
            } else if (score == 1) {
                p2GameScore++
            } else {
                continue;
            }

            const diff = Math.abs(p1GameScore - p2GameScore)

            // Player 1 wins a game
            if (p1GameScore >= 4 && diff >= 2) {
                p1GamesWon++
                p1GameScore = 0
                p2GameScore = 0
                this.player1.stats.gamesWon++
                this.player2.stats.gamesLost++
            }

            // Player 2 wins a game
            if (p2GameScore >= 4 && diff >= 2) {
                p2GamesWon++
                p1GameScore = 0
                p2GameScore = 0
                this.player2.stats.gamesWon++
                this.player1.stats.gamesLost++
            }

            // player 1 wins the set
            if (p1GamesWon == 6) {
                this.score.player1SetsWon++
                p1GamesWon = 0
                p2GamesWon = 0
                p2GameScore = 0
                p1GameScore = 0
            }

            // player 2 wins the set
            if (p2GamesWon == 6) {
                this.score.player2SetsWon++
                p1GamesWon = 0
                p2GamesWon = 0
                p2GameScore = 0
                p1GameScore = 0
            }


            if (this.score.player1SetsWon == 2) {
                this.winner = this.player1
                return;
            } else if (this.score.player2SetsWon == 2) {
                this.winner = this.player2
                return
            }

        }
    }
}
