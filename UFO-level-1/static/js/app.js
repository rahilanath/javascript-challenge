// letiables
let ufoData = data;
let tbody = d3.select("tbody");
let form = d3.select("form");
let filter = d3.select("#filter-btn");
let clear = d3.select("#clear-btn");

// loop through data and append elements
data.forEach((ufoReport) => {
    let row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        let cell = row.append("td");
        cell.text(value);
    });
});

// filter function
function filterData() {

    // prevent page refresh
    d3.event.preventDefault();

    // get HTML node for input
    let inputElement = d3.select("#datetime");

    // get value from input element
    let inputValue = inputElement.property("value");

    // get filtered data
    let filteredData = ufoData.filter(ufoReport => ufoReport.datetime === inputValue);
    console.log(filteredData);

    // clear table
    tbody.html("");

    // insert filtered data
    filteredData.forEach((ufoReport) => {
        let row = tbody.append("tr");

        Object.entries(ufoReport).forEach(function([key, value]) {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

// clear function
function clearFilter() {
    // clear table
    tbody.html("");

    // loop through data and append elements
    data.forEach((ufoReport) => {
        let row = tbody.append("tr");

        Object.entries(ufoReport).forEach(function([key, value]) {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

// event handlers
form.on("submit", filterData);
filter.on("click", filterData);
clear.on("click", clearFilter);
