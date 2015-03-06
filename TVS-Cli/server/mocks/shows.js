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


var shows = [{id: 1, name: "The Walking Dead", genre: "Horror", originalChannel: "AMC Studios", numberSeasons: 5, numberEpisodes: 63, status: "ongoing"},
            {id: 2, name: "Breaking Bad", genre: "Thriller", originalChannel: "AMC Studios", numberSeasons: 5, numberEpisodes: 62, status: "completed"},
            {id: 3, name: "Game of Thrones", genre: "Fantasy", originalChannel: "HBO", numberSeasons: 4, numberEpisodes: 40, status: "ongoing"},
            {id: 4, name: "Prison Break", genre: "Action", originalChannel: "FOX", numberSeasons: 4, numberEpisodes: 81, status: "completed"},
            {id: 5, name: "True Detectives", genre: "Mystery", originalChannel: "HBO", numberSeasons: 1, numberEpisodes: 8, status: "completed"},
            {id: 6, name: "Believe", genre: "Fantasy", originalChannel: "NBC", numberSeasons: 1, numberEpisodes: 13, status: "canceled"}];


module.exports = function(app) {
  var express = require('express');
  var showsRouter = express.Router();

  showsRouter.get('/', function(req, res) {
    res.send({
      'shows': shows
    });
  });

  showsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  showsRouter.get('/:id', function(req, res) {
    res.send({
      'shows': shows.find(function(show){
        return show.id == req.params.id
      })    
    });
  });

  showsRouter.put('/:id', function(req, res) {
    res.send({
      'shows': {
        id: req.params.id
      }
    });
  });

  showsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/shows', showsRouter);
};
