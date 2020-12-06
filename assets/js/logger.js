function logger() {


  const div = document.getElementById("logger");
  const logAPhotoIcon = document.querySelector('#logNewPhoto');
  if (div) {
    logAPhotoIcon.style.display = "none";
  }

  // const newImageSubmitEl = document.querySelector('#newImageSubmit');
  const imagesEl = document.querySelector("#logger");
  const API = "../files/";

  fetch(API)
    .then((res) => {
      return res.json(API);
    })
    .then((res) => {
      console.log(res);
      // console.log(res._id);
      console.log(res.length);
      const lastItem = res.length - 1;
      const itemSelected = res[lastItem];
      const itemSelectedID = itemSelected._id;
      console.log(itemSelected);
      console.log(itemSelectedID);
      const URL = "../image/" + itemSelected.filename;
      console.log(URL);
      var image = `<img src="${URL}" class="text-center" id="${itemSelectedID}" style="max-height:250px;">`;

      imagesEl.insertAdjacentHTML("afterend", image);
      console.log(image);

      const form = `<form action="/log" method="post">
                            <label for="title">Title</label><br>
                            <input class="px-3 py-1" type="text" name="title" id="title" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;How would you like to name this picture?"><br>
                            <input class="" type="text" name="URL" id="URL" value="${URL}"  style="visibility: hidden"><br>
                            <label for="location">Location</label><br>
                            <input class="px-3 py-1" type="text" name="location" id="location" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Where was this picture taken?"><br>
                            <label for="description">Description</label><br>
                            <textarea class="px-3 py-1" type="text" name="description" id="description" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Would you like to say something about this picture?"></textarea><br>
                            <button class="button btn btn-primary">Log</button>
                        </form>`;

      const formLocation = document.getElementById(`${itemSelectedID}`);
      formLocation.insertAdjacentHTML("afterend", form);
    });

  // const form = `<div class="row p-1">
  //               <div class="col-12 col-md-6 card mx-auto">
  //                   <div class="card-body">
  //                       <h5 class="text-center">Log your Photo!</h5>
  //                       <form action="/log" method="post">
  //                           <label for="title">Title</label><br>
  //                           <input class="px-3 py-1" type="text" name="title" id="title" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;How would you like to name this picture?"><br>
  //                           <label for="URL">Web Address</label><br>
  //                           <input class="px-3 py-1" type="text" name="URL" id="URL" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;What's the URL where this picture is located?"><br>
  //                           <label for="location">Location</label><br>
  //                           <input class="px-3 py-1" type="text" name="location" id="location" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Where was this picture taken?"><br>
  //                           <label for="description">Description</label><br>
  //                           <textarea class="px-3 py-1" type="text" name="description" id="description" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Would you like to say something about this picture?"></textarea><br>
  //                           <button class="button btn btn-primary">Log</button>
  //                       </form>
  //                   </div>
  //               </div>
  //               </div>`;

  if (div) {
    append();
    function append() {
      div.insertAdjacentHTML("afterend", form);
    }
  }
}

export { logger };
