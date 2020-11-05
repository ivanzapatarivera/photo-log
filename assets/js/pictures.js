function pictures() {
  const event = document.querySelector("#picturesWall");
  const API = "/log";
  if (event) {
    fetch(API)
      .then((res) => res.json(API))
      .then((d) => {
        d.map((d) => {
          const title = d.title;
          const id = d._id;
          const description = d.description;
          const URL = d.URL;
          var card = `<div class="card cards text-center col-2">
                        <p class="cardTitle mt-4" data-id=${id}>
                          <span onClick="delete" data-id=${id} class="delete"><i class="far fa-trash-alt delete" data-id=${id}></i></span></p>
                          <p><img src=${URL} class="cardImage" /><br>                        
                        </p> 
                      </div>`;
          event.insertAdjacentHTML("afterbegin", card);
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
