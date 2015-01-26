
TVS.Serie = DS.Model.extend({
	title: DS.attr('string'),
	channel: DS.attr('string')
});

TVS.VerMas = DS.Model.extend({
	title: DS.attr('string'),
	channel: DS.attr('string')
});

TVS.Serie.FIXTURES = [
{id: 1, title: "The Walking Dead", channel: "AMC"},
{id: 2, title: "The Game of Thrones", channel: "HBO"},
{id: 3, title: "House of Cards", channel: "HBO"},
{id:4, title: "True Detectives", channel: "HBO"},
{id:5, title: "The Big Bang Theory", channel: "Warner"},
{id:6, title: "Mom", channel: "Warner"}
];

TVS.VerMas.FIXTURES = [
{id:7, title: "Mom", channel: "Warner"}
];