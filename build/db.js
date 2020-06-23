"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DB = (function () {
    function DB() {
        this.players = [];
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
    DB.prototype.addPlayer = function (player) {
        if (!this.players.find(function (p) { return p.name == player.name; })) {
            this.players.push(player);
        }
    };
    DB.prototype.getPlayer = function (name) {
        return this.players.find(function (player) { return player.name === name; });
    };
    return DB;
}());
exports.default = new DB();
