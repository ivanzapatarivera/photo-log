function cache() {
  const event = document.querySelector("#picturesCollage");
  var eventPicDiv = document.querySelector("#pictureDiv");
  const API = "/log";
  return { event, API, eventPicDiv };
  // add eventPicDiv to return
}

function pictures() {
  // add eventPicDiv to return
  var { event, API, eventPicDiv } = cache();
  if (event) {
    // Rendering the last 6 images posted
    fetch(API)
      .then((res) => res.json(API))
      .then((data) => {
        data = data.slice(Math.max(data.length - 6, 0));
        
        console.log(data);
        console.log(`Data length is: ${data.length}`)
        const picturesCollageHeading = document.querySelector('#picturesCollageHeading');
        
        /* -------------------------------------------------
        Images loading OK
        need to update styles as tiles with on hover effects 
        using animate.css or animista 
        ----------------------------------------------------
        */
        var collageDivs = `<div class="row p-3 mainCollageDIV">
                            <!-- First DIV -->
                            <div class="col-3 px-0"><img src=${data[0].URL} id=${data[0]._id} class="collageImageDIV firstDiv" /></div>
                            <div class="col-5">
                              <div class="row">
                                <!-- Second DIV -->
                                <div class="col-12 px-0"><img src=${data[1].URL} id=${data[1]._id} class="collageImageDIV secondDiv" /></div>
                              </div>
                              <div class="row">
                                <!-- Third DIV -->
                                <div class="col-6 px-0"><img src=${data[2].URL} id=${data[2]._id} class="collageImageDIV thirdDiv" /></div>
                                <!-- Fourth DIV -->
                                <div class="col-6 px-0"><img src=${data[3].URL} id=${data[3]._id} class="collageImageDIV fourthDiv" /></div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="row">
                                <!-- Fifth DIV -->
                                <div class="col-12 px-0"><img src=${data[4].URL} id=${data[4]._id} class="collageImageDIV fifthDiv" /></div>
                              </div>
                              <div class="row">
                                <!-- Sixth DIV -->
                                <div class="col-12 px-0"><img src=${data[5].URL} id=${data[5]._id} class="collageImageDIV sixthDiv" /></div>
                              </div>
                            </div>
                          </div>`;
        
        if(picturesCollageHeading) {
          picturesCollageHeading.insertAdjacentHTML('afterend', collageDivs)
        }



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


          // event.insertAdjacentHTML("beforeend", card);
         

          const eventPictureClick = document.getElementById(id);

          // Display dynamically generated albums of traveled places
          eventPictureClick.addEventListener("click", (event) => {
            eventPicDiv.style.visibility = "visible";
            eventPicDiv.classList.add("flip-in-ver-left");
            var currentSrc = event.path[0].currentSrc;

            var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage vertical-center">
                                <div id="caption" class="caption mt-0">${description}
                                  <span onClick="delete" data-id=${id} class="delete">
                                    <i class="far fa-trash-alt delete" data-id=${id}></i>
                                  </span>
                                </div>`;

            if (eventPicDiv) {
              eventPicDiv.innerHTML = enlargedImage;
              console.log(eventPicDiv);
              eventPicDiv.addEventListener("click", (e) => {
                console.log(e);
                if (e.target.matches(".delete")) {
                  var el = e.target;
                  console.log(el);
                  var dataID = el.getAttribute("data-id");
                  fetch("/deleteLog/" + dataID, {
                    method: "delete",
                  }).then(() => {
                    location.reload();
                  });
                }
              });

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
      

      });
  }

  // event.addEventListener("click", (e) => {
  //   console.log(e);
  //   if (e.target.matches(".delete")) {
  //     var el = e.target;
  //     console.log(el);
  //     var dataID = el.getAttribute("data-id");
  //     fetch("/deleteLog/" + dataID, {
  //       method: "delete",
  //     }).then(() => {
  //       location.reload();
  //     });
  //   }
  // });
}

export { pictures };
