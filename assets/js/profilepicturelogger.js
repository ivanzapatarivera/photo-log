function profilepicturelogger() {
    const profilepicturelogger = document.querySelector("#profilepicturelogger");
    
    const logAPhotoIcon = document.querySelector("#logNewPhoto");
    if(profilepicturelogger) {
      console.log(`You're in profilepicturelogger. `)
      logAPhotoIcon.style.display = "none";
      const API = "../files/";
  
      fetch(API)
        .then((res) => {
          return res.json(API);
        })
        .then((res) => {
          const responseLength = res.length
          const lastItem = responseLength - 1;
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
  
                    profilepicturelogger.insertAdjacentHTML("afterend", image);
  
          const form = `<form class="pb-5 col-12 col-lg-8 mx-auto" action="/profilepicturelog" method="post">
                          <label for="title" class="displayHidden">Title</label>
                          <input class="displayHidden" type="text" name="title" id="title" value="Profile Picture No. ${responseLength}">
                          <label for="description" class="displayHidden">Say Something</label>
                          <textarea class="px-3 mt-4" type="text" name="description" id="description" placeholder="Would you like to say something about your profile picture?"></textarea>
                          <input class="displayHidden" type="text" name="URL" id="URL" value="${URL}">
                          <button class="button btn btn-primary mb-5">Post</button>
                        </form>`;
  
          const formLocation = document.getElementById(`${itemSelectedID}`);
          console.log('Form Location', formLocation)
          formLocation.insertAdjacentHTML("afterend", form);
        });
    }
  
    if (profilepicturelogger) {
      append();
      function append() {
        profilepicturelogger.insertAdjacentHTML("afterend", form);
      }
    }
  }

  export { profilepicturelogger };
  