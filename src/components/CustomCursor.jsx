import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
      <div className="w-6 h-6 rounded-full border-2 border-lime-400 bg-transparent mix-blend-difference transition-transform duration-75"></div>
    </div>
  );
};

export default CustomCursor;
