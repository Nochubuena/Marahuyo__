import './SkinType.css';
import { useEffect, useRef, useState } from 'react';

function CameraPanel() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [hasStream, setHasStream] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // If the site already has permission, start immediately
    const stopStream = () => {
      const stream = streamRef.current;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setHasStream(false);
    };
    const check = async () => {
      try {
        if (navigator.permissions && navigator.permissions.query) {
          const status = await navigator.permissions.query({ name: 'camera' });
          if (status.state === 'granted') {
            await handleStart();
          }
        }
      } catch {}
    };
    check();
    return () => { stopStream(); };
  }, []);

  const handleStart = async () => {
    // Retry starting the camera on user gesture
    try {
      if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        setError('getUserMedia is not supported in this browser');
        return;
      }
      const constraints = { video: { facingMode: 'user' }, audio: false };
      // Stop any existing stream before starting a new one
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setHasStream(true);
        setError('');
      }
    } catch (e) {
      if (typeof window !== 'undefined' && !window.isSecureContext) {
        setError('Camera requires HTTPS or localhost. Please run over a secure origin.');
      } else {
        const msg = e && e.name ? e.name : 'unknown error';
        if (msg === 'NotAllowedError') {
          setError('Camera permission denied. Please allow access and click Start again.');
        } else if (msg === 'NotFoundError' || msg === 'DevicesNotFoundError') {
          setError('No camera device found.');
        } else if (msg === 'NotReadableError') {
          setError('Camera is in use by another application.');
        } else {
          setError('Unable to start camera: ' + msg);
        }
      }
    }
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="camera-frame">
      {error && (
        <div className="camera-error">
          {error}. Please allow camera access and then click Start.
        </div>
      )}
      <video ref={videoRef} className="camera-video" playsInline autoPlay muted />
      <div className="camera-actions">
        <button className="camera-btn" type="button" onClick={handleStart}>Start</button>
        <button className="camera-btn" type="button" onClick={handleCapture} disabled={!hasStream}>Capture</button>
      </div>
      <canvas ref={canvasRef} className="camera-canvas" />
    </div>
  );
}

function SkinTypeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'pore_size',
      text: 'How would you describe your pores?',
      options: [
        { value: 'oily', text: 'Large and visible, especially on nose and cheeks' },
        { value: 'normal', text: 'Small and barely visible' },
        { value: 'dry', text: 'Very small and barely visible' },
        { value: 'combination', text: 'Large on nose, small elsewhere' }
      ]
    },
    {
      id: 'oiliness',
      text: 'How does your skin feel by midday?',
      options: [
        { value: 'oily', text: 'Shiny and oily all over' },
        { value: 'normal', text: 'Comfortable, not too oily or dry' },
        { value: 'dry', text: 'Tight and dry' },
        { value: 'combination', text: 'Oily in T-zone, normal elsewhere' }
      ]
    },
    {
      id: 'sensitivity',
      text: 'How does your skin react to new products?',
      options: [
        { value: 'sensitive', text: 'Often red, irritated, or breaks out' },
        { value: 'normal', text: 'Usually no reaction' },
        { value: 'oily', text: 'May break out but not irritated' },
        { value: 'dry', text: 'May feel tight or sting' }
      ]
    },
    {
      id: 'texture',
      text: 'How would you describe your skin texture?',
      options: [
        { value: 'oily', text: 'Smooth but shiny' },
        { value: 'normal', text: 'Smooth and even' },
        { value: 'dry', text: 'Rough or flaky' },
        { value: 'combination', text: 'Smooth in some areas, rough in others' }
      ]
    },
    {
      id: 'breakouts',
      text: 'How often do you get breakouts?',
      options: [
        { value: 'oily', text: 'Frequently, especially on forehead and chin' },
        { value: 'normal', text: 'Rarely' },
        { value: 'dry', text: 'Almost never' },
        { value: 'combination', text: 'Occasionally in T-zone' }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    const counts = { oily: 0, normal: 0, dry: 0, combination: 0, sensitive: 0 };
    Object.values(answers).forEach(answer => {
      if (counts.hasOwnProperty(answer)) counts[answer]++;
    });
    
    const maxCount = Math.max(...Object.values(counts));
    const skinType = Object.keys(counts).find(key => counts[key] === maxCount);
    
    const descriptions = {
      oily: 'Your skin produces excess oil, especially in the T-zone. Look for oil-free, non-comedogenic products.',
      normal: 'Your skin is well-balanced with minimal issues. Maintain with gentle, hydrating products.',
      dry: 'Your skin lacks moisture and may feel tight. Focus on hydrating and moisturizing products.',
      combination: 'Your skin is oily in the T-zone but normal/dry elsewhere. Use different products for different areas.',
      sensitive: 'Your skin reacts easily to products and environmental factors. Use gentle, fragrance-free products.'
    };
    
    setResult({ type: skinType, description: descriptions[skinType] });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="quiz-result">
        <h3>Your Skin Type: {result.type.toUpperCase()}</h3>
        <p>{result.description}</p>
        <button className="quiz-button" onClick={resetQuiz}>Retake Quiz</button>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id];

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <h3 className="quiz-question">{currentQ.text}</h3>
      <div className="quiz-options">
        {currentQ.options.map((option, index) => (
          <label key={index} className={`quiz-option ${isAnswered === option.value ? 'selected' : ''}`}>
            <input
              type="radio"
              name={currentQ.id}
              value={option.value}
              checked={isAnswered === option.value}
              onChange={() => handleAnswer(currentQ.id, option.value)}
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
      <div className="quiz-navigation">
        <button 
          className="quiz-button" 
          onClick={prevQuestion} 
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button 
          className="quiz-button primary" 
          onClick={nextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
        </button>
      </div>
    </div>
  );
}

function SkinType({ onBack, onLogout }) {
  return (
    <div className="skintype-page">
      {/* Header - Dark Blue Bar with Logo and Icons */}
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
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
          
          {/* Profile icon */}
          <button 
            className="icon-circle"
            onClick={() => onBack('aboutyou')}
            title="Profile"
          >
            <img src="/images/icon-64.svg" alt="profile" className="profile-icon" />
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
      <div className="skintype-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title">KNOW YOUR SKIN TYPE</h1>
          <p className="subtitle">Take a short quiz to know your skin type.</p>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {/* Left Section - Live Camera */}
          <div className="left-content">
            <div className="crumpled-paper-bg">
              <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
            </div>
            <CameraPanel />
          </div>

          {/* Right Section - Skin Type Quiz */}
          <div className="right-content">
            <SkinTypeQuiz />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinType;
