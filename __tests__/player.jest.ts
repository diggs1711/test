import Tournament from "../src/tournament"
import Player from "../src/player"

test("Create player from given string", () => {
    const { p1, p2 } = Player.createPlayersFromString(`Person A vs Person B`)

    expect(p1.name).toBe("Person A")
    expect(p2.name).toBe("Person B")
})

test("Returns correct stats for player after the tournament has finished", () => {
    const file = `Match: 01
    Person A vs Person B
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    Match: 02
    Person A vs Person C
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    0
    0
    0
    0

    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1

    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    `

    const tournament = new Tournament(file)

    const stats = tournament.matches[1].player1.getPlayerStats()
    expect(stats.gamesWon).toBe(23)
    expect(stats.gamesLost).toBe(17)
})