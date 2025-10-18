import './SkinType.css';

function SkinType({ onBack, onLogout }) {
  return (
    <div className="skintype-page">
      {/* Header - Dark Blue Bar with Logo and Icons */}
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
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          
          {/* Profile icon */}
          <div className="icon-circle">
            <img src="/images/icon-64.svg" alt="profile" className="profile-icon" />
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
      <div className="skintype-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title">KNOW YOUR SKIN TYPE</h1>
          <p className="subtitle">Take a short quiz to know your skin type.</p>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {/* Left Section - Camera Icon with Crumpled Paper */}
          <div className="left-content">
            <div className="crumpled-paper-bg">
              <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
            </div>
            <div className="camera-frame">
              <div className="camera-icon">
                <div className="camera-body">
                  <div className="camera-top"></div>
                  <div className="camera-indicator"></div>
                </div>
                <div className="camera-lens">
                  <div className="lens-outer">
                    <div className="lens-inner"></div>
                  </div>
                  <div className="lens-dot"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content Text */}
          <div className="right-content">
            <div className="content-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinType;
