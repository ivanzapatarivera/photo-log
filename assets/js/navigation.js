function nav() {
  var body = document.getElementById("root");

  // Attach navigation as a navbar when in desktop view (static)
  var navbarDesktopView = `<nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm navbarDesktop">
                  <div class="container">
                      <a class="navbar-brand" href="/">PhotoLog</a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav">
                              <li class="nav-item">
                                  <a class="nav-link" href="/profile"><i class="far fa-user-circle"></i> Profile <span class="sr-only">(current)</span></a>
                              </li>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="/LogYourPhoto"><i class="fas fa-camera"></i> Log a Photo</a>
                              </li>
                              <li class="nav-item nav-link">
                                <span id="locationsLoggedNavbar"><i class="fas fa-map-marker-alt"></i> Albums </span>
                              </li>
                          </ul>
                      </div>
                  </div>
                </nav>`;

  // Attach top bar when in mobile view
  var topBarMobileView = `<nav class="navbar navbar-expand-lg navbar-dark fixed-top topNavBarMobileView">
                              <h2 class="text-center py-2"><i class="fas fa-camera"></i> PhotoLog</h2>                      
                          </nav>
                          `;

  // Attach bottom bar when in desktop view
  // var footerBarDesktopView

  // Attach navigation as a footer when in mobile view (static)
  var footerMobileView = `<footer id="footer" class="text-center fixed-bottom footer py-4">
                        <a href="/" class="footer"><i class="far fa-user-circle"></i> Profile</a>
                        <a href="/LogYourPhoto" class="footer px-5"><i class="far fa-images"></i>&nbsp&nbsp&nbspLog </a>
                        <span id="locationsLoggedMobile"><i class="fas fa-map-marker-alt"></i> Albums </span>
                      </footer>`;

  appendNavigation();

  // Insert navbar and footer
  function appendNavigation() {
    body.insertAdjacentHTML("afterbegin", navbarDesktopView);
    body.insertAdjacentHTML("afterbegin", topBarMobileView);
    body.insertAdjacentHTML("afterbegin", footerMobileView);

    showHideLocationsLogged();
  }

  // Show and hide places traveled DIV
  function showHideLocationsLogged() {
    const albumsIcon = document.querySelector("#locationsLoggedNavbar");
    const albumsIconMobile = document.querySelector("#locationsLoggedMobile");
    const placesTraveledDiv = document.querySelector("#places");

    // Event listener when in desktop view
    albumsIcon.addEventListener("click", function () {
      if (placesTraveledDiv.style.visibility === "visible") {
        placesTraveledDiv.style.visibility = "hidden";
        placesTraveledDiv.classList.remove("animate__fadeIn");
      } else {
        placesTraveledDiv.style.visibility = "visible";
        placesTraveledDiv.classList.add("animate__fadeIn");
      }
    });

    // Event listener when in mobile view
    albumsIconMobile.addEventListener("click", function () {
      if (placesTraveledDiv.style.visibility === "visible") {
        placesTraveledDiv.style.visibility = "hidden";
        placesTraveledDiv.classList.remove("animate__fadeIn");
      } else {
        placesTraveledDiv.style.visibility = "visible";
        placesTraveledDiv.classList.add("animate__fadeIn");
      }
    });
  }
}

export { nav };
