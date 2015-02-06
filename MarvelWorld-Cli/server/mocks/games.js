if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

var games = [
{id: 1, title: "Disney Infinity: Marvel Super Heroes", isAvailable: true},
{id: 2, title: "Marvel Contest of Champions", isAvailable: true},
{id: 3, title: "Spider-Man Unlimited", isAvailable: true}, 
{id: 4, title: "Guardians of the Galaxy: The Universal Weapon", isAvailable: true},
{id: 5, title: "Marvel: Avengers Alliance", isAvailable: false},
{id: 6, title: "Marvel Puzzle Quest", isAvailable: false}
];


module.exports = function(app) {
  var express = require('express');
  var gamesRouter = express.Router();

  gamesRouter.get('/', function(req, res) {
    res.send({
      'games': games
    });
  });

  gamesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  gamesRouter.get('/:id', function(req, res) {
    res.send({
      'games':  games.find(function(game){
        return game.id == req.params.id
      })     
    });
  });

  gamesRouter.put('/:id', function(req, res) {
    res.send({
      'games': {
        id: req.params.id
      }
    });
  });

  gamesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/games', gamesRouter);
};
