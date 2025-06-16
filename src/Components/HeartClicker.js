import { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const HeartClicker = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="HeartClicker">
      <button onClick={() => setCount(count + 1)} className="HeartClicker-btn">
        <FaHeart style={{ fontSize: '2rem', color: '#e25555' }} />
      </button>
      <div className="HeartClicker-count">{count} {
        count === 1 ? 'like' : 'likes'
      }</div>
    </div>
  );
};

export default HeartClicker;
