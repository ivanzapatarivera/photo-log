

const placesEl = document.querySelector("#places");
function places() {
  if (placesEl) {
    displayLocations();
  }
}

const API = ('/getLocations');
var locationsArray = [];
function displayLocations() {
 

   fetch(API)
    .then((res) => res.json(API))
    .then((response) => {
        console.log(response)
        response.map((locations) => {
            console.log(locations);
            locationsArray.push(locations)
            // var card = `<div class="text-center">
            //             <h6>${locations}</h6>
            //             </div>`
            // placesEl.insertAdjacentHTML("afterend", card)
        })
    })

    allLocations();
}

function allLocations() {
  console.log('These are all the locations: ', locationsArray)
  
}


export { places };
