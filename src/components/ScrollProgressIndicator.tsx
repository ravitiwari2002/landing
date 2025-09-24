import React, { useEffect, useState } from 'react';
const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      if (totalScroll) {
        setScrollProgress(currentScroll / totalScroll * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-gradient-to-r from-blue-400 via-primary to-purple-500" style={{
      width: `${scrollProgress}%`,
      transition: 'width 0.2s ease-out'
    }}></div>
    </div>;
};
export default ScrollProgressIndicator;