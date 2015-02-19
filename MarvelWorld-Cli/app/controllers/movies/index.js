import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs:['actors'],
	sortProperties: ['title'],
    sortAscending: true,
	watches: Ember.computed.mapBy('model', 'watches'),
	maxWatches: Ember.computed.max('watches'),
	minWatches: Ember.computed.min('watches'),	
	hasMovieAward: Ember.computed.any('model', 'award'),
/*	movieState: function(){
    console.log("0001");
    var year = this.get('year');
    var currentYear = parseInt(moment().format("YYYY"));

	    if(year === currentYear){
	    	this.set('movieStateClass', 'movie-premiere');
			return "Premiere";			
	    }else if(year > currentYear){
	    	this.set('movieStateClass', 'movie-coming-soon');
	    	return "Coming Soon";
	    }else{
	    	this.set('movieStateClass', 'movie-released');
			return	"Released";
	    }
	}.property('year'),*/
	actions:{
		seeAllActors:function(){
			this.get('controllers.actors').send('showAllActors');
		},
		load: function(){
			this.transitionToRoute('movies');
		}
	}
});
