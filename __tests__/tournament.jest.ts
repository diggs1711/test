import Tournament from "../src/tournament"

test("Creates tournament correctly", () => {
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
    expect(tournament.matches.length).toBe(2)

    //first match
    expect(tournament.matches[0].id).toBe(1)
    expect(tournament.matches[0].player1.name).toBe("Person A")
    expect(tournament.matches[0].player2.name).toBe("Person B")
    expect(tournament.matches[0].winner?.name).toBe("Person A")
    expect(tournament.matches[0].score.player1SetsWon).toBe(2)
    expect(tournament.matches[0].score.player2SetsWon).toBe(0)

    //second match
    expect(tournament.matches[1].id).toBe(2)
    expect(tournament.matches[1].player1.name).toBe("Person A")
    expect(tournament.matches[1].player2.name).toBe("Person C")
    expect(tournament.matches[1].winner?.name).toBe("Person C")
    expect(tournament.matches[1].score.player1SetsWon).toBe(1)
    expect(tournament.matches[1].score.player2SetsWon).toBe(2)
})