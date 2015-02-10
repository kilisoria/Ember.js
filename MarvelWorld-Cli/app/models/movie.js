import DS from 'ember-data';
import Em from 'ember';

export default DS.Model.extend({
	title: DS.attr('string'),
	brief: DS.attr('string'),
	review: DS.attr('number'),
	actors: DS.hasMany('actor'),
	date: DS.attr('string', {
          defaultValue: function() { return new Date(); }
      }),
	favActor: Em.computed.filterBy('actors', 'name', 'Robert Downey Jr.'),
	profile: DS.belongsTo('profile'),
	code: function(){
		return '000001234A#' + this.get('id');
	}.property('id')
});

