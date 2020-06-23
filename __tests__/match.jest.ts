import Match from "../src/match"
import Player from "../src/player"

test('creates a match correctly', () => {
    const { p1, p2 } = Player.createPlayersFromString(`Person A vs Person B`)
    const match = new Match(0, p1, p2, [0, 1, 1, 0])

    expect(match.id).toBe(0)
    expect(match.player1.name).toBe("Person A")
    expect(match.player2.name).toBe("Person B")
    expect(match.player1.stats.gamesLost).toBe(0)
    expect(match.player1.stats.gamesWon).toBe(0)
    expect(match.player2.stats.gamesWon).toBe(0)
})