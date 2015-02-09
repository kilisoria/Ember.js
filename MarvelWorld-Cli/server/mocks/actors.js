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
{id:1, title: "The Avengers", brief: "The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,2 a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth. Nick Fury, director of the espionage agency S.H.I.E.L.D., and his lieutenant Agent Maria Hill arrive at a remote research facility...", review: 9, actors: [1,2,3,4,5,6,7,8,9,10,11] , profile: 1}
];

var actors =[
{id:1, name: 'Robert Downey Jr.', movie: 1},
{id:2, name: 'Chris Evans', movie: 1},
{id:3, name: 'Mark Ruffalo', movie: 1},
{id:4, name: 'Chris Hemsworth', movie: 1},
{id:5, name: 'Scarlett Johansson', movie: 1},
{id:6, name: 'Jeremy Renner', movie:1},
{id:7, name: 'Tom Hiddleston', movie:1},
{id:8, name: 'Clark Gregg', movie: 1},
{id:9, name: 'Cobie Smulders', movie: 1},
{id:10, name: 'Stellan Skarsgard', movie: 1},
{id:11, name: 'Samuel L. Jackson', movie: 1},
];



module.exports = function(app) {
  var express = require('express');
  var actorsRouter = express.Router();

  actorsRouter.get('/', function(req, res) {
    res.send({
      'movies':movies,
      'actors': actors
    });
  });

  actorsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  actorsRouter.get('/:id', function(req, res) {
    res.send({
      'movies':movies,
      'actors':  actors.find(function(actor){
        return actor.id == req.params.id
      }) 
    });
  });

  actorsRouter.put('/:id', function(req, res) {
    res.send({
      'actors': {
        id: req.params.id
      }
    });
  });

  actorsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/actors', actorsRouter);
};
