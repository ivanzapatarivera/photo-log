function status() {
  console.log("You're in status.js");
  const status = document.querySelector("#statusText");
  const previousStats = document.querySelector('#previousStatus');
  const statusAPI = "/photologstatus";
  const createNode = (elem) => {
    return document.createElement(elem);
  };
  const appendNode = (parent, elem) => {
    // console.log(elem)
    parent.appendChild(elem);
  };

  if (status) {
    statusCard();
    function statusCard() {
      fetch(statusAPI)
        .then((res) => res.json(statusAPI))
        .then((d) => {
          console.log(d);
          var dL = d.length - 1;
          console.log(dL);
          var URL = d[dL].statusUpdate;
          console.log(URL);
          var update = `<p class="text-left">${URL}</p>`;
          status.insertAdjacentHTML("afterbegin", update);
        });
    }

    previousStatus();
    function previousStatus() {
      fetch(statusAPI)
        .then((res) => res.json(statusAPI))
        .then((d) => {
          d.map((d) => {
              let li = createNode('li');
              li.innerText = d.statusUpdate
              appendNode(previousStats, li)
          })
        })
        .catch((err) => {
            console.error("Error: ", err);
        });
    }
  }
}

export { status };
