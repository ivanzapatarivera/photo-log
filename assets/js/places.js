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
        var divLocations = `<div class="col-12">
                              <h5 id="${divResponse}">${divResponse}</h5>
                            </div>`;
        placesEl.insertAdjacentHTML("afterend", divLocations);
        var imageEl = document.getElementById(`${divResponse}`);
        imageEl.addEventListener("click", function () {
        });

        var locationsAPI = API + divResponse;
        fetch(locationsAPI)
          .then((res) => res.json())
          .then((res) => {
            for (var i = 0; i < res.length; i++) {
              var URL = res[i].URL;
              var divImage = `<a href="${URL}" target="_blank"><img src=${URL} class="col-10 py-4" /></a>`;
              imageEl.insertAdjacentHTML("afterend", divImage);
            }
          });
      });
    });
}

export { places };
