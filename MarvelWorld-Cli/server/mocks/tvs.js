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

var tvs= [{id:1, name: "Marvel's Agents of Shield"},
{id:2, name: "Agent Carter"},
{id:3, name: "Daredevil"},
{id:4, name: "A.K.A Jessica Jones"}
];

module.exports = function(app) {
  var express = require('express');
  var tvsRouter = express.Router();

  tvsRouter.get('/', function(req, res) {
    res.send({
      'tvs': tvs
    });
  });

  tvsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tvsRouter.get('/:id', function(req, res) {
    res.send({
      'tvs': tvs.find(function(tv){
        return tv.id == req.params.id
      })    
    });
  });

  tvsRouter.put('/:id', function(req, res) {
    res.send({
      'tvs': {
        id: req.params.id
      }
    });
  });

  tvsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tvs', tvsRouter);
};
