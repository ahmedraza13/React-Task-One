import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-around">
        <div>
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
