import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("comics");
  this.route("movies");
  this.route("events");
  this.route("tv");
  this.route("games");
});

export default Router;
