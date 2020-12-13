function profile() {
  // Function with form to enter new profile picture's URL
  const newProfilePic = document.querySelector("#newProfilePic");
  if (newProfilePic) {
    enterNewProfilePicture();
  }

  function enterNewProfilePicture() {
    // const newProfilePicForm = `<form action="/profilepic" method="post" class="hidden col-10 col-md-6 mx-auto" id="form">
                                    
    //                                 <input
    //                                 type="text"
    //                                 name="URL"
    //                                 id="URL"
    //                                 placeholder="New profile picture's URL"
    //                                 class="pl-3"
    //                                 /><br />
    //                                 <button class="button btn btn-primary" id="buttonSumbitProfilePicture"><i class="fas fa-check"></i></button>
    //                                 <span class="buttonCancel btn px-2 ml-1" id="buttonCancelProfilePicture"><i class="fas fa-times"></i></span>
    //                             </form>`;
    const newProfilePicForm = `<form action="/uploadprofile" method="post" enctype="multipart/form-data">
                                <label class="btn btn-primary">
                                  <i class="fa fa-image"></i> Photo 
                                  <input type="file" name="uploadprofile" id="uploadprofile" style="display: none;">
                                </label>
                                <div id="previewFileNameProfile"></div>
                                <button class="button btn" type="submit" id="buttonSumbitProfilePicture"><i class="fas fa-check"></i></button>
                                <span class="button buttonCancel btn ml-1" id="buttonCancelProfilePicture"><i class="fas fa-times"></i></span>
                              </form>`;

    newProfilePic.insertAdjacentHTML("afterbegin", newProfilePicForm);
    buttonClickedEventListener();
  }

  // Display the latest posted image as profile picture
  const profilePicture = document.querySelector("#profilepic");
  const profilePictureDiv = document.querySelector("#show");
  const profilePictureUpdateForm = document.querySelector("#newProfilePic");
  const profileAPI = "/profilepic";

  if (profilePicture && profilePicture.innerText !== "") {
    fetchAPI();
  } else {
    var createProfilePictureForm = `<h4>Create Profile Picture</h4>
                                    <form action="/uploadprofile" method="post" enctype="multipart/form-data">
                                      <label class="btn btn-primary">
                                        <i class="fa fa-image"></i> Photo 
                                        <input type="file" name="uploadprofile" id="uploadprofile" style="display: none;">
                                      </label>
                                      <div id="previewFileName"></div>
                                      <button class="button btn" type="submit"><i class="fas fa-check"></i></button>
                                    </form>`;
    profilePicture.insertAdjacentHTML("afterbegin", createProfilePictureForm)                            
  }

  // Retrieve and display hte latest image from /profilepic
  function fetchAPI() {
    fetch(profileAPI)
      .then((res) => {
        return res.json(profileAPI);
      })
      .then((d) => {
        var dL = d.length - 1;
        var URL = d[dL].URL;
        var img = `<img src="${URL}" class="profilepic">`;
        profilePicture.insertAdjacentHTML("afterbegin", img);
        profilePictureDivEventListener();
      });
  }

  // Display form to post new profile picture
  function profilePictureDivEventListener() {
    profilePictureDiv.addEventListener("click", () => {
      if (profilePictureUpdateForm.style.display === "block") {
        profilePictureUpdateForm.style.display = "none";
        profilePictureUpdateForm.classList.remove('scale-in-center');
      } else {
        profilePictureUpdateForm.style.display = "block";
        profilePictureUpdateForm.classList.add('scale-in-center');
      }
    });
  }

  // Event Listener to close div when clicking on cancel button
  function buttonClickedEventListener() {
    const buttonSumbit = document.querySelector("#buttonSumbitProfilePicture");
    const buttonCancel = document.querySelector("#buttonCancelProfilePicture");
    buttonCancel.addEventListener("click", () => {
      profilePictureUpdateForm.style.display = "none";
    });
    buttonSumbit.addEventListener("click", () => {
      profilePictureUpdateForm.style.display = "none";
    });
  }
}

export { profile };
