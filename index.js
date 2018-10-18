const http = require('http');

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
	let categories = ['Finance', 'Special Interests 2', 'Communications', 'Force'];
	[finance, specialInterest, communications, force].forEach((el, i) => {
		roster[categories[i]] = pickRandom(el);
	});
	return roster;
}

const server = http.createServer((req, res) => {
		res.end(JSON.stringify(buildRoster()));
	}
);

server.listen(port, () => console.log("Server up!"));