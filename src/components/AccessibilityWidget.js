import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const router = useRouter();
  const isGreek = router.asPath.startsWith('/el');

  useEffect(() => {
    // Reset all settings on page load - no persistence across refreshes
    applyAccessibilitySettings(100, false, false, false);

    // Keyboard shortcut to open accessibility menu (Alt + A) 
    const handleKeyDown = (event) => {
      if (event.altKey && event.key.toLowerCase() === 'a') {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const applyAccessibilitySettings = (size, contrast, grayscale, largeText) => {
    document.documentElement.style.fontSize = `${size}%`;
    
    if (contrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    
    if (grayscale) {
      document.body.classList.add('grayscale');
    } else {
      document.body.classList.remove('grayscale');
    }
    
    if (largeText) {
      document.body.classList.add('large-text');
    } else {
      document.body.classList.remove('large-text');
    }
  };

  const adjustFontSize = (change) => {
    const newSize = Math.max(80, Math.min(150, fontSize + change));
    setFontSize(newSize);
    localStorage.setItem('accessibility-fontSize', newSize.toString());
    applyAccessibilitySettings(newSize, isHighContrast, isGrayscale, isLargeText);
  };

  const toggleHighContrast = () => {
    const newContrast = !isHighContrast;
    setIsHighContrast(newContrast);
    localStorage.setItem('accessibility-highContrast', newContrast.toString());
    applyAccessibilitySettings(fontSize, newContrast, isGrayscale, isLargeText);
  };

  const toggleGrayscale = () => {
    const newGrayscale = !isGrayscale;
    setIsGrayscale(newGrayscale);
    localStorage.setItem('accessibility-grayscale', newGrayscale.toString());
    applyAccessibilitySettings(fontSize, isHighContrast, newGrayscale, isLargeText);
  };

  const toggleLargeText = () => {
    const newLargeText = !isLargeText;
    setIsLargeText(newLargeText);
    localStorage.setItem('accessibility-largeText', newLargeText.toString());
    applyAccessibilitySettings(fontSize, isHighContrast, isGrayscale, newLargeText);
  };

  const resetAll = () => {
    setFontSize(100);
    setIsHighContrast(false);
    setIsGrayscale(false);
    setIsLargeText(false);
    localStorage.removeItem('accessibility-fontSize');
    localStorage.removeItem('accessibility-highContrast');
    localStorage.removeItem('accessibility-grayscale');
    localStorage.removeItem('accessibility-largeText');
    applyAccessibilitySettings(100, false, false, false);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        className="accessibility-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isGreek ? "Άνοιγμα μενού προσβασιμότητας" : "Open accessibility menu"}
        title={isGreek ? "Εργαλεία Προσβασιμότητας" : "Accessibility Tools"}
      >
        <img 
          src="/images/accessibility-svgrepo-com.png" 
          alt="Accessibility" 
          width="24" 
          height="24"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </button>

      {/* Accessibility Sidebar */}
      <div className={`accessibility-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="accessibility-sidebar-header">
          <h3>{isGreek ? "Εργαλεία Προσβασιμότητας" : "Accessibility Tools"}</h3>
          <button
            className="accessibility-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label={isGreek ? "Κλείσιμο μενού προσβασιμότητας" : "Close accessibility menu"}
          >
            ✕
          </button>
        </div>
        
        <div className="accessibility-sidebar-content">
          {/* Font Size Controls */}
          <div className="accessibility-control-group">
            <h4>{isGreek ? "Μέγεθος Κειμένου" : "Text Size"}</h4>
            <div className="accessibility-control-buttons">
              <button 
                onClick={() => adjustFontSize(-10)}
                aria-label={isGreek ? "Μείωση μεγέθους κειμένου" : "Decrease text size"}
                disabled={fontSize <= 80}
              >
                A-
              </button>
              <span className="font-size-display">{fontSize}%</span>
              <button 
                onClick={() => adjustFontSize(10)}
                aria-label={isGreek ? "Αύξηση μεγέθους κειμένου" : "Increase text size"}
                disabled={fontSize >= 150}
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast */}
          <div className="accessibility-control-group">
            <button
              className={`accessibility-toggle ${isHighContrast ? 'active' : ''}`}
              onClick={toggleHighContrast}
              aria-pressed={isHighContrast}
            >
              <span className="toggle-icon">🌓</span>
              <span>{isGreek ? "Υψηλή Αντίθεση" : "High Contrast"}</span>
            </button>
          </div>

          {/* Grayscale */}
          <div className="accessibility-control-group">
            <button
              className={`accessibility-toggle ${isGrayscale ? 'active' : ''}`}
              onClick={toggleGrayscale}
              aria-pressed={isGrayscale}
            >
              <span className="toggle-icon">⚫</span>
              <span>{isGreek ? "Κλίμακα Γκρι" : "Grayscale"}</span>
            </button>
          </div>

          {/* Large Text */}
          <div className="accessibility-control-group">
            <button
              className={`accessibility-toggle ${isLargeText ? 'active' : ''}`}
              onClick={toggleLargeText}
              aria-pressed={isLargeText}
            >
              <span className="toggle-icon">📖</span>
              <span>{isGreek ? "Μεγάλο Κείμενο" : "Large Text"}</span>
            </button>
          </div>

          {/* Reset Button */}
          <div className="accessibility-control-group">
            <button
              className="accessibility-reset-btn"
              onClick={resetAll}
            >
              <span className="toggle-icon">🔄</span>
              <span>{isGreek ? "Επαναφορά Όλων" : "Reset All"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="accessibility-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AccessibilityWidget;
