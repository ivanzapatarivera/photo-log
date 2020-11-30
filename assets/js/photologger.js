function photoLogger() {
  const logNewPhoto = document.querySelector("#logNewPhoto");
  if (logNewPhoto) {
    readForm();
  }

  function readForm() {
    const logNewPhotoForm = `<div class="row p-1 logNewPhotoForm">
                                    <div class="col-12 col-md-6 card mx-auto">
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
                                                <button class="button btn btn-primary">Log</button>
                                            </form>
                                        </div>
                                    </div>
                                    </div>`;
    showHidePhotoForm(logNewPhotoForm);
  }

  function showHidePhotoForm() {
    logNewPhoto.addEventListener("click", () => {
        
    });
  }
}

export { photoLogger };
