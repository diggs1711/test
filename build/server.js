"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Tournamnet_1 = __importDefault(require("./Tournamnet"));
var db_1 = __importDefault(require("./db"));
var PORT = 8000;
var app = express_1.default();
var db = new db_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send("Hello");
});
app.get('/matches', function (req, res) {
    res.send({
        "result": 34
    });
});
app.post("/uploadTournamentResults", function (req, res, next) {
    var match = Object.keys(req.body)[0];
    var parsedTournamentString = Tournamnet_1.default.parseTournamentString(match);
    var tournament = new Tournamnet_1.default(parsedTournamentString);
    db.setTournament(tournament);
    res.sendStatus(200);
});
app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT);
});
