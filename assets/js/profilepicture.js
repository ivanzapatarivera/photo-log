function profile() {
  // Function with form to enter new profile picture's URL
  const newProfilePic = document.querySelector("#newProfilePic");
  if (newProfilePic) {
    enterNewProfilePicture();
  }

  function enterNewProfilePicture() {
    const newProfilePicForm = `<form action="/profilepic" method="post" class="hidden col-10 col-md-6 mx-auto" id="form">
                                    <label for="URL">URL</label><br />
                                    <input
                                    type="text"
                                    name="URL"
                                    id="URL"
                                    placeholder="Add your profile picture's URL"
                                    class="pl-3"
                                    /><br />
                                    <button class="button btn btn-primary" id="buttonSumbit"><i class="fas fa-check"></i></button>
                                    <span class="buttonCancel btn px-2 ml-1" id="buttonCancel"><i class="fas fa-times"></i></span>
                                </form>`;

    newProfilePic.insertAdjacentHTML("afterbegin", newProfilePicForm);
    buttonClickedEventListener();
  }

  // Display the latest posted image as profile picture
  const profilePicture = document.querySelector("#profilepic");
  const profilePictureDiv = document.querySelector("#show");
  const profilePictureUpdateForm = document.querySelector("#newProfilePic");
  const profileAPI = "/profilepic";

  if (profilePicture) {
    fetchAPI();
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
        var img = `<img src=${URL} class="profilepic">`;
        profilePicture.insertAdjacentHTML("afterbegin", img);
        profilePictureDivEventListener();
      });
  }

  // Display form to post new profile picture
  function profilePictureDivEventListener() {
    profilePictureDiv.addEventListener("click", () => {
      if (profilePictureUpdateForm.style.display === "block") {
        profilePictureUpdateForm.style.display = "none";
      } else {
        profilePictureUpdateForm.style.display = "block";
      }
    });
  }

  // Event Listener to close div when clicking on cancel button
  function buttonClickedEventListener() {
    const buttonSumbit = document.querySelector("#buttonSumbit");
    const buttonCancel = document.querySelector("#buttonCancel");
    buttonCancel.addEventListener("click", () => {
      profilePictureUpdateForm.style.display = "none";
    });
    buttonSumbit.addEventListener("click", () => {
      profilePictureUpdateForm.style.display = "none";
    });
  }
}

export { profile };
