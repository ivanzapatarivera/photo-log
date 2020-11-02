function Nav() {
  var body = document.getElementById("root");
  var width = window.innerWidth;
  var navbar = `<nav class="navbar navbar-expand-lg navbar-dark shadow fixed-top">
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
                                <a class="nav-link" href="/engine"><i class="fas fa-camera"></i> Log a Photo</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>`;
  var footer = `<footer id="footer" class="text-center fixed-bottom footer py-2">
                    <a href="/" class="footer pr-5"><i class="fas fa-home"></i></a>
                    <a href="/engine" class="footer px-5"><i class="far fa-images"></i></a>
                    <a href="/" class="footer pl-5"><i class="fas fa-camera-retro"></i> PhotoLog</a>
                </footer>`;

  appendNavbar();

  function appendNavbar() {
    if (width >= 993) {
      console.log("Window width is: ", width);
      body.insertAdjacentHTML("afterbegin", navbar);
    } else {
      console.log("Window width is: ", width);
      body.insertAdjacentHTML("afterend", footer)
    }
  }
}

export { Nav };
