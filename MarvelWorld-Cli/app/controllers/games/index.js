import Ember from 'ember';

export default Ember.ArrayController.extend({
needs:['games/index'],
watches: Ember.computed.mapBy('model', 'watches'),
maxWatches: Ember.computed.max('watches')
});
