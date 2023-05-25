//declare and initilize all needed variables
const mountainsTableBody = document.querySelector("#mountains-tbl-body");
const mountainList = document.querySelector("#mountain-list");

//make ae function to load the list of mountians
function loadLocationList() {
    let option = new Option("Select Location...", "");//this just make a new/ default option in the dropdown
    mountainList.appendChild(option);//this will actually add the option variable to the drop down
  
    //these are the location for the terriorties
    //use a for loop to go though the array and display it in the dropdown (selector tag)
    //location is a local variable that will be used to travers though the whole array. this is lilterally like the for loop in java but we have to make our own local variable, has no declared data type and 
    for (const mountain of mountainsArray) {
      let option = document.createElement("option");//make a new option to select
      option.value = mountain.name;//set the value of the option. value gets
      option.innerText = mountain.name;//set the text of the option 
      mountainList.appendChild(option);//this is how we add options to the list dynamially. by using the appendchild method, keeping the previous options and adding the new ones from the array
    }
  }

  //call the function
  loadLocationList();

  //this function will take the information from the selected array and put it in the table body
//this funciton works for the parks dropdpwn also
function buildMountainsRow(tbody, mountain) {
    let row = tbody.insertRow(-1);
  
    let cell1 = row.insertCell(0);
    cell1.innerText = mountain.img;
  
    let cell2 = row.insertCell(1);
    cell2.innerText = mountain.name;
  
    let cell3 = row.insertCell(2);
    cell3.innerText = mountain.desc;
  
    let cell4 = row.insertCell(3);
    cell4.innerText = mountain.elevation;
  
    let cell5 = row.insertCell(4);
    cell5.innerText = mountain.effort;
  
    let cell6 = row.insertCell(5);
  
    //some parks do not have a phonenumber so if there is not a number make it apperar blank in the table
    //we can just put the variable in the condition to check if the statement if ture or false
    if (mountain.Phone) {
        cell6.innerText = mountain.Phone;
    }
  
  
    let cell7 = row.insertCell(6);
  
    if (mountain.Visit) {
    cell7.innerText = mountain.Visit;
    } 
  }//end of function

  function loadMountainsTable(mountainName) {
    mountainsTableBody.innerHTML = "";
    const filteredMountains = mountainsArray.filter(
      (mountain) => mountain.name == mountainName
    );
    for (const mountain of filteredMountains) {
      buildMountainsRow(mountainsTableBody, mountain);
    }
  }
  
  //change the showed location at the change of the selected option in the drop down
function handleMountainChanged() {
    const mountainName = mountainList.value;
    loadMountainsTable(mountainName);
  }//end of array