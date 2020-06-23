import Match from './match'
import Player from './player'
import db from './db'

export default class Tournament {
    matches: Match[] = []

    constructor(matches: string) {
        this.parseTournamentString(matches)
    }

    parseTournamentString = (s: string) => {
        const splitString = s.split("\n").map(x => x.trim())

        for (let index = 0; index < splitString.length;) {
            const match = splitString[index]
            const matchId = parseInt(match.split(":")[1].trim())
            const players = splitString[index + 1]
            let pointer = index + 2
            let scores: number[] = []

            while (pointer < splitString.length) {
                const curr = splitString[pointer]

                if (curr && Number.isInteger(parseInt(curr))) {
                    const score = parseInt(curr)
                    scores.push(score)
                } else if (curr === '\r') {
                    // ignore empty space in string
                    // \r is carraige return
                } else if (curr && !Number.isInteger(parseInt(curr))) {
                    // end of match break out of loop
                    break
                }
                pointer++
            }


            const { p1, p2 } = Player.createPlayersFromString(players)

            db.addPlayer(p2)
            db.addPlayer(p1)

            const newMatch = new Match(matchId, p1, p2, scores)

            this.matches.push(newMatch)

            index = pointer
        }
    }
}