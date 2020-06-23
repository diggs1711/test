"use strict";
// Fake db to store tournament
Object.defineProperty(exports, "__esModule", { value: true });
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.prototype.getTournament = function () {
        if (this.tournament) {
            return this.tournament;
        }
        else {
            throw Error("No tournament entered");
        }
    };
    DB.prototype.setTournament = function (tournament) {
        this.tournament = tournament;
    };
    return DB;
}());
exports.default = DB;
