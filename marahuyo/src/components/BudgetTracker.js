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
      <div className="budgettracker-content">
        {/* Crumpled Paper Background */}
        <div className="crumpled-paper-bg">
          <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
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
          {/* First Card - Chu Chu Beauty Blush */}
          <div className="content-card">
            <div className="card-header">
              <img src="https://down-ph.img.susercontent.com/file/sg-11134202-7rd67-lvt30y69pt9l6c" className="icon-51" alt="Chu Chu Beauty Blush" />
              <h3 className="item-title">Chu Chu Beauty Heart Stick Blush</h3>
            </div>
            <p className="item-description">
              Multi-use cream stick for cheeks, lips, and eyes. Blendable, non-sticky natural flush.
              <br />
              <strong>Approx. Price:</strong> ₱399
            </p>
          </div>

          {/* Second Card - Imma Beauty Blush */}
          <div className="content-card">
            <div className="card-header">
              <img src="https://tse1.mm.bing.net/th/id/OIP.fK_fR6xJzarUZ_hAwzwLAgHaJQ?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" className="icon-51" alt="Imma Beauty Blush" />
              <h3 className="item-title">Imma Beauty Blush</h3>
            </div>
            <p className="item-description">
              Cream-to-powder blush with a radiant finish; easy to apply and blend.
              <br />
              <strong>Approx. Price:</strong> ₱350
            </p>
          </div>

          {/* Third Card - Imma Beauty Lippie */}
          <div className="content-card">
            <div className="card-header">
              <img src="https://tse1.mm.bing.net/th/id/OIP.fK_fR6xJzarUZ_hAwzwLAgHaJQ?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" className="icon-51" alt="Imma Beauty Lippie" />
              <h3 className="item-title">Imma Beauty Lippie</h3>
            </div>
            <p className="item-description">
              Moisturizing lipstick with vibrant color payoff and comfortable wear.
              <br />
              <strong>Approx. Price:</strong> ₱320
            </p>
          </div>

          {/* Fourth Card - BLK Air Matte */}
          <div className="content-card">
            <div className="card-header">
              <img src="https://down-ph.img.susercontent.com/file/ph-11134207-7r98s-lyx3qrxpp8fycc" className="icon-51" alt="BLK Air Matte" />
              <h3 className="item-title">BLK Air Matte</h3>
            </div>
            <p className="item-description">
              Lightweight, airy-matte formula that blurs and smooths for a soft-focus look.
              <br />
              <strong>Approx. Price:</strong> ₱399–₱749
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetTracker;
