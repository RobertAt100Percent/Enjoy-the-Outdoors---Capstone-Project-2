//functions for the Parks page
//funtiocns and variables for the Park Card

//declare and initialize all needed variables 
const locationList = document.querySelector("#location-list");//assign the select tag (which is the dropdown) to this variable. make it constant so it dosent change
const parksTableBody = document.querySelector("#parks-tbl-body");//assign the table body and make it constant so we can add and take away information without changing what the variable is assigned to 

function loadLocationList() {
  let option = new Option("Select Location...", "");//this just make a new/ default option in the dropdown
  locationList.appendChild(option);//this will actually add the option variable to the drop down

  //use a for loop to go though the array and display it in the dropdown (selector tag)
  //location is a local variable that will be used to travers though the whole array. this is lilterally like the for loop in java but we have to make our own local variable, has no declared data type and 
  for (const location of locationsArray) {
    let option = document.createElement("option");//make a new option to select
    option.value = location;//set the value of the option. value gets
    option.innerText = location;//set the text of the option 
    locationList.appendChild(option);//this is how we add options to the list dynamially. by using the appendchild method, keeping the previous options and adding the new ones from the array
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

//functions for the States/Territories

