import './ContactUs.css';

function ContactUs({ onBack, onLogout }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic demo submission; integrate API/email service later
    alert('Thanks for reaching out! We\'ll get back to you soon.');
  };

  return (
    <div className="contactus-page">
      {/* Header */}
      <div className="header">
        <button
          className="logo logo-button"
          onClick={() => onBack('home')}
          aria-label="Home"
        >
          <img src="/images/marahuyo-logo.png" alt="Marahuyo" className="header-logo-img" />
        </button>

        <div className="header-icons">
          <button className="icon-circle" title="About You" onClick={() => onBack('about-you')}>
            <img src="/images/icon-64.svg" alt="profile" className="profile-icon" />
          </button>
          <button className="logout-button" onClick={onLogout} title="Logout">
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="contactus-content">
        <div className="crumpled-paper-bg">
          <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
        </div>

        <div className="contact-card">
          <h1 className="contact-title">Contact Us</h1>

          <div className="contact-sections">
            <div className="contact-details">
              <h2 className="section-title">Get in touch</h2>
              <p>Email: <a href="mailto:support@marahuyo.app">support@marahuyo.app</a></p>
              <p>Phone: <a href="tel:+1234567890">09060657455</a></p>
              <div className="socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-item">
                  <img src="/images/icon-11.svg" alt="Facebook" />
                  <span>Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-item">
                  <img src="/images/icon-9.svg" alt="Instagram" />
                  <span>Instagram</span>
                </a>
                <a href="https://t.me" target="_blank" rel="noreferrer" className="social-item">
                  <img src="/images/icon-13.svg" alt="Telegram" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="section-title">Send us a message</h2>
              <label className="form-label">Your Email</label>
              <input type="email" className="form-input" placeholder="you@example.com" required />
              <label className="form-label">Subject</label>
              <input type="text" className="form-input" placeholder="How can we help?" required />
              <label className="form-label">Message</label>
              <textarea className="form-textarea" rows="5" placeholder="Write your question here..." required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;


