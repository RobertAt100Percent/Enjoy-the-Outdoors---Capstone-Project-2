const locationList = document.querySelector("#location-list");
const parksTableBody = document.querySelector(
  "#parks-tbl-body"
);

function loadLocationList() {
  let option = new Option("Select Location...", "");
  locationList.appendChild(option);

  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    locationList.appendChild(option);
  }
}
loadLocationList();

function buildParkRow(tbody, park) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = park.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;


  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;


  let cell5 = row.insertCell(4);
  cell5.innerText = park.ZipCode;

  
  let cell6 = row.insertCell(5);
  
  if (park.Phone) {
      cell6.innerText = park.Phone;
  }


  let cell7 = row.insertCell(6);

  if (park.Visit) {
  cell7.innerText = park.Visit;
  }
  
}

function loadParksTable(location) {
  parksTableBody.innerHTML = "";
  const filteredParks = nationalParksArray.filter(
    (park) => park.State == location
  );
  for (const park of filteredParks) {
    buildParkRow(parksTableBody, park);
  }
}

function handleLocationChanged() {
  const location = locationList.value;
  loadParksTable(location);
}

