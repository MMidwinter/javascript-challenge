// from data.js
var tableData = data;
//console.log(tableData);
//Select where we are importing the table data
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Setting up a default table to get sarted

function createTable() {
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

tbody.call(createTable);

//Selecting the button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

//Creating event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

//Creating the button code
//submit.on("click", function() { 
function runEnter() {
    
    //Prevent refreshing
    d3.event.preventDefault();
    //console.log("event handler running");
    //Selecting the input element
    var inputElement = d3.select("#date-time");

    //getting the input value
    var inputValue = inputElement.property("value");

    console.log(`inputValue = ${inputValue}`);
    //console.log(tableData);
    
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    //console.log(filteredData);
    tbody.html("");

    //Re create the table with the data filtered
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredData = tableData
    
};