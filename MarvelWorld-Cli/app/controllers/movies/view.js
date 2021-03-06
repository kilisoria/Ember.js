import Ember from 'ember';

export default Ember.Controller.extend({
	reviewCountChanged: 0,
	scores:[1,2,3,4,5,6,7,8,9, 10],	
	favActorName: Ember.computed.alias('model.favActorName'),
	favActor: Ember.computed.filter('model.actors', function(actor){
		if(actor.get('name') === this.get('favActorName')){
			return actor;
		}
	}),
	hasAward: Ember.computed.gt('model.award', 0),
	/*hasAward: Ember.computed.gte('model.award', 1),*/
	/*hasNotAward: Ember.computed.lte('model.award', 1),*/
	actorNames: Ember.computed.map('model.actors', function(actor){
		return actor.get('name').split(' ')[0] + ' ';
	}),
	/*	hasGoodRating: Ember.computed.gt('model.review', 9),	*/
	hasGoodRating: function(){
		var rate = this.get('container').lookup('application:main').get('awardRate');
		return  this.get('model.review') >= rate;
	}.property('model.review'),
	checkReviewChanged: function(e){
		if(e.target.router.activeTransition === null){		
			var amount = this.get('reviewCountChanged');	
			amount++;
			this.set('reviewCountChanged', amount);		
			if(amount === 3){
				alert(this.get('i18n').current.reviewChangedValidation);
				this.set('reviewCountChanged', 0);
			}
		}else{
			this.set('reviewCountChanged', 0);
		}
	}.observes('model.review')	
});
