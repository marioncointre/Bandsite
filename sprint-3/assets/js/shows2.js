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

  for (let i = 0; i < showArrRes.length; i++) {
    // creating the basic elements
    let button = document.createElement("button");
    let columnButton = document.createElement("td");
    let pLocation = document.createElement("p");
    let columnLocation = document.createElement("td");
    let pVenue = document.createElement("p");
    let columnVenue = document.createElement("td");
    let pDate = document.createElement("p");
    let columnDate = document.createElement("td");
    let row = document.createElement("tr");
    let showTable = document.querySelector(".shows-table");

    let showDates = showArrRes[i].date;
    let showLocation = response.data[i].location;
    let showVenue = response.data[i].place;

    pDate.innerHTML = showDates; // edit pararapgrah to add show data
    columnDate.appendChild(pDate); // appending column to add paragraph
    row.appendChild(columnDate); // appending row to add column
    showTable.appendChild(row); //appending body to add row

    pVenue.innerHTML = showVenue; // edit pararapgrah to add show data
    columnVenue.appendChild(pVenue); // appending column to add paragraph
    row.appendChild(columnVenue); // appending row to add column

    pLocation.innerHTML = showLocation; // edit pararapgrah to add show data
    columnLocation.appendChild(pLocation); // appending column to add paragraph
    row.appendChild(columnLocation); // appending row to add column

    button.innerHTML = "Buy Tickets";
    columnButton.appendChild(button); // appending column to add paragraph
    row.appendChild(columnButton); // appending column to add paragraph

    pDate.classList.add("date");
    pVenue.classList.add("venue");
    pLocation.classList.add("location");
    // columnDate.classList.add("hidden");
    // columnVenue.classList.add("hidden");
    // columnLocation.classList.add("hidden");
    row.classList.add("event");
    row.classList.add("event");
  }
});
