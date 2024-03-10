function randomFacts() {
  let xmlhttp = new XMLHttpRequest();
  let url = 'https://api.chucknorris.io/jokes/random';
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let json = JSON.parse(this.responseText);
      parseResponse(json);
    }
  };
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
}

function parseResponse(json) {
  document.getElementById('data').innerHTML = '<b>' + json['value'] + '</b>';
}

document.getElementById('logo').addEventListener('click', function () {
  randomFacts();
});

const postContainer = document.getElementById('postContainer');
const button = document.createElement('button');
button.textContent = 'Get a FACT';
button.addEventListener('click', () => {
  randomFacts();
});

postContainer.appendChild(button);
