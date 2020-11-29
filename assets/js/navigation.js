function nav() {
  var body = document.getElementById("root");

  navbarGenerator();
  function navbarGenerator() {

    // Attach navigation as a navbar when in desktop view (static)
    var navbarDesktopView = `<nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm navbarDesktop">
    <div class="container">
    <a class="navbar-brand" href="/"><img src="../images/logo-nav.png" class="logo-nav"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                          </button>
                          
                          <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav mt-4">
                          <li class="nav-item">
                          <a class="nav-link" href="/profile"><i class="far fa-user-circle"></i> Profile <span class="sr-only">(current)</span></a>
                          </li>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link" href="/LogYourPhoto"><i class="fas fa-camera"></i> Log a Photo</a>
                          </li>
                          <li class="nav-item nav-link">
                          <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dropdown button
                            </button>
                            <div class="dropdown-menu shadow fade-in locationsLoggedNavbar" aria-labelledby="dropdownMenuButton" id="locationsLoggedNavbar">
                              
                            </div>
                          </div>
                          </li>
                          </ul>
                          </div>
                          </div>
                          </nav>`;

    // Attach top bar when in mobile view
    var topBarMobileView = `<nav class="text-center navbar navbar-expand-lg navbar-dark fixed-top topNavBarMobileView">
                          <a href="/"><img src="../images/logo-nav.png" /></a>
                          </nav>
                          `;

    // Attach bottom bar when in desktop view
    var footerBarDesktopView = `<footer id="footerDesktop" class="text-center fixed-bottom footer footerDesktopView py-3">
                          <span class="text-center footerDesktop">&nbsp&nbsp&nbsp&nbsp&copy; Copyright 2020 PhotoLog App</span>
                          </footer>`;

    // Attach navigation as a footer when in mobile view (static)
    var footerMobileView = `<footer id="footer" class="text-center fixed-bottom footer footerMobileView py-4">
                          <a href="/" class="footer"><i class="far fa-user-circle"></i> Profile</a>
                          <a href="/LogYourPhoto" id="imagesMobile" class="footer px-5"><i class="far fa-images"></i>&nbsp&nbsp&nbspLog </a>
                          <span id="locationsLoggedMobile"><i class="fas fa-map-marker-alt"></i> Albums </span>
                          </footer>`;

    displayLocations();
    function displayLocations() {
      const API = "/getLocations/";
      fetch(API)
        .then((res) => {
          return res.json(API);
        })
        .then((response) => {
          response.map((divResponse) => {
            displayMenuOfAlbumsByLocations();

            // Display name of album by each location

            function displayMenuOfAlbumsByLocations() {
              const locationsLoggedNavbar = document.querySelector('#locationsLoggedNavbar')
              var divLocations = `<div id="${divResponse}" class="dropdown-item locationsLoggedNavbar" href="">${divResponse}</div>`
              locationsLoggedNavbar.insertAdjacentHTML("beforeend", divLocations);
            }
          
          });
        });
    }

    appendNavigation();

    // Insert navbar and footer
    function appendNavigation() {
      body.insertAdjacentHTML("afterbegin", navbarDesktopView);
      body.insertAdjacentHTML("afterbegin", topBarMobileView);
      body.insertAdjacentHTML("afterbegin", footerBarDesktopView);
      body.insertAdjacentHTML("afterbegin", footerMobileView);

      showHideLocationsLogged();
    }

    // Show and hide places traveled DIV
    function showHideLocationsLogged() {
      const albumsIcon = document.querySelector("#locationsLoggedNavbar");
      const albumsIconMobile = document.querySelector("#locationsLoggedMobile");
      const placesTraveledDiv = document.querySelector("#places");

      // Event listener when in desktop view
      // albumsIcon.addEventListener("click", () => {
      //   if (placesTraveledDiv.style.visibility === "visible") {
      //     placesTraveledDiv.style.visibility = "hidden";
      //     placesTraveledDiv.classList.remove("slide-in-top");
      //   } else {
      //     placesTraveledDiv.style.visibility = "visible";
      //     placesTraveledDiv.classList.add("slide-in-top");
      //   }
      // });

      // Event listener when in mobile view
      albumsIconMobile.addEventListener("click", () => {
        if (placesTraveledDiv.style.visibility === "visible") {
          placesTraveledDiv.style.visibility = "hidden";
          placesTraveledDiv.classList.remove("slide-in-bottom");
          // placesTraveledDiv.classList.add("animate__fadeOutDownBig");
        } else {
          placesTraveledDiv.style.visibility = "visible";
          placesTraveledDiv.classList.add("slide-in-bottom");
          // placesTraveledDiv.classList.remove("animate__fadeOutDownBig");
        }
      });

      navbarAlbumsIconShowHide();

      // Change albums icon visibility to hidden
      function navbarAlbumsIconShowHide() {
        const albumsIconDesktop = document.querySelector(
          "#locationsLoggedNavbar"
        );
        const albumsIconMobile = document.querySelector(
          "#locationsLoggedMobile"
        );
        const imagesMobile = document.querySelector("#imagesMobile");
        const newProfilePic = document.querySelector("#newProfilePic");

        // On desktop view
        if (newProfilePic) {
          albumsIconDesktop.style.display = "show";
          albumsIconMobile.style.display = "show";
        } else {
          albumsIconDesktop.style.display = "none";
          albumsIconMobile.style.display = "none";
          imagesMobile.classList.remove("px-5");
          imagesMobile.classList.add("pl-5");
        }
      }
    }
  }
}

export { nav };
