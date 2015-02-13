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



var comics = [{id: 1, name:"All-New Ghost Rider #11"},
{id: 2, name:"X-Men #24"},
{id: 3, name:"X-Force #15"},
{id: 4, name:"Wolverines #6"},
{id: 5, name:"Thor #5"},
{id: 6, name:"Thanos Vs. Hulk #3"}, 
{id: 7, name:"Guardians of the Galaxy #24"},  
{id: 8, name:"Guardians 3000 #5"},    
{id: 9, name:"Amazing Spider-Man #14"},   
{id: 10, name:"Captain Marvel #12"}]    


module.exports = function(app) {
  var express = require('express');
  var comicsRouter = express.Router();

  comicsRouter.get('/', function(req, res) {
    res.send({
      'comics': comics
    });
  });

  comicsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  comicsRouter.get('/:id', function(req, res) {
    res.send({
      'comics': events.find(function(comic){
        return comic.id == req.params.id
      })
    });
  });

  comicsRouter.put('/:id', function(req, res) {
    res.send({
      'comics': {
        id: req.params.id
      }
    });
  });

  comicsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/comics', comicsRouter);
};
