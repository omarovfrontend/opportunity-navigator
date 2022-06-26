import React from 'react';
import { Link } from 'react-router-dom';
import style from './MyHeader.module.css';

function MyHeader() {
  return (
    <header className={style.header}>
      <div className={style.container}>

        <div className={style.header__inner}>
          <div className={style.header__innerIntro}>
            <div>
              <Link to="/">
                <img className={style.header__logo} src="images/logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className={style.burger__block}>
              <Link to="possibilities" className={style.burger} />
              <span className={style.burger__description}>Все возможности</span>
            </div>
          </div>

          <div>
            <a className={style.header__link} href="/">Написать нам</a>
          </div>
        </div>

      </div>
    </header>
  );
}

export default MyHeader;
