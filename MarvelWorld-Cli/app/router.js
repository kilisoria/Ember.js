import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.resource("movies",function(){
  	this.route("view", {path:"view/:movie_id"});		
  });

  this.route("comics");

  this.resource("games",function(){
    this.route("view", {path:"view/:game_id"});   
  });

 this.resource("events", function(){
    this.route("view", {path:"view/:event_id"});
    this.route("new");
  });
  
  this.route("tv");
  this.route("event");
  this.route("training");
});

export default Router;
