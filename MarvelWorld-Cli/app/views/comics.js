import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement:function(){
		this.$('.comics-table-container').css('color', '#373434');
	}
});