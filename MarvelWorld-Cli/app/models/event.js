import DS from 'ember-data';

export default DS.Model.extend({
   code: DS.attr('string'),
   name: DS.attr('string'),
   country: DS.attr('string'),
   address: DS.attr('string'),
   place: DS.attr('string'),
   price: DS.attr('number'),
   date: DS.attr('date'),  
   available: DS.attr('boolean'),
   capacity: DS.attr('number'),
   speakers: DS.hasMany('speaker'),
   comments: DS.attr('string'),
   businessLine: DS.belongsTo('business-line'),
   eventType: DS.belongsTo('event-type'), 
   completeName: function(){
     return this.get('code')  + 'C' + ' - '  + this.get('name') + ' - '  + this.get('country');
   }.property('code', 'name', 'country'),
   leftTime: function(){
   }.property('date')
});   