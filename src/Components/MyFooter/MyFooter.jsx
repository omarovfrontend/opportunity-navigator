import React from 'react';
import style from './MyFooter.module.css';

function MyFooter() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>

        <div className={style.footer__inner}>
          <div className={style.footer__copy}>
            &copy; Навигатор возможностей. Росмолодежь
          </div>

          <div className={style.footer__phone}>
            +7 495 665 88 99
          </div>

          <div className={style.footer__innerOpportunities}>
            <button type="button" className={style.footer__innerButtonPossibility}>
              Разместить возможность
            </button>
            <button type="button" className={style.footer__innerButtonQuestion}>
              Задать вопрос
            </button>
          </div>

          <div className={style.footer__privacy}>
            <a href="/">Политика конфиденцилаьности</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default MyFooter;
