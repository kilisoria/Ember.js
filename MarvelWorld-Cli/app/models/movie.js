import DS from 'ember-data';
import Em from 'ember';

export default DS.Model.extend({
	title: DS.attr('string'),
	brief: DS.attr('string'),
	review: DS.attr('number'),
	actors: DS.hasMany('actor'),
	picThumbnail: DS.attr('string'), 
	favActorName: DS.attr('string'), 
	watches: DS.attr('number'),
	award: DS.attr('number'),
	date: DS.attr('date'),
	profile: DS.belongsTo('profile'),
	hasGoodRating: Em.computed.gt('review', 9),	
	code: function(){
		return '000001A#000' + this.get('id');
	}.property('id')
});

