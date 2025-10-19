import './Tutorial.css';
import { useState } from 'react';

function Tutorial({ onBack, onLogout }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    {
      id: 'y_h7RHvIXgc',
      title: 'Everyday Soft Glam Makeup Tutorial',
      thumbnail: `https://img.youtube.com/vi/y_h7RHvIXgc/maxresdefault.jpg`
    },
    {
      id: 'H84bX7imbJs',
      title: 'Beginner-Friendly Natural Makeup Routine', 
      thumbnail: `https://img.youtube.com/vi/H84bX7imbJs/maxresdefault.jpg`
    },
    {
      id: 'Me-vF1aSptE',
      title: 'Fresh No-Makeup Makeup Look',
      thumbnail: `https://img.youtube.com/vi/Me-vF1aSptE/maxresdefault.jpg`
    },
    {
      id: 'g6geutlCWjM',
      title: 'Smokey Eye Night-Out Tutorial',
      thumbnail: `https://img.youtube.com/vi/g6geutlCWjM/maxresdefault.jpg`
    }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const playVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="tutorial-page">
      {/* Header - Dark Blue Bar with Logo and Icons */}
      <div className="header">
        {/* Logo - Marahuyo logo */}
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
      <div className="tutorial-content">
        {/* Crumpled Paper Background */}
        <div className="crumpled-paper-bg">
          <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
        </div>


        {/* Video Carousel Section */}
        <div className="video-carousel-section">
          {/* Left Arrow */}
          <button className="carousel-arrow left-arrow" onClick={prevVideo}>
            <svg className="arrow-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* Left Video Placeholder */}
          <div className="video-placeholder left-video">
            <div className="video-content" onClick={() => playVideo(videos[(currentVideoIndex - 1 + videos.length) % videos.length].id)}>
              <img 
                src={videos[(currentVideoIndex - 1 + videos.length) % videos.length].thumbnail} 
                className="video-thumbnail" 
                alt={videos[(currentVideoIndex - 1 + videos.length) % videos.length].title}
              />
              <div className="play-overlay">
                <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Center Video Player */}
          <div className="video-player" onClick={() => playVideo(videos[currentVideoIndex].id)}>
            <img 
              src={videos[currentVideoIndex].thumbnail} 
              className="main-video-thumbnail" 
              alt={videos[currentVideoIndex].title}
            />
            <div className="play-button">
              <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Right Video Placeholder */}
          <div className="video-placeholder right-video">
            <div className="video-content" onClick={() => playVideo(videos[(currentVideoIndex + 1) % videos.length].id)}>
              <img 
                src={videos[(currentVideoIndex + 1) % videos.length].thumbnail} 
                className="video-thumbnail" 
                alt={videos[(currentVideoIndex + 1) % videos.length].title}
              />
              <div className="play-overlay">
                <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="carousel-arrow right-arrow" onClick={nextVideo}>
            <svg className="arrow-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>

        {/* Video Title */}
        <div className="video-title">
          <h2>{videos[currentVideoIndex].title}</h2>
        </div>

        {/* Bottom Content Section - Makeup Items Grid */}
        <div className="bottom-content">
          <h3 className="grid-title">Recommended Makeup Items</h3>
          <div className="makeup-grid">
            <div className="makeup-card">
              <img src="https://imgs.search.brave.com/6rXnw1Ez2iMLB-X2Jwjf4TTwnKTqT5BCxQzRAeCntK4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjLzQ2/L2RmLzNjNDZkZjgz/Njk1NzU3M2FiNzkw/M2ZhNmFlMWYzNmVh/LmpwZw" alt="issy active concealer" className="makeup-image" />
              <div className="makeup-info">
                <h4 className="makeup-name">issy active concealer</h4>
                <p className="makeup-desc">Lightweight, buildable coverage that brightens under eyes and blurs blemishes.</p>
              </div>
            </div>
            <div className="makeup-card">
              <img src="https://imgs.search.brave.com/MSn2UzyTtdZQDOa2IQaag8PJRJVuk-PQCn5RRXo91Uc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3VtbWl0bWVk/aWEtZGlnaXRhbC5j/b20vY29zbW8vaW1h/Z2VzLzIwMjUvMDEv/MjEvYmVhdXR5LWZ5/cC12aWNlLWNvc21l/dGljcy1vbi10aGUt/ZGFpbHktYnJvdy1j/b2xsZWN0aW9uLTE3/Mzc0NTQ4NDUuanBn" alt="vice brow collection" className="makeup-image" />
              <div className="makeup-info">
                <h4 className="makeup-name">vice brow collection</h4>
                <p className="makeup-desc">Define, fill, and set brows with precise pencils and flexible gels.</p>
              </div>
            </div>
            <div className="makeup-card">
              <img src="https://imgs.search.brave.com/XEZrAXLLHE7jfwOeE7WYfQejoBdGsXFvxjmQTwnMw6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncndt/Y29zbWV0aWNzLmNv/bS5waC9jZG4vc2hv/cC9maWxlcy9FY29t/bS1QUkxvb3NlQmFr/aW5nX1NldHRpbmdQ/b3dkZXItMTEuanBn/P3Y9MTc0NzA2MDE5/MyZ3aWR0aD0xNDQ1" alt="grwm powder rush" className="makeup-image" />
              <div className="makeup-info">
                <h4 className="makeup-name">grwm powder rush</h4>
                <p className="makeup-desc">Silky soft-pressed powder to blur shine and set looks all day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;

