import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	event: DS.belongsTo('event')
});
