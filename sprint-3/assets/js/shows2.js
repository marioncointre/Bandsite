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
    var pDate = document.createElement("p");
    var columnDate = document.createElement("td");
    // var button = <button>Buy Tickets</button>;
    // var column3 = document.createElement("td");
    // var paragraph = document.createElement("p");
    // var column2 = document.createElement("td");
    // var title5 = document.createElement("H5");
    // var column4 = document.createElement("td");
    var row = document.createElement("tr");
    let showTable = document.querySelector(".shows-table");

    // declare variables

    var showDates = response.data[i].date;
    // var showLocation = response.data[i].location;
    // var showVenue = response.data[i].place;

    showTable.innerText = row; //edit body to add row tag
    row.innerText = columnDate; // edit row to add column
    columnDate.innerText = pDate; // edit column to add paragraph
    pDate.innerText = showDates; // edit pararapgrah to add show data

    // column1.appendChild(button);
    // column2.appendChild(title5);
    // column3.appendChild(paragraph);
    // paragraph.appendChild(showLocation);

    showTable.appendChild(row); //apending body to add row
    row.appendChild(columnDate); // apending row to add column
    columnDate.appendChild(pDate); // apending column to add paragraph
    pDate.appendChild(showDates); // apending paragraph to add data
  }
});
