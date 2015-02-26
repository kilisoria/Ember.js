import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Integration test - Movie', {
	beforeEach: function() {
		App = startApp();
	},
	afterEach: function() {
		Ember.run(App, App.destroy);
	}
});

test("Movie - home page", function(assert){
	 assert.expect(2);
	 visit('/movies').then(function(){
	 	assert.equal(find('.movie-container').length, 1, 'Page contains main container');
	 	assert.equal(find('.movie-summary').length, 1, 'Page contains summary section');	 	
	 });
});