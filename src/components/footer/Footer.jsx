import './footer.css';

const Footer = () => {
  return (
    <footer className="text-white pt-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We provide quality products and services to make your life better.
            </p>
          </div>
          {/* Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-2">
              <i className="bi bi-facebook" /> Facebook
            </a>
            <br />
            <a href="#" className="text-white me-2">
              <i className="bi bi-twitter" /> Twitter
            </a>
            <br />
            <a href="#" className="text-white me-2">
              <i className="bi bi-instagram" /> Instagram
            </a>
            <br />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
