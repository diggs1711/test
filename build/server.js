"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var tournament_1 = __importDefault(require("./tournament"));
var db_1 = __importDefault(require("./db"));
var Server = (function () {
    function Server() {
        var _this = this;
        this.port = 8000;
        this.app = express_1.default();
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.get('/getPlayerStats', function (req, res) {
            var playerName = req.param('playerName');
            var player = db_1.default.players.find(function (player) { return player.name == playerName; });
            if (!player) {
                return res.send("No such player exists");
            }
            else {
                return res.send("Games won: " + (player === null || player === void 0 ? void 0 : player.stats.gamesWon) + ", Games Lost: " + (player === null || player === void 0 ? void 0 : player.stats.gamesLost));
            }
        });
        this.app.get('/getMatchResult', function (req, res) {
            var tournament = db_1.default.getTournament();
            var matchId = parseInt(req.param("matchId"));
            var match = tournament.matches.find(function (match) { return match.id == matchId; });
            if (!(match === null || match === void 0 ? void 0 : match.winner)) {
                return res.send("No winner");
            }
            else if ((match === null || match === void 0 ? void 0 : match.winner) == match.player1) {
                return res.send(match.player1.name + " defeated " + match.player2.name);
            }
            else {
                return res.send(match.player2.name + " defeated " + match.player1.name);
            }
        });
        this.app.post("/uploadTournamentResults", function (req, res) {
            var matches = Object.keys(req.body)[0];
            var tournament = new tournament_1.default(matches);
            db_1.default.setTournament(tournament);
            return res.sendStatus(200);
        });
        this.app.listen(this.port, function () {
            console.log("Server listening on port: " + _this.port);
        });
    }
    return Server;
}());
exports.Server = Server;
exports.default = new Server();
