import Navbar from "../components/Navbar";
import banner from "../assets/banner.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="hero-banner" id="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">1st Promotional Open Skating Championship</span>
          <h1 className="hero-headline">
            Be a Champion. Live the Passion.
          </h1>
          <p className="hero-text">
            Join the ultimate skating event with speed, spirit and success. Experience the excitement of competitive skating and register now to secure your spot.
          </p>

          <div className="hero-cta-row">
            <button className="hero-cta-primary" onClick={() => window.location.assign('/registration')}>
              Register Now
            </button>
            <button className="hero-cta-secondary" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">Skate</div>
              <div className="hero-stat-label">Speed & Control</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Spirit</div>
              <div className="hero-stat-label">Team Motivation</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Success</div>
              <div className="hero-stat-label">Win the Trophy</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Energy</div>
              <div className="hero-stat-label">Live the Passion</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
