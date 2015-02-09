import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	brief: DS.attr('string'),
	review: DS.attr('number'),
	actors: DS.hasMany('actor'),
	date: DS.attr('string', {
          defaultValue: function() { return new Date(); }
      }),
	profile: DS.belongsTo('profile'),
	code: function(){
		return '000001234A#' + this.get('id');
	}.property('id')
});

