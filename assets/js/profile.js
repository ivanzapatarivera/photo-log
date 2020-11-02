function profile() {
  const profile = document.querySelector("#profilepic");
  const profileapi = "/profilepic";

  if (profile) {
    fetch(profileapi)
      .then((res) => res.json(profileapi))
      .then((d) => {
        console.log(d);
        var dL = d.length - 1;
        console.log(dL);
        var URL = d[dL].URL;
        console.log(URL)
        var img = `<img src=${URL} class="profilepic mt-4">`;
        profile.insertAdjacentHTML("afterbegin", img);
      });

    // This code allows to show and hide the form to post profile picture
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
}

export { profile };
