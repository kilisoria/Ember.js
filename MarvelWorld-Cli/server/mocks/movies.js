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
{id:2, title: "Captain America", brief: "Captain America is a fictional character, a superhero, created by American cartoonists Joe Simon and Jack Kirby. The character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Designed as a patriotic supersoldier who often fought the Axis powers of World War II, Captain America was Timely Comics'...."},
{id:3, title: "Thor", brief: "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Paramount Pictures.[a] It is the fourth installment in the Marvel Cinematic Universe. The film was directed by Kenneth Branagh, written by Ashley Edward Miller, Zack Stentz and Don Payne, and stars Chris Hemsworth, Natalie Portman, Tom ..."},
{id:4, title: "Hulk", brief: "The Incredible Hulk is a 2008 American superhero film featuring the Marvel Comics character the Hulk, produced by Marvel Studios and distributed by Universal Pictures. It is the second installment in the Marvel Cinematic Universe. The film was directed by Louis Leterrier, with a screenplay by Zak Penn. It stars Edward Norton, Liv Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell, and..."},
{id:5, title: "Iron Man", brief: "Iron Man is a 2008 American superhero film featuring the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Paramount Pictures.1 It is the first installment in the Marvel Cinematic Universe. The film was directed by Jon Favreau, with a screenplay by Mark Fergus and Hawk Ostby, Art Marcum and Matt Holloway. It stars Robert Downey, Jr., Terrence Howard, Jeff Bridges, Shaun Toub and Gwyneth Paltrow. In Iron Man, Tony Stark, an industrialist and master engineer, builds a..."}
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
