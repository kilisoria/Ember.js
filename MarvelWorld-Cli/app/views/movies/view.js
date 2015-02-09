import Ember from 'ember';

export default Ember.View.extend({
	click: function(){
		console.log("click on the view");
		console.log(this.get('controller.model.review'));
	}
});
