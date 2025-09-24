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
  return <div className="pointer-events-none fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto h-[2px] max-w-6xl overflow-hidden rounded-full bg-apple-gray-200/60">
        <div className="h-full bg-apple-gray-900 transition-all duration-200" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </div>;
};
export default ScrollProgressIndicator;