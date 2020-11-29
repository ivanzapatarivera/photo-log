function profile() {
  // Function with form to enter new profile picture's URL
  const newProfilePic = document.querySelector("#newProfilePic");
  if (newProfilePic) {
    enterNewProfilePicture();
  }

  function enterNewProfilePicture() {
    const newProfilePicForm = `<form action="/profilepic" method="post" class="hidden" id="form">
                                    <label for="URL">URL</label><br />
                                    <input
                                    type="text"
                                    name="URL"
                                    id="URL"
                                    placeholder="Add your profile picture's URL"
                                    class="pl-3"
                                    /><br />
                                    <button class="button btn btn-primary"><i class="fas fa-check"></i></button>
                                </form>`;

    newProfilePic.insertAdjacentHTML("afterbegin", newProfilePicForm);
  }

  const profilePicture = document.querySelector("#profilepic");
  const profileAPI = "/profilepic";

  if (profilePicture) {
    fetch(profileAPI)
      .then((res) => {
        return res.json(profileAPI);
      })
      .then((d) => {
        var dL = d.length - 1;
        var URL = d[dL].URL;
        var img = `<img src=${URL} class="profilepic">`;
        profilePicture.insertAdjacentHTML("afterbegin", img);
      });

    const profilePictureDiv = document.querySelector("#show");
    const profilePictureUpdateForm = document.querySelector("#form");

    profilePictureDiv.addEventListener("click", () => {
      if (profilePictureUpdateForm.style.display === "block") {
        profilePictureUpdateForm.style.display = "none";
      } else {
        profilePictureUpdateForm.style.display = "block";
      }
    });
  }
}

export { profile };
