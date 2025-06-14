import React, { useState } from 'react';

function HeartClicker() {
  const [count, setCount] = useState(0);

  return (
    <div className="HeartClicker">
      <button onClick={() => setCount(count + 1)} aria-label="Click to like" className="HeartClicker-btn">
        <span role="img" aria-label="heart" style={{fontSize: '2rem', color: '#e25555'}}>&#10084;&#65039;</span>
      </button>
      <div className="HeartClicker-count">{count} {
        count === 1 ? 'like' : 'likes'
      }</div>
    </div>
  );
}

export default HeartClicker;
