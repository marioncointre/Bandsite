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
    let titleDate = "<h5>Date</h5>";
    let button = document.createElement("button");
    let columnButton = document.createElement("td");
    let pLocation = document.createElement("p");
    let coltitleLocation = document.createElement("td");
    let columnLocation = document.createElement("td");
    let pVenue = document.createElement("p");
    let coltitleVenue = document.createElement("td");
    let columnVenue = document.createElement("td");
    let pDate = document.createElement("p");
    let coltitleDate = document.createElement("td");
    let columnDate = document.createElement("td");
    let row = document.createElement("tr");
    let showTable = document.querySelector("tbody");

    let showDates = showArrRes[i].date;
    let showLocation = response.data[i].location;
    let showVenue = response.data[i].place;

    pDate.innerHTML = showDates; // edit pararapgrah to add show data
    coltitleDate.innerHTML = "<h5>Date</h5>"; // appending column to add title date
    columnDate.appendChild(pDate); // appending column to add paragraph
    row.appendChild(coltitleDate); // appending row to add column title
    row.appendChild(columnDate); // appending row to add column
    showTable.appendChild(row); //appending body to add row

    pVenue.innerHTML = showVenue; // edit pararapgrah to add show data
    coltitleVenue.innerHTML = "<h5>Venue</h5>"; // appending column to add title date
    columnVenue.appendChild(pVenue); // appending column to add paragraph
    row.appendChild(coltitleVenue); // appending row to add column title
    row.appendChild(columnVenue); // appending row to add column

    pLocation.innerHTML = showLocation; // edit pararapgrah to add show data
    coltitleLocation.innerHTML = "<h5>Location</h5>"; // appending column to add title date
    columnLocation.appendChild(pLocation); // appending column to add paragraph
    row.appendChild(coltitleLocation); // appending row to add column title
    row.appendChild(columnLocation); // appending row to add column

    button.innerHTML = "Buy Tickets";
    columnButton.appendChild(button); // appending column to add paragraph
    row.appendChild(columnButton); // appending column to add paragraph

    pDate.classList.add("date");
    pVenue.classList.add("venue");
    pLocation.classList.add("location");
    coltitleDate.classList.add("hidden");
    coltitleVenue.classList.add("hidden");
    coltitleLocation.classList.add("hidden");
    row.classList.add("event");
    row.classList.add("event");
  }
});
