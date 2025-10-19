import './App.css';
import { useState } from 'react';
import SkinType from './components/SkinType';
import BudgetTracker from './components/BudgetTracker';
import Tutorial from './components/Tutorial';
import AboutYou from './components/AboutYou';
import ContactUs from './components/ContactUs';
import Login from './components/Login';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setActiveSection('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('home');
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    console.log(`Navigating to: ${section}`);
    
    // You can add different content based on the section
    switch(section) {
      default:
        break;
    }
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Render components based on active section
  if (activeSection === 'skin-type') {
    return <SkinType onBack={handleNavigation} onLogout={handleLogout} />;
  }
  
  if (activeSection === 'budget-tracker') {
    return <BudgetTracker onBack={handleNavigation} onLogout={handleLogout} />;
  }
  
  if (activeSection === 'tutorials') {
    return <Tutorial onBack={handleNavigation} onLogout={handleLogout} />;
  }
  
  if (activeSection === 'chat') {
    return <ContactUs onBack={handleNavigation} onLogout={handleLogout} />;
  }
  
  if (activeSection === 'about-you') {
    return <AboutYou onBack={handleNavigation} onLogout={handleLogout} />;
  }

  return (
    <div className="desktop-1-1">
      {/* Header - Dark Blue Bar with Logo and Icons */}
      <div className="header">
        {/* Logo - Marahuyo icon image */}
        <button 
          className="logo logo-button"
          onClick={() => handleNavigation('home')}
          aria-label="Home"
        >
          <img src="/images/marahuyo-logo.png" alt="Marahuyo" className="header-logo-img" />
        </button>

        {/* Right side icons */}
        <div className="header-icons">
          {/* Chat icon */}
          <button 
            className="icon-circle"
            onClick={() => handleNavigation('chat')}
            title="Chat"
          >
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
          
          {/* Profile icon */}
          <button 
            className="icon-circle"
            onClick={() => handleNavigation('aboutyou')}
            title="Profile"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h2a5 5 0 0 1 10 0h2c0-3.866-3.134-7-7-7z"/>
            </svg>
          </button>
          
          {/* Logout button */}
          <button 
            className="logout-button"
            onClick={handleLogout}
            title="Logout"
          >
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Left Section - Crumpled Paper Background */}
        <div className="left-section">
          {/* Crumpled paper background */}
          <img src="/images/bnb-1-7.png" className="crumpled-bg" alt="crumpled paper" />
          
          {/* Large Logo */}
          <div className="large-logo">
            <img src="/images/marahuyo-logo.png" alt="Marahuyo" className="marahuyo-large-icon" />
          </div>
          
          {/* MARAHUYO Text */}
          <div className="marahuyo-text">
            <span>MA<br/>RA<br/>HU<br/>YO</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Top Right - Yellow Background with Makeup Products */}
          <div className="yellow-section">
            {/* Background makeup products */}
            <img src="/images/image-8-11.png" className="makeup-bg" alt="makeup products" />
            
            {/* Makeup Prep Squad Products - Three tubes arranged diagonally */}
            <div className="primer-products">
              {/* Life-proof Primer */}
              <div className="primer-item primer-1">
                <img src="/images/primer-1-10.png" className="primer-tube" alt="Life-proof Primer" />
                <div className="primer-label">LIFE-PROOF PRIMER</div>
              </div>
              
              {/* Jelly Primer */}
              <div className="primer-item primer-2">
                <img src="/images/primer-2-12.png" className="primer-tube" alt="Jelly Primer" />
                <div className="primer-label">JELLY PRIMER</div>
              </div>
              
              {/* Blurmatte Primer */}
              <div className="primer-item primer-3">
                <img src="/images/primer-1-10.png" className="primer-tube" alt="Blurmatte Primer" />
                <div className="primer-label">BLURMATTE PRIMER</div>
              </div>
            </div>
            
            {/* "Top Local Brands Today!" Text */}
            <div className="brands-text">
              <span>Top Local<br/>Brands<br/>Today!</span>
            </div>
          </div>

          {/* Bottom Right - Four Navigation Buttons */}
          <div className="navigation-blocks">
            {/* Skin Type Button */}
            <button 
              className={`nav-block nav-button ${activeSection === 'skin-type' ? 'active' : ''}`}
              onClick={() => handleNavigation('skin-type')}
              aria-label="Skin Type"
            >
              <img src="/images/1-2-55.png" className="nav-image" alt="Skin Type" />
              <div className="nav-text">
                <span>Skin<br/>Type</span>
              </div>
            </button>

            {/* Budget Tracker Button */}
            <button 
              className={`nav-block nav-button ${activeSection === 'budget-tracker' ? 'active' : ''}`}
              onClick={() => handleNavigation('budget-tracker')}
              aria-label="Budget Tracker"
            >
              <img src="/images/2-1-57.png" className="nav-image" alt="Budget Tracker" />
              <div className="nav-text">
                <span>Budget<br/>Tracker</span>
              </div>
            </button>

            {/* Tutorials Button */}
            <button 
              className={`nav-block nav-button ${activeSection === 'tutorials' ? 'active' : ''}`}
              onClick={() => handleNavigation('tutorials')}
              aria-label="Tutorials"
            >
              <img src="/images/3-1-58.png" className="nav-image" alt="Tutorials" />
              <div className="nav-text">
                <span>Tutorials</span>
              </div>
            </button>

            {/* About You Button */}
            <button 
              className={`nav-block nav-button ${activeSection === 'about-you' ? 'active' : ''}`}
              onClick={() => handleNavigation('about-you')}
              aria-label="About You"
            >
              <img src="/images/45-1-61.png" className="nav-image" alt="About You" />
              <div className="nav-text">
                <span>About<br/>You</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;