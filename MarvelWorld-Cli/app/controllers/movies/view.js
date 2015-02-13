import Ember from 'ember';

export default Ember.Controller.extend({
	reviewCountChanged: 0,
	scores:[1,2,3,4,5,6,7,8,9, 10],	
	favActorName: Ember.computed.alias('model.favActorName'),
	favActor: Ember.computed.filter('model.actors', function(actor){
		if(actor._data.name === this.get('favActorName')){
			return actor;
		}
	}),
	hasAward: Ember.computed.gt('model.award', 0),
	/*hasAward: Ember.computed.gte('model.award', 1),*/
	/*hasNotAward: Ember.computed.lte('model.award', 1),*/
	actorNames: Ember.computed.map('model.actors', function(actor){
		return actor._data.name.split(' ')[0] + ' ';
	}),
	checkReviewChanged: function(e){
	if(e.target.router.activeTransition === null){
	console.log('Observers');			
	var amount = this.get('reviewCountChanged');
	console.log(amount);			
	amount++;
	this.set('reviewCountChanged', amount);		
		if(amount === 3){
			alert('OBSERVERS - Wait! Do you have any doubts about the movie? then... watch it again! :)');
			this.set('reviewCountChanged', 0);
		}
	}else{
			this.set('reviewCountChanged', 0);
	}
}.observes('model.review')	
});
