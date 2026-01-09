import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h3>StudyAbroad</h3>
          <p>Your trusted buddy for scholarships, SOPs, and study abroad guidance.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/scholarship">Scholarships</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>

        <div>
          <h4>Services</h4>
          <a href="#">SOP Writing</a>
          <a href="#">LOR Assistance</a>
          <a href="#">Premium Counseling</a>
          <a href="#">Visa Guidance</a>
        </div>

        <div>
          <h4>Connect</h4>
          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 StudyAbroad. All rights reserved.
      </div>
    </footer>
  );
}
