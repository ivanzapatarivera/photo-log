function logger() {
  const div = document.getElementById("logger");
  const logAPhotoIcon = document.querySelector("#logNewPhoto");
  if (div) {
    logAPhotoIcon.style.display = "none";

    const imagesEl = document.querySelector("#logger");
    const API = "../files/";

    fetch(API)
      .then((res) => {
        return res.json(API);
      })
      .then((res) => {
        const lastItem = res.length - 1;
        const itemSelected = res[lastItem];
        const itemSelectedID = itemSelected._id;
        const itemSelectedFileName = itemSelected.filename
        const URL = `../image/${itemSelectedFileName}`
        console.log(URL);
        var image = `<div class="row mt-5">
                    <div class="col-12 col-lg-8 mx-auto text-center">
                    <img src="${URL}" class="shadow-sm" id="${itemSelectedID}" style="width: 100%; max-width: 500px;">
                    </div>
                  </div>`;

        imagesEl.insertAdjacentHTML("afterend", image);

        const form = `<form class="pb-5 col-12 col-lg-8 mx-auto" action="/log" method="post">
                        <label class="text-white" for="title">Title</label><br>
                          <input class="px-3" type="text" name="title" id="title" placeholder="How would you like to name this picture?"><br>
                        <label class="text-white" for="location">Location</label><br>
                          <input class="px-3" type="text" name="location" id="location" placeholder="Where was this picture taken?"><br>
                        <label class="text-white" for="description">Description</label><br>
                          <textarea class="px-3" type="text" name="description" id="description" placeholder="Would you like to say something about this picture?"></textarea><br>
                        <input class="displayHidden" type="text" name="URL" id="URL" value="${URL}"><br>
                        <button class="button btn btn-primary mb-5">Log</button>
                      </form>`;

        const formLocation = document.getElementById(`${itemSelectedID}`);
        formLocation.insertAdjacentHTML("afterend", form);
      });
  }

  if (div) {
    append();
    function append() {
      div.insertAdjacentHTML("afterend", form);
    }
  }
}

export { logger };
