let showTable = document.querySelector(".shows-table");

// Authentification
const authentificationKey = axios.get(
  "https://project-1-api.herokuapp.com/register"
);

authentificationKey.then(function(response) {
  const authkey = response.data.api_key;
});

//Get array of comments from API
let showArr = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=authkey"
);

showArr.then(function(response) {
  let showArrRes = response.data;

  console.log(showArrRes);
  for (var i = 0; i < showArrRes.length; i++) {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let column = document.createElement("td");
    var showDates = response.data[i].date;
    var showLocation = response.data[i].location;
    var showVenue = response.data[i].place;

    table.innerText = showDates;
    // .innerText = showLocation;
    // .innerText = showVenue;
    showTable.appendChild(table);
    showTable.appendChild(tbody);
    showTable.appendChild(row);
    showTable.appendChild(column + "test");
    showTable.appendChild(column);
    showTable.appendChild(column);
  }
});

// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0:
// date: "MON 21 MAY"
// id: 0
// location: "Montebello, QC, Canada"
// place: "Montebello Rockfest"

function insertRow() {
  var row = document.createElement("tr");
}

function insertColumn() {
  var column = document.createElement("td");
}

function insertButton() {
  insertColumn() + "<button>";
}

function tableLayout() {
  insertRow();
  insertColumn() + "<h5>";
  insertColumn() + "<p>";
  insertColumn() + "<h5>";
  insertColumn() + "<p>";
  insertColumn() + "<h5>";
}
