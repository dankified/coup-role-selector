function createSectionForEachRole(roster) {
  const root = document.getElementById('root');
  for(let role in roster) {
    const div = document.createElement('DIV');
    div.classList.add('role');
    div.classList.add(role.split(' ')[0]);
    const p = document.createElement('P');
    const text = document.createTextNode(`${role}: ${roster[role]}`);
    p.appendChild(text);
    div.appendChild(p);
    root.appendChild(div);
  }
}

(function() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      const roster = JSON.parse(this.responseText);
      createSectionForEachRole(roster);
    }
  };
  request.open('GET', '/roster', true);
  request.send();
}());