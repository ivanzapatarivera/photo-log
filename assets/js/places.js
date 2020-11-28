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
    .then((res) => {
      return res.json(API);
    })
    .then((response) => {
      response.map((divResponse) => {
        console.log(divResponse);
        // Display name of album by each location
        var divLocations = `<div class="col-12 text-center">
                              <h5 id="${divResponse}" class="mt-4 divResponse">${divResponse}</h5>
                            </div>`;
        placesEl.insertAdjacentHTML("beforeend", divLocations);

        // Display all images contained in each album
        var placesTraveledCityNameEl = document.getElementById(
          `${divResponse}`
        );
        var photoLogsBoxEl = document.getElementById("picturesCollage");
        var photoLogsImageCardsEl = document.getElementById("collageDivs");
        var locationsAPI = API + divResponse;

        // Event listener to render image cards on dynamically generated card
        placesTraveledCityNameEl.addEventListener("click", () => {
          placesEl.classList.remove("slide-in-top");
          photoLogsBoxEl.innerHTML = `<h4 class="text-center my-3">${divResponse}</h4>`;
          photoLogsImageCardsEl.innerHTML = "";
          fetch(locationsAPI)
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              res.map((res) => {
                var URL = res.URL;
                var id = res._id;                
                var title = res.title;
                var description = res.description;
                // console.log(`This is URL: `, URL);
                // console.log(`This is id: `, id);
                // console.log(`This is title: `, title);
                // console.log(`This is description: `, description);


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

                photoLogsBoxEl.insertAdjacentHTML('beforeend', card);

                // Event to enlarge image when clicking on dynamically generated card
                // console.log(id);
                const eventPictureClick = document.getElementById(`${id}`);
                // console.log(eventPictureClick);
                eventPictureClick.addEventListener("click", (event) => {
                    // console.log(event)
                  eventPicDiv.style.visibility = "visible";
                  eventPicDiv.classList.add("flip-in-ver-left");
                  var currentSrc = event.path[0].currentSrc;
                  console.log(currentSrc);
                  var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage">
                                      <div id="caption" class="caption mt-0">${description}</div>`;
                  if (eventPicDiv) {
                    eventPicDiv.innerHTML = enlargedImage;
                  }

                //   // Event listener to change visbility of dynamically created image DIVs
                  const eventCurrentSrc = document.getElementById(currentSrc);
                  eventCurrentSrc.addEventListener("click", () => {
                    if (eventPicDiv) {
                      eventPicDiv.style.visibility = "hidden";
                      eventPicDiv.classList.remove("flip-in-ver-left");
                      eventPicDiv.innerHTML = "";
                    }
                  });
                });
              });
            });
          
          placesEl.style.visibility = "hidden";
        });
      });
    });
}

export { places };
