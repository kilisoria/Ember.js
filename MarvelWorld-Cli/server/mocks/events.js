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

var events = [
{id:1, code: '00001', name:'e-0001', country: 'US'},
{id:2,code: '00002', name:'e-0002', country: 'US'},
{id:3,code: '00003', name:'e-0003', country: 'US'},
{id:4,code: '00004', name:'e-0004', country: 'US'},
{id:5,code: '00005', name:'e-0005', country: 'US'},
{id:6,code: '00006', name:'e-0006', country: 'US'},
{id:7,code: '00007', name:'e-0007', country: 'US'}
];

module.exports = function(app) {
  var express = require('express');
  var eventRouter = express.Router();

  eventRouter.get('/', function(req, res) {
    res.send({
      'events':events
    });
  });

  eventRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  eventRouter.get('/:id', function(req, res) {
    res.send({
      'events':  events.find(function(event){
        return event.id == req.params.id
      })
    });
  });

  eventRouter.put('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/events', eventRouter);
};
