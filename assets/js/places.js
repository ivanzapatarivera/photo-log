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
        // console.log(locations);
        fetch(API + locations)
          .then((res) => res.json(API + locations))
          .then((allLocations) => {
            // console.log(allLocations[0].location);
            var i = 0;
            i++
            // console.log(i);
            // console.log('This is allLocations ', allLocations.length)
            var locationsURL = [];
            for(var i = 0; i < allLocations.length; i++){
              var locs = allLocations[i].URL
              locationsURL.push(locs);
              var card = `<div class="text-center">
                            <img src='${locationsURL}' id='${allLocations[0].location}' />
                         </div>`;
              console.log(card);
            }
            // console.log('These are the locations URL\'s :', locationsURL);
            // var card = `<div class="text-center">
            //                 <h6 id="${locations}"><a href="/getLocations/${locations}">${allLocations[0].location}</a></h6>` + locationsURL + `<br>
            //                 <img src='${locationsURL}' />
            //             </div>`;
            // placesEl.insertAdjacentHTML("afterend", card);
          });
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
