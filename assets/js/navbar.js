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
    

  appendNavbar();

  function appendNavbar() {
    if(width >= 993) {
        console.log("Window width is: ", width)
      body.insertAdjacentHTML("afterbegin", navbar)
    } else {
        console.log("Window width is: ", width)
        // body.insertAdjacentHTML("afterend", footer)
    }
    
  }
}

export { Nav };
