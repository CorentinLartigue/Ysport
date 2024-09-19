import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from './assets/Logo.png';
import './Header.css';

function Header() {
  return (
    <>
      <header>
        <div id="logo" >
          <h1>Ysport</h1>
          <img src={logoHeader} className="logoHeader" alt="Header logo" />
        </div>
        <nav id="menu" className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li id= "accueil" className="nav-item">
                  <Link className="nav-link" to="/accueil">Accueil</Link>
                </li>
                <li  className="nav-item">
                  <Link className="nav-link" to="/carte">Carte</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/graphique">Graphiques</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div  id="search" className="input-group ">
                  <input id="search_input" type="text" className="form-control" placeholder="Rechercher un complexe... " ></input>
                  <span>
                    <button id="btn_search" type="button" className="btn btn-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                      </svg>
                    </button>
                  </span>
                </div>
              </form>        
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
