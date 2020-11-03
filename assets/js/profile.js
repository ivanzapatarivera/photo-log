function profile() {
  const profile = document.querySelector("#profilepic");
  const profileapi = "/profilepic";

  if (profile) {
    fetch(profileapi)
      .then((res) => res.json(profileapi))
      .then((d) => {
        var dL = d.length - 1;
        var URL = d[dL].URL;
        var img = `<img src=${URL} class="profilepic mx-auto">`;
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
  }
}

export { profile };
