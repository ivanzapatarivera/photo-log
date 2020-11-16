function nav() {
  var body = document.getElementById("root");

  var navbar = `<nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
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
                               <span id="locationsLogged"><i class="fas fa-map-marker-alt"></i> Albums </span>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>`;
  var footer = `<footer id="footer" class="text-center fixed-bottom footer py-4">
                    <a href="/" class="footer"><i class="fas fa-home"></i> PhotoLog</a>
                    <a href="/LogYourPhoto" class="footer px-5"><i class="far fa-images"></i>&nbsp&nbsp&nbspLog </a>
                    <span id="locationsLogged"><i class="fas fa-map-marker-alt"></i> Albums </span>
                </footer>`;

  appendNavigation();

  // Insert navbar and footer
  function appendNavigation() {
    body.insertAdjacentHTML("afterbegin", navbar);
    body.insertAdjacentHTML("afterbegin", footer);

    showHideLocationsLogged();
  }

  // Show and hide places traveled
  function showHideLocationsLogged() {
    const albumsIcon = document.querySelector("#locationsLogged");
    const placesTraveledDiv = document.querySelector("#places");
    albumsIcon.addEventListener("click", function () {
      if (placesTraveledDiv.style.display === "block") {
        placesTraveledDiv.style.display = "none";
      } else {
        placesTraveledDiv.style.display = "block";
      }
    });
  }
}

export { nav };
