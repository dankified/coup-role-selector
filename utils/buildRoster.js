/**
 * Declares and returns an object containing all different roles.
 */
function buildRoster() {
  return {finance: ['Banker', 'Speculator', 'Spy', 'Farmer', 'Capitalist'], specialInterest: [
  'Missionary', 'Foreign Consular', 'Protestor', 'Communist', 'Politician', 
  'Priest', 'Peacekeeper', 'Lawyer', 'Customs Officer', 'Intellectual'
], communications: ['Newscaster','Reporter','Writer', 'Director', 'Producer'], force: ['Judge', 'Mercenary', 'General', 'Guerrilla', 'Crime Boss']}
}

module.exports = buildRoster;