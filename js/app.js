// Assign the data from `data.js` to a descriptive variable
var ufositings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the ufo data from data.js
// console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo siting object
// data.forEach(function(ufositings) {
//   console.log(ufositings);
// });


data.forEach((ufositings) => {
  var row = tbody.append("tr");
  Object.entries(ufositings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// var resultufositings = data.filter(function (a) {
//   var datetimeinput = a.datetime || {};
//   // extract all date strings
//   datetimeinput = Object.keys(datetimeinput);
//   // improvement: use some. this is an improment because .map()
//   // and .filter() are walking through all elements.
//   // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
//   DateMatchExists = datetimeinput.some(function(dateStr) {
//       var date = new Date(dateStr);
//       return date >= datetime
//   });
//   return DateMatchExists;
// });
// console.log(resultufositings);


// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufositings);

  var filteredData = ufositings.filter(siting => siting.datetime === inputValue);

  console.log(filteredData);

  tbody.html(" ")
  
  filteredData.forEach((ufositings) => {
    var row = tbody.append("tr");
    Object.entries(ufositings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};