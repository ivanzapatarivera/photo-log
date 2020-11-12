const placesEl = document.querySelector("#places");
function places() {
  if (placesEl) {
    displayLocations();
  }
}

const API = "/getLocations/";
function displayLocations() {
  fetch(API)
    .then((res) => res.json(API))
    .then((response) => {
      response.map((locations) => {
        console.log(locations);
        var card = `<div class="text-center">
                        <h6 id="${locations}">${locations}</h6 id="${locations}">
                    </div>`;
        placesEl.insertAdjacentHTML("afterend", card);

        fetch(API + locations)
        .then((res) => res.json(API + locations))
        .then((allLocations) => {
          console.log(allLocations);
          
        })

        
    });

      // for (var i = 0; i < response.length; i++) {
      //   fetch(API + response[i])
      //     .then((res) => res.json(API + response[i]))
      //     .then((response) => {
      //       response.map((locationsJSON) => {
      //         console.log(response);
      //       });
      //     });
      // }
    });
}

export { places };
