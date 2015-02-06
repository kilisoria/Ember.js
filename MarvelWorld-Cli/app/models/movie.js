import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	brief: DS.attr('string'),
	code: function(){
		return '000001234A#' + this.get('id');
	}.property('id','title')
});
