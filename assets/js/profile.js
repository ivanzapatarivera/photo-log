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

  const profile = document.querySelector("#profilepic");
  const profileapi = "/profilepic";

  if (profile) {
    fetch(profileapi)
      .then((res) => {
        return res.json(profileapi);
      })
      .then((d) => {
        var dL = d.length - 1;
        var URL = d[dL].URL;
        var img = `<img src=${URL} class="profilepic">`;
        profile.insertAdjacentHTML("afterbegin", img);
      });

    const profilePictureDiv = document.querySelector("#show");
    const form = document.querySelector("#form");

    profilePictureDiv.addEventListener("click", () => {
      if (form.style.display === "block") {
        form.style.display = "none";
      } else {
        form.style.display = "block";
      }
    });
  }
}

export { profile };
