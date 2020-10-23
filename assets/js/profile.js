function profile() {
  const profile = document.querySelector("#profilepic");
  const profileapi = "https://photo-logger.herokuapp.com/profilepic";

  if (profile) {
    fetch(profileapi)
      .then((res) => res.json(profileapi))
      .then((d) => {
        var dL = d.length - 1;
        var URL = d[dL].URL;
        var img = `<img src=${URL} class="profilepic">`;
        profile.insertAdjacentHTML("afterbegin", img);
      });
  }

  const changePro = document.querySelector("#show");
  const form = document.querySelector("#form");
  changePro.addEventListener("click", function () {
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
    console.log(form.style.display);
  });
}

export { profile };
