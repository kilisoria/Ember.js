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
	date: DS.attr('string', {
          defaultValue: function() { return new Date(); }
      }),
	profile: DS.belongsTo('profile'),
	// Ember Computed properties.
	hasGoodRating: Em.computed.gt('review', 9),	
	// Custom Cmputed property.
	code: function(){
		return '000001A#000' + this.get('id');
	}.property('id')
});

