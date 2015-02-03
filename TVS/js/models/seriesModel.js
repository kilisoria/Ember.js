
TVS.Serie = DS.Model.extend({
	title: DS.attr('string'),
	channel: DS.attr('string'),
	web: DS.attr('string'),
	status: DS.attr('string')
});

TVS.HistorySerie = DS.Model.extend({
	title: DS.attr('string'),
	channel: DS.attr('string'),
	web: DS.attr('string'),
	status: DS.attr('string')
});

TVS.Serie.FIXTURES = [
{id: 1, title: 'The Walking Dead', channel: 'AMC', web: 'http://www.amctv.com/shows/the-walking-dead', status: 'ongoing'},
{id: 2, title: 'The Game of Thrones', channel: 'HBO', web: 'http://www.hbo.com/game-of-thrones', status: 'ongoing'},
{id: 3, title: 'House of Cards', channel: 'Netflix',  web: 'http://nflx.it/16gJcMf', status: 'ongoing'},
{id:4, title: 'True Detectives', channel: 'HBO', web: '', status: 'completed' },
{id:5, title: 'The Big Bang Theory', channel: 'CBS', web: 'http://www.cbs.com/shows/big_bang_theory/', status: 'ongoing' },
{id:6, title: 'Marvel - Agent of Shield', channel: 'ABC', web: 'http://abc.go.com/shows/marvels-agents-of-shield', status: 'ongoing'},
];

TVS.HistorySerie.FIXTURES = [
{id:1, title: 'Fargo', status: 'completed'},
{id:2, title: 'Believe', status: 'canceled'},
{id:3, title: 'Transparent',  status: 'completed'},
{id:4, title: 'Flash',  status: 'ongoing'}
];