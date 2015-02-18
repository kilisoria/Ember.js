import Ember from 'ember';
import Base from '../mixins/base';

export default Ember.Controller.extend(Base, {
	actions:{
		goToFeaturesUsed:function(){
			this.transitionToRoute('training');
		},
		goToGithub:function(){
			window.open('https://github.com/kilisoria','_blank');
		}
	}
  
});