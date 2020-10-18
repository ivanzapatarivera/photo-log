
function Nav() {
  var body = document.getElementById("root");
  var navbar = `<nav class="navbar navbar-expand-lg navbar-dark shadow fixed-top">
<div class="container">
    <a class="navbar-brand" href="#">PhotoLog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/"><i class="fas fa-home"></i> Home <span class="sr-only">(current)</span></a>
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
    body.insertAdjacentHTML("afterbegin", navbar);
  }

  console.log("navbar")
}

export { Nav }