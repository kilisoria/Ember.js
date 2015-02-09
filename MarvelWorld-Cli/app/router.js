import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route("comics");

  //this.resource("movies");
  //this.resource("movie",{path:"/movies/:movie_id"});

  this.resource("movies",function(){
  	this.route("movie", {path:"view/:movie_id"});		
  });


  this.route("events");
  this.route("tv");

  this.resource("games",function(){
  	this.route("game", {path:"view/:game_id"});		
  });
});

export default Router;
