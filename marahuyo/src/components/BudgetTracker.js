import './BudgetTracker.css';

function BudgetTracker({ onBack, onLogout }) {
  return (
    <div className="budgettracker-page">
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
            <img src="/images/icon-6.svg" alt="chat" className="header-icon" />
          </div>
          
          {/* Bookmark icon */}
          <div className="icon-circle">
            <img src="/images/icon-9.svg" alt="bookmark" className="header-icon" />
          </div>
          
          {/* Profile icon */}
          <div className="icon-circle">
            <img src="/images/icon-11.svg" alt="profile" className="header-icon" />
          </div>
          
          {/* Chat icon 2 */}
          <div className="icon-circle">
            <img src="/images/icon-13.svg" alt="chat2" className="header-icon" />
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
      <div className="budgettracker-content">
        {/* Crumpled Paper Background */}
        <div className="crumpled-paper-bg">
          <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
        </div>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="group-1-17">
            <img src="/images/ellipse-1-18.svg" className="ellipse-1-18" alt="ellipse-1" />
            <img src="/images/ellipse-2-19.svg" className="ellipse-2-19" alt="ellipse-2" />
            <img src="/images/ellipse-3-20.svg" className="ellipse-3-20" alt="ellipse-3" />
            <img src="/images/ellipse-4-21.svg" className="ellipse-4-21" alt="ellipse-4" />
          </div>
          <div className="group-2-22">
            <img src="/images/rectangle-14-23.svg" className="rectangle-14-23" alt="rectangle-14" />
            <img src="/images/rectangle-15-24.svg" className="rectangle-15-24" alt="rectangle-15" />
            <img src="/images/rectangle-17-25.svg" className="rectangle-17-25" alt="rectangle-17" />
            <img src="/images/rectangle-18-26.svg" className="rectangle-18-26" alt="rectangle-18" />
            <img src="/images/rectangle-16-27.svg" className="rectangle-16-27" alt="rectangle-16" />
            <img src="/images/rectangle-12-28.svg" className="rectangle-12-28" alt="rectangle-12" />
          </div>
          <div className="group-3-29">
            <img src="/images/rectangle-14-30.svg" className="rectangle-14-30" alt="rectangle-14" />
            <img src="/images/rectangle-15-31.svg" className="rectangle-15-31" alt="rectangle-15" />
            <img src="/images/rectangle-17-32.svg" className="rectangle-17-32" alt="rectangle-17" />
            <img src="/images/rectangle-18-33.svg" className="rectangle-18-33" alt="rectangle-18" />
            <img src="/images/rectangle-16-34.svg" className="rectangle-16-34" alt="rectangle-16" />
            <img src="/images/rectangle-12-35.svg" className="rectangle-12-35" alt="rectangle-12" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="search-content">
            <div className="search-icon">
              <img src="/images/icon-42.svg" className="icon-42" alt="search" />
            </div>
            <div className="search-input">
              <span className="search-placeholder">Search items...</span>
            </div>
            <div className="search-actions">
              <img src="/images/icon-49.svg" className="icon-49" alt="filter" />
            </div>
          </div>
        </div>

        {/* Content Cards Row */}
        <div className="content-cards-row">
          {/* First Card */}
          <div className="content-card">
            <div className="card-header">
              <img src="/images/icon-51.svg" className="icon-51" alt="item" />
              <h3 className="item-title">Item Name</h3>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>

          {/* Second Card */}
          <div className="content-card">
            <div className="card-header">
              <img src="/images/icon-51.svg" className="icon-51" alt="item" />
              <h3 className="item-title">Item Name</h3>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>

          {/* Third Card */}
          <div className="content-card">
            <div className="card-header">
              <img src="/images/icon-51.svg" className="icon-51" alt="item" />
              <h3 className="item-title">Item Name</h3>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>

          {/* Fourth Card - Other Options */}
          <div className="content-card other-options-card">
            <h3 className="other-options">Here are some other options:</h3>
            <div className="shopping-actions">
              <div className="shopping-cart">
                <img src="/images/icon-60.svg" className="icon-60" alt="cart" />
              </div>
              <div className="shopping-cart">
                <img src="/images/icon-62.svg" className="icon-62" alt="cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetTracker;
