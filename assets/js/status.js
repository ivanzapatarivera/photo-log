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
            let li = createNode("div");
            li.setAttribute(
              "class",
              "mt-3 col-12 col-md-12 mx-auto card text-left pt-2 px-4 pb-4"
            );
            li.setAttribute("style", "border-radius: 15px;");
            let br = createNode("br");
            let spanDate = createNode("span");

            let date = d.timestamp; 
            let dateArray = date.split("-");       
            let dateArray2 = dateArray[2].split("T");     
            let dateArray3 = dateArray2[1].split(".");
      
            spanDate.innerText =
              "Created on: " +
              dateArray[1] +
              "/" +
              dateArray2[0] +
              "/" +
              dateArray[0] +
              " @" +
              dateArray3[0];
            spanDate.setAttribute("style", "font-size: .8rem;");
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
