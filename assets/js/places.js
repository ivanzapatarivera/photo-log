const placesEl = document.querySelector("#places");
var eventPicDiv = document.querySelector("#pictureDiv");
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
                var description = res.description;

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

                // Event to enlarge image when clicking on dynamically generated card
                const eventPictureClick = document.getElementById(id);
                eventPictureClick.addEventListener("click", function (event) {
                  eventPicDiv.style.visibility = "visible";
                  var currentSrc = event.path[0].currentSrc;
                  var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage">
                                      <div id="caption" class="caption mt-0">${description}</div>`;
                  if (eventPicDiv) {
                    eventPicDiv.innerHTML = enlargedImage;
                  }
                  const eventCurrentSrc = document.getElementById(currentSrc);
                  eventCurrentSrc.addEventListener("click", function (event) {
                    if (eventPicDiv) {
                      eventPicDiv.style.visibility = "hidden";
                      eventPicDiv.innerHTML = "";
                    }
                  });
                });
              });
            });
        });
      });
    });
}

export { places };
