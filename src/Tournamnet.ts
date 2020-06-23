import Match from './Match'
import Player from './Player'

export default class Tournamnet {
    players: Player[] | undefined
    matches: Match[]

    constructor(matches: Match[]) {
        this.matches = matches
    }

    static parseTournamentString = (s: string) => {
        const splitString = s.split("\n")
        let matches = []

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

            matches.push(new Match(matchId, players, scores))
            index = pointer
        }

        return matches
    }
}