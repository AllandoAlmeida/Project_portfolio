import React from 'react';
import styles from './styles.module.css'

export const handleClick = () => {
  window.location.href = 'mailto:alandoalmeida@icloud.com';
};

export const ContatoButton = () => {
  return (
    <button type="submit" className={styles.BtnContact} onClick={handleClick}>
      Contato
    </button>
  );
};

export const KnowMore = () => {
  return (
    <button className={styles.knowMore}>Saiba mais</button>
  );
};


export const HeaderRadioButton = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ul className={styles.items}>
      <li>
        <button className={styles.linkNav} onClick={() => handleClick('sobre')}> Sobre </button>
      </li>
      <li>
        <button className={styles.linkNav} onClick={() => handleClick('stack')}> Stack </button>
      </li>
      <li>
        <button className={styles.linkNav} onClick={() => handleClick('projetos')}> Projetos </button>
      </li>
    </ul>
  );
};


