// components/TypeWriter.js
import { useEffect, useState } from 'react';

const TypeWriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, displayText]);

  return <p className='para1'>{displayText}</p>;
};

export default TypeWriter;
