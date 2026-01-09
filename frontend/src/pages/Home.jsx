import "../styles/home.css";
import heroImg from "../assests/hero-study.jpg"; // add image

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Study Abroad Made <span>Simple</span>
          </h1>
          <p>
            Discover fully funded & partial scholarships, expert SOP/LOR
            guidance, and premium application support — all in one place.
          </p>

          <div className="hero-buttons">
            <a href="/scholarship" className="btn-primary">
              Explore Scholarships
            </a>
            <a href="/signup" className="btn-outline">
              Get Started Free
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Study Abroad" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Students Choose Us</h2>

        <div className="feature-grid">
          <div className="feature-card">
            🎓
            <h3>Verified Scholarships</h3>
            <p>Only trusted and updated global opportunities.</p>
          </div>

          <div className="feature-card">
            🌍
            <h3>Country Wise Search</h3>
            <p>Filter scholarships by continent & country.</p>
          </div>

          <div className="feature-card">
            ✍️
            <h3>SOP / LOR Experts</h3>
            <p>Professionally written documents that convert.</p>
          </div>

          <div className="feature-card">
            🚀
            <h3>Premium Guidance</h3>
            <p>1-on-1 mentorship till you submit applications.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-box">
            <h3>SOP Writing</h3>
            <p>
              Custom Statement of Purpose tailored to each university.
            </p>
          </div>

          <div className="service-box">
            <h3>LOR Drafting</h3>
            <p>
              Recommendation letters aligned with global standards.
            </p>
          </div>

          <div className="service-box premium">
            <h3>Premium Package</h3>
            <p>
              End-to-end application support + scholarship targeting.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h3>10K+</h3>
          <p>Students Guided</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Scholarships Listed</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Countries Covered</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Your Global Education Starts Here</h2>
        <a href="/signup" className="btn-primary big">
          Join Now
        </a>
      </section>

    </div>
  );
}

export default Home;
