import React, { useState } from "react";
import './color.css';

function ChangeColor() {
  const [color, setColor] = useState('');
  const [background, setBackground] = useState('white');

  const handleColor = (e) => {
    const { value } = e.target;
    setColor(value);
    setBackground(value); // Update background color when color input changes
  }

  return (
    <div>
      <h2>Change Color</h2>

      <div className="backgroundC" style={{ backgroundColor: background }}>
        {/* Display background color */}
        <p>Background Color: {background}</p>
      </div>

      <div className="input Color">
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          value={color}
          onChange={handleColor}
        />
      </div>
    </div>
  )
}

export default ChangeColor;
