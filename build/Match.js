"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match = (function () {
    function Match(id, p1, p2, scores) {
        this.score = {
            player1SetsWon: 0,
            player2SetsWon: 0
        };
        this.id = id;
        this.player1 = p1;
        this.player2 = p2;
        this.calculateMatchScores(scores);
    }
    Match.prototype.calculateMatchScores = function (scores) {
        var p1GameScore = 0;
        var p2GameScore = 0;
        var p1GamesWon = 0;
        var p2GamesWon = 0;
        for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
            var score = scores_1[_i];
            if (score == 0) {
                p1GameScore++;
            }
            else if (score == 1) {
                p2GameScore++;
            }
            else {
                continue;
            }
            var diff = Math.abs(p1GameScore - p2GameScore);
            if (p1GameScore >= 4 && diff >= 2) {
                p1GamesWon++;
                p1GameScore = 0;
                p2GameScore = 0;
                this.player1.stats.gamesWon++;
                this.player2.stats.gamesLost++;
            }
            if (p2GameScore >= 4 && diff >= 2) {
                p2GamesWon++;
                p1GameScore = 0;
                p2GameScore = 0;
                this.player2.stats.gamesWon++;
                this.player1.stats.gamesLost++;
            }
            if (p1GamesWon == 6) {
                this.score.player1SetsWon++;
                p1GamesWon = 0;
                p2GamesWon = 0;
            }
            if (p2GamesWon == 6) {
                this.score.player2SetsWon++;
                p1GamesWon = 0;
                p2GamesWon = 0;
            }
            if (this.score.player1SetsWon == 2) {
                this.winner = this.player1;
                return;
            }
            else if (this.score.player2SetsWon == 2) {
                this.winner = this.player2;
                return;
            }
        }
    };
    return Match;
}());
exports.default = Match;
