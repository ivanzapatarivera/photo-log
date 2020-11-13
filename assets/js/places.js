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
        var imageEl = document.getElementById(`${divResponse}`);
        var photoLogsBoxEl = document.getElementById("recentPhotosLogsBox");
        var photoLogsImageCardsEl = document.getElementById("picturesWall");
        var locationsAPI = API + divResponse;

        imageEl.addEventListener("click", function () {
          photoLogsBoxEl.innerHTML = divResponse;
          fetch(locationsAPI)
            .then((res) => res.json())
            .then((res) => {
              for (var i = 0; i < res.length; i++) {
                var URL = res[i].URL;
                var id = res[i]._id;
                var title = res[i].title;
                var divImage = `<div class="cards mx-auto text-center col-4 col-lg-2" id=${id}>
                                <p class="mt-4" data-id=${id}>
                                  <p><img src=${URL} class="cardImage" /><br></p>
                                  <span class="cardTitle">${title}&nbsp;<br>
                                    <span onClick="delete" data-id=${id} class="delete">
                                      <i class="far fa-trash-alt delete" data-id=${id}></i>
                                    </span>
                                  </span>
                                </p>
                              </div>`;

                emptyHTML();
                function emptyHTML() {
                  photoLogsImageCardsEl.innerHTML = "";
                  insertHTML();
                }
                function insertHTML() {
                  photoLogsImageCardsEl.insertAdjacentHTML(
                    "afterend",
                    divImage
                  );
                }
              }
            });
        });
        var locationsAPI = API + divResponse;
        // fetch(locationsAPI)
        //   .then((res) => res.json())
        //   .then((res) => {
        //     for (var i = 0; i < res.length; i++) {
        //       var URL = res[i].URL;
        //       var divImage = `<a href="${URL}" target="_blank"><img src=${URL} class="col-10 my-2 divImage" /></a>`;
        //       imageEl.insertAdjacentHTML("afterend", divImage);
        //     }
        //   });
      });
    });
}

export { places };
