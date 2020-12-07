function cache() {
  const event = document.querySelector("#picturesCollage");
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
        var data = data.slice(Math.max(data.length - 6, 0));
        const collageDivsEl = document.querySelector("#collageDivs");

        /* -------------------------------------------------
        Images loading OK
        need to update styles as tiles with on hover effects 
        using animate.css or animista 
        ----------------------------------------------------
        */
        collageDivs(data);
        function collageDivs(data) {
          var dataLength = data.length;

          if (dataLength > 5) {
            // Assigns img src and id dynamically as per images logged by user
            var collageDivsImages = `
                            <!-- First DIV -->
                            <div class="col-3 px-0"><img src="${data[0].URL}" id="${data[0]._id}" class="collageImageDIV firstDiv" /></div>
                            <div class="col-5">
                              <div class="row">
                                <!-- Second DIV -->
                                <div class="col-12 px-0"><img src="${data[1].URL}" id="${data[1]._id}" class="collageImageDIV secondDiv" /></div>
                              </div>
                              <div class="row">
                                <!-- Third DIV -->
                                <div class="col-6 px-0"><img src="${data[2].URL}" id="${data[2]._id}" class="collageImageDIV thirdDiv" /></div>
                                <!-- Fourth DIV -->
                                <div class="col-6 px-0"><img src="${data[3].URL}" id="${data[3]._id}" class="collageImageDIV fourthDiv" /></div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="row">
                                <!-- Fifth DIV -->
                                <div class="col-12 px-0"><img src="${data[4].URL}" id="${data[4]._id}" class="collageImageDIV fifthDiv" /></div>
                              </div>
                              <div class="row">
                                <!-- Sixth DIV -->
                                <div class="col-12 px-0"><img src="${data[5].URL}" id="${data[5]._id}" class="collageImageDIV sixthDiv" /></div>
                              </div>
                            </div>
                          `;
            // Attaches dynamically generated images into DIV
            if (collageDivsEl) {
              collageDivsEl.insertAdjacentHTML("beforeend", collageDivsImages);
            }
          } else {
            data.map((res) => {
            
              const id = res._id;
              const URL = res.URL;
              const title = res.title;
            
              // Dynamically generated cards
              var collageDivsImages = `<div class="cards mx-auto text-center col-4 col-lg-4" id="${id}">
                                          <p class="mt-4" data-id="${id}">
                                          <p><img src="${URL}" class="cardImage" /><br></p>
                                          <span class="cardTitle">${title}&nbsp;                                           
                                          </span></p>
                                        </div>`;
            
              // Attaches dynamically generated images into DIV
              if (collageDivsEl) {
                collageDivsEl.insertAdjacentHTML(
                  "beforeend",
                  collageDivsImages
                );
              }
            });
          }
        }

        // Maps the last 6 images posted in database      
        eventPictureFunction(data);
        function eventPictureFunction(data) {
        
          data.map((dataMap) => {
            const title = dataMap.title;          
            const id = dataMap._id;
            const description = dataMap.description;
            const URL = dataMap.URL;          

            /*        PREVIOUS CARDS CARROUSEL LAYOUT --- DO NOT DELETE
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
*/

            // Displays fullscreen DIV with dynamically generated albums of traveled places
            const eventPictureClick = document.getElementById(id);
            eventPictureClick.addEventListener("click", (event) => {
              eventPicDiv.style.visibility = "visible";
              eventPicDiv.classList.add("flip-in-ver-left");
              var currentSrc = event.path[0].currentSrc;
              var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage vertical-center">
                                <div id="caption" class="caption mt-0">${description}
                                  <button onClick="delete" data-id=${id} class="delete buttonCancel ml-3">
                                    <i class="far fa-trash-alt delete" data-id=${id}></i>
                                  </button>
                                </div>`;
              if (eventPicDiv) {
                eventPicDiv.innerHTML = enlargedImage;
              }

              // Changes albums of traveled places visibility
              eventPicDiv.addEventListener("click", () => {
                if (eventPicDiv) {
                  eventPicDiv.style.visibility = "hidden";
                  eventPicDiv.innerHTML = "";
                  eventPicDiv.classList.remove("flip-in-ver-left");
                }
              });
            });
          });
        }
      });
  }

  // Delete images from database
  eventPicDiv.addEventListener("click", (e) => {
    // Conditional to delete image based on 'delete' class
    if (e.target.matches(".delete")) {
      var el = e.target;
      var dataID = el.getAttribute("data-id");

      // Dialog to confirm deleting image
      var thisVar = confirm("Would you like to delete this image?");
      if (thisVar) {
        fetch("/deleteLog/" + dataID, {
          method: "delete",
        }).then(() => {
          eventPicDiv.style.visibility = "hidden";
          eventPicDiv.innerHTML = "";
          eventPicDiv.classList.remove("flip-in-ver-left");
          thisVar = "";
          location.reload();
        });
      }
    }
  });
}

export { pictures };