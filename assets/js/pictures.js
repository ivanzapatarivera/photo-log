function pictures() {
  const event = document.querySelector("#picturesWall");
  const API = "/log";
  if (event) {
    fetch(API)
      .then((res) => res.json(API))
      .then((d) => {
        d = d.slice(Math.max(d.length - 5, 0));
        d.map((d) => {
          const title = d.title;
          const id = d._id;
          const description = d.description;
          const URL = d.URL;

          var card = `<div class="cards mx-auto text-center col-12 col-lg-2" id=${id}>
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

          const picClick = document.getElementById(id);
          picClick.addEventListener("click", function(e) {
          
            var currentSrc = e.path[0].currentSrc;
            console.log(currentSrc);
            
          })
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
