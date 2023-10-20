import React from "react";
import styles from "./Cabecalho.module.css";

 const Cabecalho = ({ logo, title }) => {
  return (
    <header>
      <div>
        <h1>{title}</h1>
      </div>

      <nav className="navbar">
        <ul className={styles.bar}>
          <li>
            <a href="Pagina Principal">Home</a>
          </li>
          <li>
            <a href="Contato">Contato</a>
          </li>
          <li>
            <a href="Menu">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
  // };
};
export default Cabecalho;