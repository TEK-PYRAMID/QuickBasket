const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>QuickBasket</h3>

          <p>
            Fresh groceries, delivered fast.
          </p>
        </div>

        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>

        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} QuickBasket.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
