//functions for the Parks page
//funtiocns and variables for the Park Card

//declare and initialize all needed variables 
const locationList = document.querySelector("#Territories-location-list");//assign the select tag (which is the dropdown) to this variable. make it constant so it dosent change
const TerritoriesTableBody = document.querySelector("#Territories-tbl-body");//assign the table body and make it constant so we can add and take away information without changing what the variable is assigned to 
const ParksTableBody = document.querySelector("#parks-tbl-body");
const parkLocationList = document.querySelector("#parks-location-list");

function loadLocationList() {
  let option = new Option("Select Location...", "");//this just make a new/ default option in the dropdown
  locationList.appendChild(option);//this will actually add the option variable to the drop down

  //these are the location for the terriorties
  //use a for loop to go though the array and display it in the dropdown (selector tag)
  //location is a local variable that will be used to travers though the whole array. this is lilterally like the for loop in java but we have to make our own local variable, has no declared data type and 
  for (const location of locationsArray) {
    let option = document.createElement("option");//make a new option to select
    option.value = location;//set the value of the option. value gets
    option.innerText = location;//set the text of the option 
    locationList.appendChild(option);//this is how we add options to the list dynamially. by using the appendchild method, keeping the previous options and adding the new ones from the array
  }
}

//these are the location for the park
function loadParksLocationList() {
  let option = new Option("Select Location...", "");//this just make a new/ default option in the dropdown
  parkLocationList.appendChild(option);//this will actually add the option variable to the drop down

  //these are the location for the terriorties
  //use a for loop to go though the array and display it in the dropdown (selector tag)
  //location is a local variable that will be used to travers though the whole array. this is lilterally like the for loop in java but we have to make our own local variable, has no declared data type and 
  for (const location of parkTypesArray) {
    let option = document.createElement("option");//make a new option to select
    option.value = location;//set the value of the option. value gets
    option.innerText = location;//set the text of the option 
    parkLocationList.appendChild(option);//this is how we add options to the list dynamially. by using the appendchild method, keeping the previous options and adding the new ones from the array
  }
}



//this calls the function and actually loads the list dropdown in the DOM
loadLocationList();

loadParksLocationList();

//this function will take the information from the selected array and put it in the table body
//this funciton works for the parks dropdpwn also
function buildTerritoriesRow(tbody, Territories) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = Territories.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = Territories.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = Territories.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = Territories.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = Territories.ZipCode;

  let cell6 = row.insertCell(5);

  //some parks do not have a phonenumber so if there is not a number make it apperar blank in the table
  //we can just put the variable in the condition to check if the statement if ture or false
  if (Territories.Phone) {
      cell6.innerText = Territories.Phone;
  }


  let cell7 = row.insertCell(6);

  if (Territories.Visit) {
  cell7.innerText = Territories.Visit;
  } 
}//end of function

function loadTerritoriesTable(location) {
  TerritoriesTableBody.innerHTML = "";
  const filteredParks = nationalParksArray.filter(
    (park) => park.State == location
  );
  for (const park of filteredParks) {
    buildTerritoriesRow(TerritoriesTableBody, park);
  }
}

function loadParksTable(location) {
  ParksTableBody.innerHTML = "";
  const filteredParks = nationalParksArray.filter(
    (park) => park.LocationName.includes(location) 
  );
  for (const park of filteredParks) {
    buildTerritoriesRow(ParksTableBody, park);
  }
}

//change the showed location at the change of the selected option in the drop down
function handleLocationChanged() {
  const location = locationList.value;
  loadTerritoriesTable(location);
}//end of array

//change the showed location at the change of the selected option in the drop down
function handleParksLocationChanged() {
  const location = parkLocationList.value;
  loadParksTable(location);
}//end of array

//display different drop downs

function displayTable(parksDropDown) {
  // let parksDropDown = document.querySelector('input[name="ex"]:checked').value;
 let displayTerritories = document.getElementById("TerritoriesArticle");
 let displayParks = document.getElementById("ParksArticle");

if (parksDropDown == 1) {
 displayTerritories.style.display = "block";
 displayParks.style.display = "none";

} 
if (parksDropDown == 2){
  displayParks.style.display = "block";
  displayTerritories.style.display = "none";

}
}
