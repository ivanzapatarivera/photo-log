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
      response.map((divResponse) => {

        // Display name of album by each location
        var divLocations = `<div class="col-12 text-center">
                              <h5 id="${divResponse}" class="mt-4">${divResponse}</h5>
                            </div>`;
        placesEl.insertAdjacentHTML("afterend", divLocations);

        // Display all images contained in each album
        var imageEl = document.getElementById(`${divResponse}`);
        var locationsAPI = API + divResponse;
        fetch(locationsAPI)
          .then((res) => res.json())
          .then((res) => {
            for (var i = 0; i < res.length; i++) {
              var URL = res[i].URL;
              var divImage = `<a href="${URL}" target="_blank"><img src=${URL} class="col-10 my-2 divImage" /></a>`;
              imageEl.insertAdjacentHTML("afterend", divImage);
            }
          });
      });
    });
}

export { places };
