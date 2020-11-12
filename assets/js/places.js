const placesEl = document.querySelector("#places");
function places() {
  if (placesEl) {
    displayLocations();
  }
}

const API = "/getLocations/";
var allLocationsArray = [];
function displayLocations() {

  var locationsArray = [];

  fetch(API)
    .then((res) => res.json(API))
    .then((response) => {
      response.map((divResponse) => {
        var divLocations = `<div class="col-12 bg-danger">
                              <h5 id="${divResponse}">${divResponse}</h5>
                            </div>`;
        placesEl.insertAdjacentHTML("afterbegin", divLocations);
        locationsArray.push(divResponse);
      })
    })
  console.log('This is locationsArray: ', locationsArray);
  allLocationsArray.push(locationsArray)
  displayPictures();
}

var locations

function displayPictures() {
  console.log('These is allLocationsArray inside displayPictures(): ' + allLocationsArray);
}

export { places };
