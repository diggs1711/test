"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Match_1 = __importDefault(require("./Match"));
var Tournamnet = /** @class */ (function () {
    function Tournamnet(matches) {
        this.matches = matches;
        this.extractMatchInfo();
    }
    Tournamnet.prototype.extractMatchInfo = function () {
        console.log(this.matches);
        // for (let match in this.matches) {
        //     console.log(match)
        // }
    };
    Tournamnet.parseTournamentString = function (s) {
        var splitString = s.split("\n");
        var matches = [];
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
                else if (curr === '\r') {
                    // ignore empty space in string
                    // \r is carraige return
                }
                else if (curr && !Number.isInteger(parseInt(curr))) {
                    // end of match break out of loop
                    break;
                }
                pointer++;
            }
            matches.push(Match_1.default.createMatch(matchId, players, scores));
            index = pointer;
        }
        return matches;
    };
    return Tournamnet;
}());
exports.default = Tournamnet;
