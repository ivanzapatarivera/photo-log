function profile() {
  // Function with form to enter new profile picture's URL
  const newProfilePic = document.querySelector("#newProfilePic");
  if (newProfilePic) {
    enterNewProfilePicture();
  }

  function enterNewProfilePicture() {

    const newProfilePicForm = `<form action="/uploadprofile" method="post" enctype="multipart/form-data">
                                <label class="btn btn-primary">
                                  <i class="fa fa-image"></i> Photo 
                                  <input type="file" name="uploadprofile" id="uploadprofile" class="displayHidden" onchange="this.form.submit();">
                                </label>
                                <span class="button buttonCancel btn ml-1" id="buttonCancelProfilePicture"><i class="fas fa-times"></i></span>
                                </form>`;
                                // <button class="button btn" type="submit" id="buttonSumbitProfilePicture"><i class="fas fa-check"></i></button>

    newProfilePic.insertAdjacentHTML("afterbegin", newProfilePicForm);
    buttonClickedEventListener();
  }

  // Display the latest posted image as profile picture
  const profilePicture = document.querySelector("#profilepic");
  profilePicture.style.backgroundColor = "red";
  const profilePictureDiv = document.querySelector("#show");
  const profilePictureUpdateForm = document.querySelector("#newProfilePic");
  const profileAPI = "/profilepicturelog";

  
  var createProfilePictureForm = `<h4>Create Profile Picture</h4>
                                  <form action="/uploadprofile" method="post" enctype="multipart/form-data">
                                    <label class="btn btn-primary">
                                      <i class="fa fa-image"></i> Photo 
                                      <input type="file" name="uploadprofile" id="uploadprofile" onchange="this.form.submit();" class="displayHidden">
                                    </label>
                                  </form>`;
  fetchAPI();  
  
  // Retrieve and display hte latest image from /profilepic
  function fetchAPI() {
    fetch(profileAPI)
    .then((res) => {
      return res.json(profileAPI);
    })
    .then((d) => {
      console.log(d.length)
      if(d.length < 1){
        profilePicture.insertAdjacentHTML("afterbegin", createProfilePictureForm); 
        profilePictureDiv.parentElement.style.backgroundColor = "white";
      } else {                   
        var dL = d.length - 1;
        var URL = d[dL].URL;
        var img = `<img src="${URL}" class="profilepic">`;
        profilePicture.insertAdjacentHTML("afterbegin", img);
        profilePictureDivEventListener();
      }
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
    // const buttonSumbit = document.querySelector("#buttonSumbitProfilePicture");
    const buttonCancel = document.querySelector("#buttonCancelProfilePicture");
    buttonCancel.addEventListener("click", () => {
      profilePictureUpdateForm.style.display = "none";
    });
    // buttonSumbit.addEventListener("click", () => {
    //   profilePictureUpdateForm.style.display = "none";
    // });
  }
}

export { profile };
