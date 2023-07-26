import React from 'react'
import styles from './Cabecalho.module.css'

const Cabecalho = ({logo, title}) => {
  return (
    <header> 
      <div>
        <img src={logo} alt="logo01"/>
        <h1>{title}</h1>
      </div>

      <nav className='bar'>
        <ul>
          <li><a href= "Pagina Principal" >Home</a></li>
          <li><a href= "Contato" >Contato</a></li>
          <li><a href= "Menu" >Menu</a></li>
        </ul>
      </nav>
    </header>
   
  );
// };
};
export default Cabecalho;