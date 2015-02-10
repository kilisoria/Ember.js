import Ember from 'ember';

export default Ember.Controller.extend({
	reviewCountChanged: 0,
	scores:[1,2,3,4,5,6,7,8,9, 10],
	checkReviewChanged: function(){
		console.log('Observers');	
		var amount = this.get('reviewCountChanged');
		amount++;
		this.set('reviewCountChanged', amount);		
		console.log(amount);

//TODO: clear the count.

}.observes('model.review')	
});
