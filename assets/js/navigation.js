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
                            <li class="nav-item nav-link" id="locationsLogged">
                               <i class="fas fa-map-marker-alt"></i> Albums
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>`;
  var footer = `<footer id="footer" class="text-center fixed-bottom footer py-4">
                    <a href="/" class="footer pr-3"><i class="fas fa-home"></i></a>
                    <a href="/" class="footer px-5"><i class="fas fa-camera-retro"></i> PhotoLog</a>
                    <a href="/LogYourPhoto" class="footer pl-3"><i class="far fa-images"></i></a>
                </footer>`;

  appendNavigation();

  function appendNavigation() {
        body.insertAdjacentHTML("afterbegin", navbar);
        body.insertAdjacentHTML("afterbegin", footer);   
    };
  }


export { nav };
