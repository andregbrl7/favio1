import React from 'react';
import Style from './Rodape.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

  const Rodape = () => {

  const getCurrentDate = () => {
  const now = new Date();
    return now.toLocaleDateString();
  };
    
  return (
    <footer className={Style.rodape}>
      <div>
        <h3>{getCurrentDate()}</h3>
      <div>
        <FontAwesomeIcon icon= {faFacebook}/>
        <FontAwesomeIcon icon= {faTwitter}/>
        <FontAwesomeIcon icon= {faInstagram}/>
      </div>
      </div>
    </footer>
  );

};

export default Rodape;