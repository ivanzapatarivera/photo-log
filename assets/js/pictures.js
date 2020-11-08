function pictures() {
  const event = document.querySelector("#picturesWall");
  var eventPicDiv = document.querySelector("#pictureDiv");
  const API = "/log";
  if (event) {
    fetch(API)
      .then((res) => res.json(API))
      .then((data) => {
        data = data.slice(Math.max(data.length - 6, 0));
        // const imageDefaultDisplay = data.length - 1;
        // console.log(imageDefaultDisplay);
        // const imageDefaultDisplayURL = data[imageDefaultDisplay].URL;
        // const imageDefaultDisplayCaption =
        //   data[imageDefaultDisplay].description;
        // eventPicDiv.innerHTML = `<div class="col-12 col-lg-12 mx-auto">
                                
        //                             <img src=${imageDefaultDisplayURL} id=${imageDefaultDisplayURL} class="picDiv mt-2">
                                  
        //                           <figcaption class="text-center mt-2">${imageDefaultDisplayCaption}<br>
        //                             &copy; Iv&aacute;n J. Zapata-Rivera (Click on image for full resolution.)
        //                           </figcaption>
        //                         </div>`;

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

          // DO NOT DELETE --- CACHED CODE
          // <div class="card cards text-center col-2">
          // <p class="cardTitle mt-4" data-id=${id}>${title}
          // <span onClick="delete" data-id=${id} class="delete"><i class="far fa-trash-alt delete" data-id=${id}></i></span></p>
          // <p><img src=${URL} class="cardImage" /><br>
          // <span>${description}</span>
          // </p>
          // </div>
          event.insertAdjacentHTML("afterbegin", card);
          const eventPictureClick = document.getElementById(id);
          
          eventPictureClick.addEventListener("click", function (event) {

            eventPicDiv.style.display = 'block';
            var currentSrc = event.path[0].currentSrc;
            var width = event.toElement.naturalWidth;
            var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage">
                                <div id="caption" class="caption mt-0">${description}</div>`;
            
            if (eventPicDiv) {
              eventPicDiv.innerHTML = enlargedImage;
            }

            const eventCurrentSrc = document.getElementById(currentSrc);
          
            eventCurrentSrc.addEventListener("click", function (event) {
              if (eventPicDiv) {
                eventPicDiv.style.display = 'none';
                eventPicDiv.innerHTML = "";
              }
            });
          });
        });
      });
  }

  event.addEventListener("click", function (e) {
    if (e.target.matches(".delete")) {
      console.log(e.target);
      var el = e.target;
      var dataID = el.getAttribute("data-id");
      console.log(dataID);
      fetch("/deleteLog/" + dataID, {
        method: "delete",
      }).then(() => {
        location.reload();
      });
    }
  });
}

export { pictures };
