import React, { useEffect, useRef } from 'react';

const AutoClickButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 5000); // clic después de 5 segundos (ajusta el tiempo según necesites)
    return () => clearTimeout(timeoutId); // Limpia el timeout cuando el componente se desmonta
  }, []);

  return (
    <button
      ref={buttonRef}
      className="yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--enable-backdrop-filter-experiment"
    >
      Botón Automático
    </button>
  );
};

export default AutoClickButton;
