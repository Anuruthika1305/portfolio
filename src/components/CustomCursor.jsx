import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = clientX + 'px';
        cursorRef.current.style.top = clientY + 'px';
      }

      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.left = clientX + 'px';
        cursorInnerRef.current.style.top = clientY + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.classList.add('active');
      if (cursorInnerRef.current) cursorInnerRef.current.classList.add('active');
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('active');
      if (cursorInnerRef.current) cursorInnerRef.current.classList.remove('active');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-inner" ref={cursorInnerRef}></div>
    </>
  );
};

export default CustomCursor;
