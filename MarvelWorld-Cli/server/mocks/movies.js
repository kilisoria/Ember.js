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

var movies=[
{id:1, title: "The Avengers", brief: "The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,2 a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth. Nick Fury, director of the espionage agency S.H.I.E.L.D., and his lieutenant Agent Maria Hill arrive at a remote research facility..."},
{id:2, title: "Captain America", brief: "Captain America is a fictional character, a superhero, created by American cartoonists Joe Simon and Jack Kirby. The character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Designed as a patriotic supersoldier who often fought the Axis powers of World War II, Captain America was Timely Comics'...."}
];

module.exports = function(app) {
  var express = require('express');
  var moviesRouter = express.Router();

  moviesRouter.get('/', function(req, res) {
    res.send({
      'movies':movies
    });
  });

  moviesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  moviesRouter.get('/:id', function(req, res) {
    res.send({
      "movie": movies.find(function(movie){
        return movie.id == req.params.id
      })     
    });
  });

  moviesRouter.put('/:id', function(req, res) {
    res.send({
      'movies': {
        id: req.params.id
      }
    });
  });

  moviesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/movies', moviesRouter);
};
