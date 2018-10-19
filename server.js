const http = require('http');
const staticHandler = require('./handlers/staticHandler');

const port = process.env.PORT || 5000;

function pickRandom(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array.splice(randomIndex, 1)[0];
}

function buildRoster() {
	const finance = ['Banker', 'Speculator', 'Spy', 'Farmer', 'Capitalist']
	const specialInterest = [
		'Missionary', 'Foreign Consular', 'Protestor', 'Communist', 'Politician', 
		'Priest', 'Peacekeeper', 'Lawyer', 'Customs Officer', 'Intellectual'
	]
	const communications = ['Newscaster','Reporter','Writer', 'Director', 'Producer']
	const force = ['Judge', 'Mercenary', 'General', 'Guerrilla', 'Crime Boss']

	let roster = {};
	roster['Special Interest'] = pickRandom(specialInterest);
	roster['Special Interest 2'] = pickRandom(specialInterest);
	let categories = ['Finance', 'Communications', 'Force'];
	[finance, communications, force].forEach((el, i) => {
		roster[categories[i]] = pickRandom(el);
	});
	return roster;
}

const server = http.createServer((req, res) => {
		switch(req.url) {
			case '/': {
				staticHandler(req, res, req.url);
				break;
			} case '/roster': {
				res.end(JSON.stringify(buildRoster()));
				break;
			} default: {
				res.end({404: 'Handler not found'});
			}
		}
	}
);

server.listen(port, () => console.log("Server up!"));