/**
 * Function takes an array as an argument, extracts a random element from the array and returns said element. Mutates the array.
 * @param {Object[]} array
 */
function pickRandom(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array.splice(randomIndex, 1)[0];
}

/**
 * Declares a series of arrays and builds an object based on calling pickRandom with all the previously created arrays as arguments
 */

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

module.exports = buildRoster;