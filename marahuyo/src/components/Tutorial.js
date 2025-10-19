import './Tutorial.css';

function Tutorial({ onBack, onLogout }) {
  return (
    <div className="tutorial-page">
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
          <button 
            className="icon-circle"
            onClick={() => onBack('chat')}
            title="Chat"
          >
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
          
          {/* Bookmark icon */}
          <button 
            className="icon-circle"
            onClick={() => onBack('bookmarks')}
            title="Bookmarks"
          >
            <img src="/images/icon-9.svg" alt="bookmark" className="header-icon" />
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
      <div className="tutorial-content">
        {/* Crumpled Paper Background */}
        <div className="crumpled-paper-bg">
          <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
        </div>


        {/* Video Carousel Section */}
        <div className="video-carousel-section">
          {/* Left Arrow */}
          <div className="carousel-arrow left-arrow">
            <svg className="arrow-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </div>

          {/* Left Video Placeholder */}
          <div className="video-placeholder left-video">
            <div className="video-content">
              <img src="/images/icon-51.svg" className="video-icon" alt="video" />
            </div>
          </div>

          {/* Center Video Player */}
          <div className="video-player">
            <div className="play-button">
              <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Right Video Placeholder */}
          <div className="video-placeholder right-video">
            <div className="video-content">
              <img src="/images/icon-51.svg" className="video-icon" alt="video" />
            </div>
          </div>

          {/* Right Arrow */}
          <div className="carousel-arrow right-arrow">
            <svg className="arrow-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </div>
        </div>

        {/* Video Title */}
        <div className="video-title">
          <h2>Make up style</h2>
        </div>

        {/* Bottom Content Section */}
        <div className="bottom-content">
          {/* Current Item in Use */}
          <div className="current-item-card">
            <div className="item-image">
              <img src="/images/icon-51.svg" className="item-icon" alt="item" />
            </div>
            <div className="item-content">
              <h3 className="item-title">Current item in use</h3>
              <p className="item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
              <button className="add-button">
                <svg className="plus-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Upcoming Items */}
          <div className="upcoming-items-card">
            <h3 className="upcoming-title">Upcoming Items</h3>
            <div className="upcoming-content">
              <p>More tutorials coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;

