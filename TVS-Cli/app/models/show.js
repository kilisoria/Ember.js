import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	genre: DS.attr('string'),
	originalChannel: DS.attr('string'),
	numberSeasons: DS.attr('number'),
	numberEpisodes: DS.attr('number'),
	status: DS.attr('string')
});
