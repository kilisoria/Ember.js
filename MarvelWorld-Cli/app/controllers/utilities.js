import Ember from 'ember';

export default Ember.Object.extend({
	 getRandomNumber: function() {
	    return Math.floor(Math.random() * (99999 - 10 + 1)) + 10;
	}
});