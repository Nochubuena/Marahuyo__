import './AboutYou.css';

function AboutYou({ onBack, onLogout }) {
  return (
    <div className="aboutyou-page">
      {/* Header - Dark Blue Bar with Icons */}
      <div className="header">
        {/* Logo - Marahuyo icon image */}
        <button 
          className="logo logo-button"
          onClick={() => onBack('home')}
          aria-label="Home"
        >
          <img src="/images/marahuyo-logo.png" alt="Marahuyo" className="header-logo-img" />
        </button>

        {/* Right side icons */}
        <div className="header-icons">
          {/* Chat icon */}
          <button 
            className="icon-circle"
            onClick={() => onBack('chat')}
            title="Chat"
          >
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
          
          {/* Profile icon */}
          <button 
            className="icon-circle"
            onClick={() => onBack('aboutyou')}
            title="Profile"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h2a5 5 0 0 1 10 0h2c0-3.866-3.134-7-7-7z"/>
            </svg>
          </button>
          
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