function status(event) {
  // console.log("You're in status.js");
  const status = document.querySelector("#statusText");
  const previousStats = document.querySelector("#previousStatus");
  const statusAPI = "/photologstatus";
  const createNode = (elem) => {
    return document.createElement(elem);
  };
  const appendNode = (parent, elem) => {
    parent.appendChild(elem);
  };

  if (status) {
    previousStatus();
    function previousStatus(event) {
      fetch(statusAPI)
        .then((res) => res.json(statusAPI))
        .then((d) => {
          d.map((d) => {
            console.log(d);
            let id = d._id;

            let date = d.timestamp;
            let dateArray = date.split("-");
            let dateArray2 = dateArray[2].split("T");
            let dateArray3 = dateArray2[1].split(".");
            let timestamp =
              "Created on: " +
              dateArray[1] +
              "/" +
              dateArray2[0] +
              "/" +
              dateArray[0] +
              " @" +
              dateArray3[0];

            let statusText = d.statusUpdate;

            let statusCard = `<div class="mt-3 col-12 col-md-12 mx-auto card text-left pt-2 px-4 pb-4" style="border-radius: 15px;" data-id="${id}">
            <span style="font-size: .8rem;">Created on: ${timestamp} <i class="far fa-trash-alt text-right delete"></i> </span><br>
            <span data-id="${id}">${statusText}</span></div>`;

            previousStats.insertAdjacentHTML("afterbegin", statusCard);
            // let li = createNode("div");
            // li.setAttribute(
            //   "class",
            //   "mt-3 col-12 col-md-12 mx-auto card text-left pt-2 px-4 pb-4"
            // );
            // li.setAttribute("style", "border-radius: 15px;");
            // li.setAttribute("data-id", id);

            // let icon = createNode("i");
            // icon.setAttribute("class", "far fa-trash-alt text-right delete");

            // spanDate.innerText =
            //   "Created on: " +
            //   dateArray[1] +
            //   "/" +
            //   dateArray2[0] +
            //   "/" +
            //   dateArray[0] +
            //   " @" +
            //   dateArray3[0];
            // spanDate.setAttribute("style", "font-size: .8rem;");
            // let dateID = spanDate + " " + id;
            // let spanStatus = createNode("span");
            // spanStatus.setAttribute("data-id", id)
            // spanStatus.innerText = d.statusUpdate;
            // appendNode(li, spanDate);
            // appendNode(li, br);
            // appendNode(li, br);
            // appendNode(li, spanStatus);
            // appendNode(li, icon);
            // appendNode(previousStats, li);
          });
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  }
}

export { status };
