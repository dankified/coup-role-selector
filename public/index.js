let roster =  {specialInterest: [
  'Missionary', 'Foreign Consular', 'Protestor', 'Communist', 'Politician', 
  'Priest', 'Peacekeeper', 'Lawyer', 'Customs Officer', 'Intellectual'
], finance: ['Banker', 'Speculator', 'Spy', 'Farmer', 'Capitalist'], communications: ['Newscaster','Reporter','Writer', 'Director', 'Producer'], force: ['Judge', 'Mercenary', 'General', 'Guerrilla', 'Crime Boss']
};

let categories = {
  specialInterest: "Special Interests",
  specialInterest2: "Special Interests",
  finance: "Finance",
  communications: "Communications",
  force: "Force"
}

function pickRandom(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array.splice(randomIndex, 1)[0];
}

function buildRoster(roster) {
  let newRoster = JSON.parse(JSON.stringify(roster));
  newRoster['Special Interest'] = pickRandom(newRoster.specialInterest);
	newRoster['Special Interest 2'] = pickRandom(newRoster.specialInterest);
	let categories = ['Finance', 'Communications', 'Force'];
	['finance', 'communications', 'force'].forEach((el, i) => {
		newRoster[categories[i]] = pickRandom(newRoster[el]);
  });
  return newRoster;
}

function createSection(root, roster, role) {
  const div = document.createElement('DIV');
  div.classList.add('role');
  div.classList.add(categories[role].split(' ')[0]);
  const p = document.createElement('P');
  const text = document.createTextNode(`${categories[role]}: ${pickRandom(roster[role])}`);
  p.appendChild(text);
  div.appendChild(p);
  root.appendChild(div);
}

function populateRoster(roster) {
  const root = document.getElementById('root');
  while(root.firstChild) root.removeChild(root.firstChild);
  for(let role in roster) {
    createSection(root, roster, role);
    if(categories[role] === 'Special Interests') createSection(root, roster, role)
  }
}

(function() {
  populateRoster(JSON.parse(JSON.stringify(roster)))
  document.getElementById('new-roster').addEventListener('click', () => {
    populateRoster(JSON.parse(JSON.stringify(roster)));
  });
}());