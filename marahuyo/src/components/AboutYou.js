import './AboutYou.css';

function AboutYou({ onBack, onLogout }) {
  return (
    <div className="aboutyou-page">
      {/* Header - Dark Blue Bar with Icons */}
      <div className="header">
        {/* Logo - Two yellow hands framing a blue eye */}
        <button 
          className="logo logo-button"
          onClick={() => onBack('home')}
          aria-label="Home"
        >
          <div className="hand-left"></div>
          <div className="eye"></div>
          <div className="hand-right"></div>
        </button>

        {/* Right side icons */}
        <div className="header-icons">
          {/* Chat icon */}
          <div className="icon-circle">
            <img src="/images/icon-6.svg" alt="chat" className="header-icon" />
          </div>
          
          {/* Bookmark icon */}
          <div className="icon-circle">
            <img src="/images/icon-4.svg" alt="bookmark" className="header-icon" />
          </div>
          
          {/* Profile icon */}
          <div className="icon-circle">
            <img src="/images/icon-8.svg" alt="profile" className="header-icon" />
          </div>
          
          {/* Logout button */}
          <button 
            className="logout-button"
            onClick={onLogout}
            title="Logout"
          >
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="aboutyou-content">
        {/* Crumpled Paper Background */}
        <div className="crumpled-paper-bg">
          <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
        </div>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="group-1-10">
            <img src="/images/ellipse-1-11.svg" className="ellipse-1-11" alt="ellipse-1" />
            <img src="/images/ellipse-2-12.svg" className="ellipse-2-12" alt="ellipse-2" />
            <img src="/images/ellipse-3-13.svg" className="ellipse-3-13" alt="ellipse-3" />
            <img src="/images/ellipse-4-14.svg" className="ellipse-4-14" alt="ellipse-4" />
          </div>
          <div className="group-2-15">
            <img src="/images/rectangle-14-16.svg" className="rectangle-14-16" alt="rectangle-14" />
            <img src="/images/rectangle-15-17.svg" className="rectangle-15-17" alt="rectangle-15" />
            <img src="/images/rectangle-17-18.svg" className="rectangle-17-18" alt="rectangle-17" />
            <img src="/images/rectangle-18-19.svg" className="rectangle-18-19" alt="rectangle-18" />
            <img src="/images/rectangle-16-20.svg" className="rectangle-16-20" alt="rectangle-16" />
            <img src="/images/rectangle-12-21.svg" className="rectangle-12-21" alt="rectangle-12" />
          </div>
          <div className="group-3-22">
            <img src="/images/rectangle-14-23.svg" className="rectangle-14-23" alt="rectangle-14" />
            <img src="/images/rectangle-15-24.svg" className="rectangle-15-24" alt="rectangle-15" />
            <img src="/images/rectangle-17-25.svg" className="rectangle-17-25" alt="rectangle-17" />
            <img src="/images/rectangle-18-26.svg" className="rectangle-18-26" alt="rectangle-18" />
            <img src="/images/rectangle-16-27.svg" className="rectangle-16-27" alt="rectangle-16" />
            <img src="/images/rectangle-12-28.svg" className="rectangle-12-28" alt="rectangle-12" />
          </div>
        </div>

        {/* Main Yellow Card */}
        <div className="main-card">
          {/* Profile Section - Overlapping the yellow card */}
          <div className="profile-section">
            <img src="/images/ellipse-5-37.svg" className="profile-ellipse" alt="profile" />
            <div className="user-icon">
              <img src="/images/icon-39.svg" className="profile-icon" alt="user" />
            </div>
          </div>

          {/* Username */}
          <h1 className="username">Username</h1>

          {/* Content Sections */}
          <div className="card-content">
            {/* Left Section - SKIN SUMMARY */}
            <div className="skin-summary-section">
              <h2 className="skin-summary-title">SKIN SUMMARY</h2>
              <div className="skin-details">
                <p>Type:</p>
                <p>Tone:</p>
                <p>Undertone:</p>
              </div>
            </div>

            {/* Right Section - Favorite Brands */}
            <div className="favorite-brands-section">
              <h2 className="favorite-brands-title">Favorite Brands</h2>
              <div className="brand-placeholders">
                <div className="brand-placeholder"></div>
                <div className="brand-placeholder"></div>
                <div className="brand-placeholder"></div>
                <div className="brand-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutYou;