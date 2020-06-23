"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = __importDefault(require("./match"));
var player_1 = __importDefault(require("./player"));
var db_1 = __importDefault(require("./db"));
var Tournament = (function () {
    function Tournament(matches) {
        var _this = this;
        this.matches = [];
        this.parseTournamentString = function (s) {
            var splitString = s.split("\n").map(function (x) { return x.trim(); });
            for (var index = 0; index < splitString.length;) {
                var match = splitString[index];
                var matchId = parseInt(match.split(":")[1].trim());
                var players = splitString[index + 1];
                var pointer = index + 2;
                var scores = [];
                while (pointer < splitString.length) {
                    var curr = splitString[pointer];
                    if (curr && Number.isInteger(parseInt(curr))) {
                        var score = parseInt(curr);
                        scores.push(score);
                    }
                    else if (curr === '\r' || curr == '' || curr == "  ") {
                    }
                    else if (curr && !Number.isInteger(parseInt(curr))) {
                        break;
                    }
                    pointer++;
                }
                var _a = player_1.default.createPlayersFromString(players), p1 = _a.p1, p2 = _a.p2;
                db_1.default.addPlayer(p2);
                db_1.default.addPlayer(p1);
                var newMatch = new match_1.default(matchId, p1, p2, scores);
                _this.matches.push(newMatch);
                index = pointer;
            }
        };
        this.parseTournamentString(matches);
    }
    return Tournament;
}());
exports.default = Tournament;
