import React, { useState, useEffect } from 'react';
import styles from './scrollButton.module.css'

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função que verifica a rolagem
  const handleScroll = () => {
    // Verifica se a posição de rolagem (scroll) é maior que 200px
    if (window.scrollY > 200) {
      setIsVisible(true); // Torna o botão visível
    } else {
      setIsVisible(false); // Esconde o botão
    }
  };

  // Adiciona o ouvinte de scroll quando o componente é montado
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpeza do ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* O botão só será renderizado se isVisible for true */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Exemplo de ação, leva para o topo
          className={styles.scroll_button}
        >
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
