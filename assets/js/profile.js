function profile() {

  const newProfilePic = document.querySelector("#newProfilePic");
  const newProfilePicForm = `<form action="/profilepic" method="post" class="hidden" id="form">
                              <label for="URL">URL</label><br />
                              <input
                                type="text"
                                name="URL"
                                id="URL"
                                placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Add your profile picture's URL"
                              /><br />
                              <button class="button btn btn-primary"><i class="fas fa-check"></i></button>
                            </form>`;

  if (newProfilePic) {
    newProfilePic.insertAdjacentHTML("afterbegin", newProfilePicForm)
  }


  const profile = document.querySelector("#profilepic");
  const profileapi = "/profilepic";

  if (profile) {
    fetch(profileapi)
      .then((res) => res.json(profileapi))
      .then((d) => {
        var dL = d.length - 1;
        var URL = d[dL].URL;
        var img = `<img src=${URL} class="profilepic">`;
        profile.insertAdjacentHTML("afterbegin", img);
      });

    const changePro = document.querySelector("#show");
    const form = document.querySelector("#form");

    changePro.addEventListener("click", function () {
      if (form.style.display === "block") {
        form.style.display = "none";
      } else {
        form.style.display = "block";
      }
    });
  };


}

export { profile };
