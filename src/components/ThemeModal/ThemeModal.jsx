import React, { useState, useEffect } from 'react';
import './ThemeModal.css';

const ThemeModal = ({ isOpen, onClose, setTheme }) => {
  const [primaryColor, setPrimaryColor] = useState('270');
  const [backgroundColor, setBackgroundColor] = useState('light');

  useEffect(() => {
    const savedPrimaryColor = localStorage.getItem('primaryColor') || '270';
    const savedBackgroundColor = localStorage.getItem('backgroundColor') || 'light';
    setPrimaryColor(savedPrimaryColor);
    setBackgroundColor(savedBackgroundColor);
  }, []);

  const handleSave = () => {
    localStorage.setItem('primaryColor', primaryColor);
    localStorage.setItem('backgroundColor', backgroundColor);
    setTheme({ primaryColor, backgroundColor });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Customize Theme</h2>
        <p>Change the Primary and the Background color to your preference</p>
        <div className="modal-content">
          <div>
            <h4>Primary Color</h4>
            <div className="color-buttons">
              <div
                className={`color-button ${primaryColor === '270' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(270, 89%, 41%)' }}
                onClick={() => setPrimaryColor('270')}
              />
              <div
                className={`color-button ${primaryColor === '0' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(0, 89%, 41%)' }}
                onClick={() => setPrimaryColor('0')}
              />
              <div
                className={`color-button ${primaryColor === '300' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(300, 89%, 41%)' }}
                onClick={() => setPrimaryColor('300')}
              />
              <div
                className={`color-button ${primaryColor === '240' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(240, 89%, 41%)' }}
                onClick={() => setPrimaryColor('240')}
              />
              <div
                className={`color-button ${primaryColor === '60' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(60, 89%, 41%)' }}
                onClick={() => setPrimaryColor('60')}
              />
              <div
                className={`color-button ${primaryColor === '120' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(120, 89%, 41%)' }}
                onClick={() => setPrimaryColor('120')}
              />
            </div>
          </div>
          <div>
            <h3>Background Color</h3>
            <div className="color-buttons2">
              <div
                className={`color-button2 ${backgroundColor === 'light' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(0, 0%, 94%)' }}
                onClick={() => setBackgroundColor('light')}
              />
              <div
                className={`color-button2 ${backgroundColor === 'dark' ? 'selected' : ''}`}
                style={{ backgroundColor: 'hsl(0, 0%, 15%)' }}
                onClick={() => setBackgroundColor('dark')}
              />
            </div>
          </div>
          <button onClick={handleSave} className='btn primary'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;