
export default Ember.Mixin.create({
	total:function(){
		return this.get('model').content.length;
	}.property('model')
});