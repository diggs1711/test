import Player from "./Player"
import Score from "./Score"

export default class Match {
    id: number
    player1: Player
    player2: Player
    winner: string | undefined
    score: Score = {
        player1SetsWon: 0,
        player2SetsWon: 0
    }

    constructor (id: number, players: string, scores: number[]) {
        const splitPlayerString = players.split(" vs ")
        const p1 = new Player(splitPlayerString[0])
        const p2 = new Player(splitPlayerString[1])

        this.id = id
        this.player1 = p1
        this.player2 = p2
        this.calculateMatchScores(scores)
    }

    calculateMatchScores(scores: number[]) {
        let p1GameScore = 0
        let p2GameScore = 0

        for (let score of scores) {

            if (score == 0) {
                p1GameScore++
            } else {
                p2GameScore++
            }

            if (p1GameScore == 4 && p2GameScore < 3) {
                this.score.player1SetsWon++
                p1GameScore = 0
                p2GameScore = 0
            }

            if (p2GameScore == 4 && p1GameScore < 3) {
                this.score.player2SetsWon++
                p1GameScore = 0
                p2GameScore = 0
            }
        }
    }
}
