import React from 'react';
import style from './HeaderContent.module.css';

function HeaderContent() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.header__inner}>

          <h1 className={style.header__title}>
            Какую возможность
            {' '}
            <br />
            {' '}
            будем искать?
          </h1>

          <div className={style.header__search}>
            <span className={style.header__searchIcon} />
            <input className={style.header__searchInput} type="text" placeholder="Начните вводить что-то" />
            <button className={style.header__searchButton} type="button">Найти</button>
          </div>

          <div className={style.header__allButton}>
            <a href="/">Показать все возможности</a>
          </div>

          <div className={style.header__description}>
            Краткое описание содержимого сайта, просьба ответить на
            {' '}
            <br />
            несколько простых вопросов для создания персональной
            {' '}
            <br />
            подборки возможностей.
          </div>

          <div className={style.header__people}>
            <span>Росмолодежь</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
