"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("./db"));
var Player = (function () {
    function Player(name) {
        this.stats = {
            gamesLost: 0,
            gamesWon: 0
        };
        this.name = name;
    }
    Player.prototype.getPlayerStats = function () {
        return this.stats;
    };
    Player.createPlayersFromString = function (players) {
        var splitPlayerString = players.split(" vs ");
        var player1Name = splitPlayerString[0].trim();
        var player2Name = splitPlayerString[1].trim();
        var p1, p2;
        if (db_1.default.getPlayer(player1Name)) {
            p1 = db_1.default.getPlayer(player1Name);
        }
        else {
            p1 = new Player(player1Name);
        }
        if (db_1.default.getPlayer(player2Name)) {
            p2 = db_1.default.getPlayer(player2Name);
        }
        else {
            p2 = new Player(player2Name);
        }
        return {
            p1: p1,
            p2: p2
        };
    };
    return Player;
}());
exports.default = Player;
