import React from 'react';
import style from './AllPossibilities.module.css';

function AllPossibilities() {
  return (
    <section className={style.section}>
      <div className={style.container}>

        <div className={style.blog}>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Образование</h3>
            <div className={style.blog__content}>
              <p>Высшее</p>
              <p>Дополнительное</p>
              <p>Повышение квалификации</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Научная деятельность</h3>
            <div className={style.blog__content}>
              <p>Грантовая поддержка молодых ученых</p>
              <p>Исследовательские центры</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Волонтерство</h3>
            <div className={style.blog__content}>
              <p>Общественные организации</p>
              <p>Обучение волонтеров</p>
              <p>Добровольческие объединения</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Молодая семья</h3>
            <div className={style.blog__content}>
              <p>Льготы</p>
              <p>Жилье / ипотека</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Конкурсы и гранты</h3>
            <div className={style.blog__content}>
              <p>Грантовая поддержка</p>
              <p>Конкурсные мероприятия</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Предпринимательство</h3>
            <div className={style.blog__content}>
              <p>Поддержка молодых предпринимателей</p>
              <p>Мастер-классы</p>
              <p>Конференции и форумы</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Гос служба</h3>
            <div className={style.blog__content}>
              <p>Вакансии</p>
              <p>Кадровый резерв</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Творчество</h3>
            <div className={style.blog__content}>
              <p>Творческие конкурсы</p>
              <p>Мастер-классы</p>
              <p>
                Творческие мастерские /
                {' '}
                <br />
                {' '}
                объединения / студии
              </p>
              <p>События и мероприятия</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Культура</h3>
            <div className={style.blog__content}>
              <p>Музеи</p>
              <p>Театры</p>
              <p>Выставки кино</p>
              <p>Пушкинская карта</p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Карьера</h3>
            <div className={style.blog__content}>
              <p>Ярмарка вакансий</p>
              <p>Тренинги</p>
              <p>Карьерные консультанты</p>
              <p>Стажировки</p>
              <p>
                Карьерный навигатор
                {' '}
                <br />
                {' '}
                (справочник профессий РСВ)
              </p>
            </div>
          </div>
          <div className={style.blog__item}>
            <h3 className={style.blog__title}>Спорт и Туризм</h3>
            <div className={style.blog__content}>
              <p>Спортивные мероприятия</p>
              <p>Секции</p>
              <p>Туристические клубы</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AllPossibilities;
