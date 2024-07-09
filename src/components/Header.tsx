import {useState} from "react";
import * as gambar from "../assets/images";

export default function Header({ scrollY: number }) {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <header className={`header ${scrollY > 100 && "active"}`} data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src={gambar.logoNav} alt="UTC logo" />
          </a>

          <nav className={`navbar ${isActive ? "active" : ''}`} data-navbar>
            <div className="wrapper">
              <a href="#" className="logo">
                <img
                  src={gambar.logoNav}
                  width="162"
                  height="50"
                  alt="UTC logo"
                />
              </a>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
                onClick={() => setActive(!isActive)}
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  Beranda
                </a>
              </li>

              <li className="navbar-item">
                <a href="#jenjang" className="navbar-link" data-nav-link>
                  Jenjang
                </a>
              </li>

              <li className="navbar-item">
                <a href="#why" className="navbar-link" data-nav-link>
                  Mengapa UTC
                </a>
              </li>

              <li className="navbar-item">
                <a href="#fasilitas" className="navbar-link" data-nav-link>
                  Fasilitas
                </a>
              </li>

              <li className="navbar-item">
                <a href="#info" className="navbar-link" data-nav-link>
                  Info
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#" className="btn has-before">
              <ion-icon name="person-add-outline" aria-hidden="true"></ion-icon>
              <span className="span">Daftar</span>
            </a>
            <a href="#" className="btn-second has-before">
              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Masuk</span>
            </a>

            <button
              className="header-action-btn"
              aria-label="open menu"
              data-nav-toggler
              onClick={() => setActive(!isActive)}
            >
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div
            className={`overlay ${isActive ? "active" : ''}`}
            data-nav-toggler
            data-overlay
            onClick={() => setActive(!isActive)}
          ></div>
        </div>
      </header>
    </>
  );
}
