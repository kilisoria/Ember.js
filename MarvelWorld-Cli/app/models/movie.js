import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	brief: DS.attr('string')
});
