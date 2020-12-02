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
                                            <form action="/log" method="post">
                                                <label for="title">Title</label><br>
                                                <input class="px-3 py-1" type="text" name="title" id="title" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;How would you like to name this picture?"><br>
                                                <label for="URL">Web Address</label><br>
                                                <input class="px-3 py-1" type="text" name="URL" id="URL" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;What's the URL where this picture is located?"><br>
                                                <label for="location">Location</label><br>
                                                <input class="px-3 py-1" type="text" name="location" id="location" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Where was this picture taken?"><br>
                                                <label for="description">Description</label><br>
                                                <textarea class="px-3 py-1" type="text" name="description" id="description" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Would you like to say something about this picture?"></textarea><br>
                                                <button class="button btn">Log</button>
                                                <span class="button buttonCancel btn ml-1" id="logNewPhotoFormCancelBtn"><i class="fas fa-times"></i></span>
                                            </form>
                                            </div>
                                            </div>
                                            </div>`;
    body.insertAdjacentHTML("afterbegin", logNewPhotoForm);
    const logNewPhotoFrame = document.querySelector("#logNewPhotoFrame");
    const logNewPhotoFormCancelBtn = document.querySelector(
      "#logNewPhotoFormCancelBtn"
    );
    showHidePhotoFormDesktop(logNewPhotoForm, logNewPhotoFrame, logNewPhotoFormCancelBtn);
    showHidePhotoFormMobile(logNewPhotoForm, logNewPhotoFrame, logNewPhotoFormCancelBtn);
  }

  function showHidePhotoFormDesktop() {
    logNewPhotoDesktop.addEventListener("click", () => {
      if (logNewPhotoFrame.style.display === "flex") {
        logNewPhotoFrame.style.display = "none";
        logNewPhotoFrame.classList.remove("fade-in");
      } else {
        logNewPhotoFrame.style.display = "flex";
        logNewPhotoFrame.classList.add("fade-in");
      }
    });
    logNewPhotoFormCancel(logNewPhotoFrame);
  }

  function showHidePhotoFormMobile() {
    logNewPhotoMobile.addEventListener("click", () => {
      if (logNewPhotoFrame.style.display === "flex") {
        logNewPhotoFrame.style.display = "none";
        logNewPhotoFrame.classList.remove("fade-in");
      } else {
        logNewPhotoFrame.style.display = "flex";
        logNewPhotoFrame.classList.add("fade-in");
      }
    });
    logNewPhotoFormCancel(logNewPhotoFrame);
  }

  function logNewPhotoFormCancel() {
    logNewPhotoFormCancelBtn.addEventListener("click", () => {
      logNewPhotoFrame.style.display = "none";
    });
  }
}

export { photoLogger };
