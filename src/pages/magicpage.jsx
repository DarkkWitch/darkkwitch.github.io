import { useEffect, useState } from 'react';

function MagicPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500); // efekt po 0.5s
  }, []);

  return (
    <div className="centered">
      <h1 className={show ? 'fade-in' : ''}>✨ Magia React ✨</h1>
      {show && (
        <img
          src="https://picsum.photos/400/300"
          alt="random"
          className="fade-in"
        />
      )}
    </div>
  );
}

export default MagicPage;
