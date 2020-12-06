function photoLogger() {
  const body = document.querySelector("#root");
  const logNewPhotoDesktop = document.querySelector("#logNewPhoto");
  const logNewPhotoMobile = document.querySelector("#imagesMobile");

  if (logNewPhotoDesktop) {
    readForm();
  }

  function readForm() {
    const logNewPhotoForm = `<div class="row mx-auto p-1 logNewPhotoForm" id="logNewPhotoFrame">
                              <div class="col-12 col-md-6 card mx-auto logNewPhotoFormDiv">
                                <div class="card-body">
                                <h5 class="text-center">Log your Photo!</h5>
                                <form action="/upload" method="post" enctype="multipart/form-data">
                                  <label class="btn btn-primary">
                                    <i class="fa fa-image"></i> Photo <input type="file" name="upload" id="upload" style="display: none;">
                                  </label>
                                  <div id="previewFileName"></div>
                                  <button class="button btn" type="submit" id="newImageSubmit"><i class="fas fa-check"></i></button>
                                  <span class="button buttonCancel btn ml-1" id="logNewPhotoFormCancelBtn"><i class="fas fa-times"></i></span>
                                </form>
                                <div id="imagesForm"></div>    
                                </div>
                              </div>
                            </div>
                            `;

    body.insertAdjacentHTML("afterbegin", logNewPhotoForm);
    var uploadBtn = document.getElementById("upload");
    var previewFileName = document.getElementById("previewFileName");
    uploadBtn.addEventListener("change", () => {
      var uploadBtnArr = uploadBtn.value + "";
      uploadBtnArr = uploadBtnArr.split("\\");
      var i = uploadBtnArr.length - 1;
      var fileName = uploadBtnArr[i];
      console.log(uploadBtnArr);
      console.log(fileName);
      console.log(`You've selected this file: `, uploadBtn.value);
      previewFileName.innerText = `Would you like to upload ${fileName} ?`;
    });

    const newImageSubmitEl = document.querySelector('#newImageSubmit');
    const imagesEl = document.querySelector("#imagesForm");
    const API = "/files/";
    newImageSubmitEl.addEventListener('click', () => {
      fetch(API)
      .then((res) => {
        return res.json(API);
      })
      .then((res) => {
        console.log(res.length - 1);
        const lastItem = res.length - 1;
        const itemSelected = res[lastItem];
        const itemSelectedID = itemSelected._id;
        console.log(itemSelected);
  
        const URL = "/image/" + itemSelected.filename;
        console.log(URL);
        var image = `<img src="${URL}" class="text-center" id="${itemSelected}" style="max-height:250px;">`;
  
        imagesEl.insertAdjacentHTML("afterbegin", image);
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
  
        const formLocation = document.getElementById(`${itemSelected}`);
        formLocation.insertAdjacentHTML("afterend", form);
      });
    })
   












    const logNewPhotoFrame = document.querySelector("#logNewPhotoFrame");
    const logNewPhotoFormCancelBtn = document.querySelector(
      "#logNewPhotoFormCancelBtn"
    );
    showHidePhotoForm(logNewPhotoForm, logNewPhotoFrame);
    logNewPhotoFormCancel(
      logNewPhotoFrame,
      logNewPhotoFormCancelBtn,
      previewFileName
    );
  }

  function showHidePhotoForm() {
    logNewPhotoDesktop.addEventListener("click", () => {
      if (logNewPhotoFrame.style.display === "flex") {
        logNewPhotoFrame.style.display = "none";
        logNewPhotoFrame.classList.remove("fade-in");
      } else {
        logNewPhotoFrame.style.display = "flex";
        logNewPhotoFrame.classList.add("fade-in");
      }
    });
    logNewPhotoMobile.addEventListener("click", () => {
      if (logNewPhotoFrame.style.display === "flex") {
        logNewPhotoFrame.style.display = "none";
        logNewPhotoFrame.classList.remove("fade-in");
      } else {
        logNewPhotoFrame.style.display = "flex";
        logNewPhotoFrame.classList.add("fade-in");
      }
    });
  }

  function logNewPhotoFormCancel() {
    logNewPhotoFormCancelBtn.addEventListener("click", () => {
      logNewPhotoFrame.style.display = "none";
      previewFileName.innerText = "";
    });
  }
}

export { photoLogger };
