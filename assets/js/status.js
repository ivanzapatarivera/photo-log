var statusBox = document.querySelector("#statusBox");

function status() {
  if (statusBox) {
    insertStatusForm();
  }
}

function insertStatusForm() {
  const statusForm = statusFormHTML();
  statusBox.insertAdjacentHTML("afterbegin", statusForm);

  // Manage eventListener's on statusForm
  statusFormEventListeners();
  // Render previous status posts
  renderPreviousStatusPosts();
}

function statusFormHTML() {
  // Status Form Temp. Lit.
  return `<div id="statusForm" class="statusForm">
            <form action="/status" method="post" id="formStatus" class="text-left">
              <textarea
                name="statusUpdate"
                id="statusUpdate"
                cols="100%"
                rows="3"
                placeholder="What's on your mind?"
                class="px-3 py-1"
              ></textarea>
              <button class="button btn px-2 py-1" id="buttonSubmitStatus"><i class="far fa-paper-plane"></i></button>
              <span class="buttonCancel btn py-1 px-2 ml-1" id="buttonCancelStatus"><i class="fas fa-times"></i></span>
            </form>
          </div>`;
}

function statusFormEventListeners(statusBtn, buttonSubmit, buttonCancel) {

  statusBtn = document.querySelector("#postStatusBtn");
  buttonSubmit = document.querySelector("#buttonSubmitStatus");
  buttonCancel = document.querySelector("#buttonCancelStatus");

  statusBtn.addEventListener("click", () => {
    statusBox.style.display = "flex";
    statusBox.classList.add("scale-in-center");
  });
  buttonSubmit.addEventListener("click", () => {
    statusBox.classList.remove("scale-in-center");
    statusBox.style.display = "none";
  });
  buttonCancel.addEventListener("click", () => {
    statusBox.classList.remove("scale-in-center");
    statusBox.style.display = "none";
  });

}


function renderPreviousStatusPosts(statusForm, previousStats, statusAPI) {

  statusForm = document.querySelector("#statusForm");
  previousStats = document.querySelector("#previousStatus");
  statusAPI = "/status";

  if (statusForm) {
      fetch(statusAPI)
        .then((res) => res.json(statusAPI))
        .then((d) => {
          d.map((d) => {

            let id = d._id;
            let date = d.timestamp;
            let dateArray = date.split("-");
            let month = dateArray[1];
            let dayTime = dateArray[2].split("T");

            // Timestamp hour:minute:second
            let time = dayTime[1].split(".");
            let timezoneOffSet = new Date().getTimezoneOffset();
            timezoneOffSet = timezoneOffSet / 60
            time = time[0];
            time = time.split(':');
            
            let hour = time[0] - timezoneOffSet;
            let minute = time[1];
            let seconds = time[2];

            console.log(hour);
            if(hour > 12) { hour = hour - 12; seconds = seconds + ' PM' } else
            if(hour == 12) { seconds = seconds + ' PM'} else { seconds = seconds + ' AM'}
            let timeConstructed = ` ${hour}:${minute}:${seconds}`;          

            let day = dayTime[0];
            let year = dateArray[0];


            returnTimestamp(month, day, year, time);
            // StatusCard timestamp
            function returnTimestamp(){      

              // Month added to timestamp
              if (month == 1) { month = 'January' };
              if (month == 2) { month = 'February' };
              if (month == 3) { month = 'March' };
              if (month == 4) { month = 'April' };
              if (month == 5) { month = 'May' };
              if (month == 6) { month = 'June' };
              if (month == 7) { month = 'July' };
              if (month == 8) { month = 'August' };
              if (month == 9) { month = 'September' };
              if (month == 10) { month = 'October' };
              if (month == 11) { month = 'November' };
              if (month == 12) { month = 'December' };

              // Day rd, nd, th addded to timestamp
              if(day == 1 || day == 21 || day == 31){ day = day + 'st' } else
              if(day == 2 || day == 22){ day = day + 'nd' } else
              if(day == 3 || day == 23){ day = day + 'rd' } else {day = day + 'th'};
              
              // Timestamp temp. lit.
              let timestamp = `Posted on: ${month} ${day}, ${year} @${timeConstructed}`;
              let statusText = d.statusUpdate;

              previousStatusCard(id, timestamp, statusText, previousStats);

              // Insert timestamp and status text into card
              function previousStatusCard(id, timestamp, statusText, previousStats) {
                let statusCard = `<div class="mt-3 col-12 col-md-12 mx-auto card text-left px-3 py-2 cardStatus" data-id="${id}">
                                            <span style="font-size: .8rem;">${timestamp} 
                                              <span onClick="delete" class="delete">
                                                <i class="far fa-trash-alt text-right delete" data-id=${id}></i>
                                              </span>
                                            </span>
                                            <p class="statusText pt-2" data-id="${id}">${statusText}</p>
                                          </div>`;
              
                previousStats.insertAdjacentHTML("afterbegin", statusCard);
              }
            }

          });
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    

    // Delete status post by matching target class & data-id
    previousStats.addEventListener("click", (e) => {
      if (e.target.matches(".delete")) {
        var el = e.target;
        var dataID = el.getAttribute("data-id");
        fetch("/deleteStatus/" + dataID, {
          method: "delete",
        }).then(() => {
          previousStats.innerHTML = "";
          previousStatus();
        });
      }
    });
  }
}


export { status };

