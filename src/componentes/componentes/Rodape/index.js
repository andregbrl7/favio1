import React from 'react'
import styles from './Rodape.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

/*export default function Rodape(props) {*/
function Rodape() {

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString();
  };

  return (
    <footer>
      <div>
        <h3>{getCurrentDate()}</h3>
        <div>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </footer>
  );
  // };
}

export default Rodape;