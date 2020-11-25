function cache() {
  const event = document.querySelector("#picturesWall");
  var eventPicDiv = document.querySelector("#pictureDiv");
  const API = "/log";
  return { event, API, eventPicDiv };
}

function pictures() {
  var { event, API, eventPicDiv } = cache();
  if (event) {
    // Rendering the last 6 images posted
    fetch(API)
      .then((res) => res.json(API))
      .then((data) => {
        data = data.slice(Math.max(data.length - 6, 0));
        
        data.map((data) => {
          const title = data.title;
          const id = data._id;
          const description = data.description;
          const URL = data.URL;
          

          var card = `<div class="cards mx-auto text-center col-4 col-lg-2" id=${id}>
                        <p class="mt-4" data-id=${id}>
                        <p><img src=${URL} class="cardImage" /><br></p> 
                        <span class="cardTitle">${title}&nbsp;<br>
                          <span onClick="delete" data-id=${id} class="delete">
                            <i class="far fa-trash-alt delete" data-id=${id}></i>
                          </span>
                        </span></p>
                      </div>`;

          event.insertAdjacentHTML("beforeend", card);
          const eventPictureClick = document.getElementById(id);

          // Display dynamically generated albums of traveled places
          eventPictureClick.addEventListener("click", (event) => {
            eventPicDiv.style.visibility = "visible";
            eventPicDiv.classList.add("flip-in-ver-left");
            var currentSrc = event.path[0].currentSrc;

            var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage vertical-center">
                                <div id="caption" class="caption mt-0">${description}</div>`;

            if (eventPicDiv) {
              eventPicDiv.innerHTML = enlargedImage;
            }

            // Change albums of traveled places visibility
            eventPicDiv.addEventListener("click", () => {
              if (eventPicDiv) {
                eventPicDiv.style.visibility = "hidden";
                eventPicDiv.innerHTML = "";
                eventPicDiv.classList.remove("flip-in-ver-left");
              }
            });
          });
        });
        console.log(data[0].URL)
        const picturesCollageHeading = document.querySelector('#picturesCollageHeading');

        /* -------------------------------------------------
        Images loading OK
        need to update styles as tiles with on hover effects 
        using animate.css or animista 
        ----------------------------------------------------
        */
        var collageDivs = `<div class="row p-3 mainCollageDIV">
                            <!-- First DIV -->
                            <div class="col-3 px-0"><img src=${data[0].URL} class="collageImageDIV firstDiv" /></div>
                            <div class="col-5">
                              <div class="row">
                                <!-- Second DIV -->
                                <div class="col-12 px-0"><img src=${data[1].URL} class="collageImageDIV secondDiv" /></div>
                              </div>
                              <div class="row">
                                <!-- Third DIV -->
                                <div class="col-6 px-0"><img src=${data[2].URL} class="collageImageDIV thirdDiv" /></div>
                                <!-- Fourth DIV -->
                                <div class="col-6 px-0"><img src=${data[3].URL} class="collageImageDIV fourthDiv" /></div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="row">
                                <!-- Fifth DIV -->
                                <div class="col-12 px-0"><img src=${data[4].URL} class="collageImageDIV fifthDiv" /></div>
                              </div>
                              <div class="row">
                                <!-- Sixth DIV -->
                                <div class="col-12 px-0"><img src=${data[5].URL} class="collageImageDIV sixthDiv" /></div>
                              </div>
                            </div>
                          </div>`;
      
        if(picturesCollageHeading) {
          picturesCollageHeading.insertAdjacentHTML('afterend', collageDivs)
        }

      });
  }

  
  event.addEventListener("click", (e) => {
    if (e.target.matches(".delete")) {
      var el = e.target;
      var dataID = el.getAttribute("data-id");
      fetch("/deleteLog/" + dataID, {
        method: "delete",
      }).then(() => {
        location.reload();
      });
    }
  });
}

export { pictures };
