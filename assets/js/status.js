function status() {
  console.log("You're in status.js");
  const status = document.querySelector("#statusText");
  const previousStats = document.querySelector("#previousStatus");
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
            let li = createNode("li");
            let br = createNode("br");
            let spanDate = createNode("span");

            // Date format
            let date = d.timestamp;
            console.log(date);
            let dateArray = date.split("-");
            console.log(dateArray);
            let dateArray2 = dateArray[2].split("T");
            console.log(dateArray2);
            let dateArray3 = dateArray2[1].split(".");
            console.log(dateArray3);

            spanDate.innerText =
              "Created on: " +
              dateArray[1] +
              "/" +
              dateArray2[0] +
              "/" +
              dateArray[0] +
              " @" +
              dateArray3[0];
              spanDate.setAttribute('style', 'font-size: .8rem;');
            let spanStatus = createNode("span");
            spanStatus.innerText = d.statusUpdate;
            appendNode(li, spanDate);
            appendNode(li, br);
            appendNode(li, br);
            appendNode(li, spanStatus);
            appendNode(previousStats, li);
          });
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  }
}

export { status };
