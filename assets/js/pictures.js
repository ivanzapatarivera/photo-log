function pictures() {
  // console.log('You\'re in pictures.')

  const event = document.querySelector("#picturesWall");
  const API = "/log";
  if (event) {
    fetch(API)
      .then((res) => res.json(API))
      .then((d) => {
        d.map((d) => {
          const title = d.title;
          const id = d._id;

          const URL = d.URL;
          var card = `<div class="card cards text-center">
                            <p class="cardTitle mt-4" data-id=${id}>${title} <span onClick="delete" data-id=${id} class="delete"><i class="far fa-trash-alt delete" data-id=${id}></i></span><p>
                            <img src=${URL} class="cardImage" /><br>
                            
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
