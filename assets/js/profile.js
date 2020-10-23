function profile() {
  const profile = document.querySelector("#profilepic");
  const profileapi = "/profilepic";

  if (profile) {
    fetch(profileapi)
      .then((res) => res.json(profileapi))
      .then((d) => {
        var dL = d.length - 1;
        var URL = d[dL].URL;
        console.log(URL);
        var img = `<img src=${URL} class="profilepic">`;
        profile.insertAdjacentHTML("afterbegin", img);
      });
  }

  const changePro = document.querySelector("#show");
  const form = document.querySelector("#form");
  changePro.addEventListener("click", function () {
    form.style.display = "block";
    console.log(form.style.display);
  });
}

export { profile };
