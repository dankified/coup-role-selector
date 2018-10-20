(function() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      alert("Shit be good!");
    }
  };
  request.open('GET', '/roster', true);
  request.send();
}())