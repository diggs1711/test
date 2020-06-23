"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.getPlayerStats = function () {
        return this.stats;
    };
    return Player;
}());
exports.default = Player;
