import React, { useState } from 'react';

const HeartClicker = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="HeartClicker">
      <button onClick={() => setCount(count + 1)} aria-label="Click to like" className="HeartClicker-btn">
        <span role="img" aria-label="heart" style={{fontSize: '2rem', color: '#e25555'}}>&#10084;&#65039;</span>
      </button>
      <div className="HeartClicker-count">{count} {
        count === 1 ? 'like' : 'likes'
      }</div>
      {count > 10 && (
        <div>congrats</div>
      )}
    </div>
  );
};

export default HeartClicker;
