function photoLogger(body, logNewPhotoDesktop, logNewPhotoMobile) {
  body = document.querySelector("body");
  logNewPhotoDesktop = document.querySelector("#logNewPhoto");
  logNewPhotoMobile = document.querySelector("#imagesMobile");

  if (logNewPhotoDesktop) {
    readForm();
  }

  function readForm() {
    const logNewPhotoForm = `<div class="row mx-auto p-1 logNewPhotoForm" id="logNewPhotoFrame">
                              <div class="col-12 col-md-6 mx-auto">
                                <div class="card-body logNewPhotoFormDiv">
                                <h5 class="text-center">Log your Photo!</h5>
                                <form action="/upload" method="post" enctype="multipart/form-data">
                                  <label class="btn btn-primary">
                                    <i class="fa fa-image"></i> Photo 
                                    <input type="file" name="upload" id="upload" style="display: none;">
                                  </label>
                                  <div id="previewFileName"></div>
                                  <button class="button btn" type="submit" id="newImageSubmit"><i class="fas fa-check"></i></button>
                                  <span class="button buttonCancel btn ml-1" id="logNewPhotoFormCancelBtn"><i class="fas fa-times"></i></span>
                                </form>     
                                </div>
                              </div>
                            </div>
                            <div id="images"></div>`;

    body.insertAdjacentHTML("afterbegin", logNewPhotoForm);
    var uploadBtn = document.getElementById("upload");
    var previewFileName = document.getElementById("previewFileName");
    uploadBtn.addEventListener("change", () => {
      var uploadBtnArr = uploadBtn.value + "";
      uploadBtnArr = uploadBtnArr.split("\\");
      var i = uploadBtnArr.length - 1;
      var fileName = uploadBtnArr[i];
      var fileNameArr = fileName.split(" ").join("");
      fileNameArr = fileNameArr.join("");
      console.log(uploadBtnArr);
      console.log(fileName);
      console.log(fileNameArr);
      console.log(`You've selected this file: `, uploadBtn.value);
      previewFileName.innerText = `Would you like to upload ${fileName} ?`;
    });

    const newImageSubmitEl = document.querySelector("#newImageSubmit");
    newImageSubmitEl.addEventListener("click", () => {});

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
