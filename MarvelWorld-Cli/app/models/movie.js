import DS from 'ember-data';

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
	year: DS.attr('number'),
	movieState: function(){    
		var year = this.get('year');
		var currentYear = parseInt(moment().format("YYYY"));
		if(year === currentYear){
			return this.get('i18n').current.premiere;
		}else if(year > currentYear){
			return this.get('i18n').current.comingSoon;
		}else{
			return this.get('i18n').current.released;
		}
	}.property('year'),
	code: function(){
		return '000001A#000' + this.get('id');
	}.property('id')
});

