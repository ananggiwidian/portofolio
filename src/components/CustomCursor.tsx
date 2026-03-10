import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const ring = document.createElement('div');
    ring.className = 'custom-cursor-ring';
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    const moveCursor = (e : MouseEvent) => {
      cursor.style.left = e.clientX - 4 + 'px';
      cursor.style.top = e.clientY - 4 + 'px';
      ring.style.left = e.clientX - 20 + 'px';
      ring.style.top = e.clientY - 20 + 'px';
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(ring);
    };
  }, []);

  return null;
};

export default CustomCursor;