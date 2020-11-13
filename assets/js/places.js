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
                              <h5 id="${divResponse}" class="mt-4 divResponse">${divResponse}</h5>
                            </div>`;
        placesEl.insertAdjacentHTML("beforeend", divLocations);

        // Display all images contained in each album
        var placesTraveledCityNameEl = document.getElementById(
          `${divResponse}`
        );
        var photoLogsBoxEl = document.getElementById("recentPhotosLogsBox");
        var photoLogsImageCardsEl = document.getElementById("picturesWall");
        var locationsAPI = API + divResponse;

        placesTraveledCityNameEl.addEventListener("click", function () {
          photoLogsBoxEl.innerHTML = divResponse;
          photoLogsImageCardsEl.innerHTML = "";
          fetch(locationsAPI)
            .then((res) => res.json())
            .then((res) => {
              res.map((res) => {
                var URL = res.URL;
                var id = res._id;
                var title = res.title;

                var card = `<div class="cards mx-auto text-center col-4 col-lg-2" id=${id}>
                                <p class="mt-4" data-id=${id}>
                                  <p><img src=${URL} class="cardImage" /><br></p>
                                  <span class="cardTitle">${title}&nbsp;<br>
                                    <span onClick="delete" data-id=${id} class="delete">
                                      <i class="far fa-trash-alt delete" data-id=${id}></i>
                                    </span>
                                  </span>
                                </p>
                              </div>`;

                photoLogsImageCardsEl.insertAdjacentHTML("afterbegin", card);
              });
            });
        });
      });
    });
}

export { places };
