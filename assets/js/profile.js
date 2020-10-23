function profile() {
  const source = "https://photo-logger.herokuapp.com/log";
  const profile = document.getElementById("profile");
  fetch(source)
    .then((res) => res.json(source))
    // .then((res) => console.log(res))
    .then((res) => {
      res.map((d) => {
        const createNode = (elem) => {
          return document.createElement(elem);
        };
        const appendNode = (parent, elem) => {
          // console.log(elem)
          parent.appendChild(elem);
        };
        let li = createNode('li');
        let image = createNode('img');
        image.setAttribute('src', d.log.URL)
        appendNode(li, image);
        appendNode(profile, li);
      })
      .catch((err) => {
          console.error("Error", err);
      })
    });
}
profile();
