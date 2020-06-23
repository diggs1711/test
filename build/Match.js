"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = __importDefault(require("./Player"));
var Score_1 = __importDefault(require("./Score"));
var Match = /** @class */ (function () {
    function Match(id, player1, player2) {
        this.id = id;
        this.player1 = player1;
        this.player2 = player2;
    }
    Match.createMatch = function (id, players, scores) {
        var splitPlayerString = players.split(" vs ");
        var p1 = splitPlayerString[0];
        var p2 = splitPlayerString[1];
        return {
            id: id,
            player1: new Player_1.default(p1),
            player2: new Player_1.default(p2),
            score: new Score_1.default(),
            winner: undefined,
        };
    };
    return Match;
}());
exports.default = Match;
