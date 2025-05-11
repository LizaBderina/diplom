import React, { useEffect } from "react";
import { Header, Footer } from "../components/layout";
import CalculatorSection from "../components/sections/CalculatorSection";
import "../styles/pages/renovation-apartment.css";
import { ConsultationForm } from "../components/common/ConsultationForm";

const RenovationApartmentPage = () => {
  // При загрузке страницы скроллим вверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="renovation-apartment-page">
      <Header />

      {/* ---------------------------------------------------------------- */}
      {/*                          HERO / БАННЕР                           */}
      {/* ---------------------------------------------------------------- */}
      <div className="main-banner">
        <div className="main-banner-bg" />
        <div className="banner-overlay" />

        <div className="container">
          <div className="banner-content">
            <h1 className="main-title">Ремонт квартир под ключ</h1>
            <h2 className="sub-title">с гарантией 5 лет</h2>

            <p className="banner-description">
              Ремонт квартир от&nbsp;200&nbsp;кв.м. Дизайн-проект в&nbsp;подарок
            </p>
            <p className="banner-location">Москва и&nbsp;Московская область</p>

            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("calculator")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Узнать стоимость ремонта
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*                           ПРЕИМУЩЕСТВА                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="advantages-section">
        <div className="container">
          <div className="advantages-grid">
            {/* 1 */}
            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-icon">✓</div>
                <div className="advantage-title">Без переживаний и&nbsp;стресса</div>
              </div>
              <div className="advantage-details">
                <p>Прораб всегда находится на объекте;</p>
                <p>Доставка строительных материалов;</p>
                <p>Установка мебели и техники.</p>
              </div>
            </div>

            {/* 2 */}
            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-icon">✓</div>
                <div className="advantage-title">Самое важное для&nbsp;нас:</div>
              </div>
              <div className="advantage-details">
                <p>Сделать работу максимально качественно;</p>
                <p>Сдать объект в&nbsp;установленный срок;</p>
                <p>Сохранить тёплые отношения с&nbsp;клиентом.</p>
              </div>
            </div>

            {/* 3 */}
            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-icon">✓</div>
                <div className="advantage-title">
                  Работаем в&nbsp;рамках вашего бюджета
                </div>
              </div>
              <div className="advantage-details">
                <p>Гарантия до&nbsp;60&nbsp;месяцев;</p>
                <p>Фиксированная цена;</p>
                <p>Заключаем официальный договор.</p>
              </div>
            </div>

            {/* 4 */}
            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-icon">✓</div>
                <div className="advantage-title">Высокое качество ремонта</div>
              </div>
              <div className="advantage-details">
                <p>Еженедельные фото-/видеоотчёты с&nbsp;чеками.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*                            КАЛЬКУЛЯТОР                           */}
      {/* ---------------------------------------------------------------- */}
      <section id="calculator">
        <CalculatorSection />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*                     ВАРИАНТЫ РЕМОНТА (ПЛИТКИ)                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="renovation-options-section">
        <div className="container">
          <h2 className="section-title">
            Предлагаем варианты ремонта на&nbsp;Ваш выбор
          </h2>
          <p className="section-description">
            Точную стоимость ремонта сможете узнать после замера или расчёта
            цены на&nbsp;сайте
          </p>

          <div className="options-row">
            {/* Плитка 1 */}
            <div className="option-card">
              <img
                src="/img/1.jpeg"
                alt="Ремонт «под ключ»"
                className="option-image"
              />

              <div className="option-overlay">
                <div className="overlay-body">
                  <div className="overlay-header">
                    <h3 className="option-title">Ремонт «под ключ»</h3>
                    <button className="order-button">Заказать</button>
                  </div>

                  <ul className="option-features">
                    <li>
                      — В&nbsp;среднем через два месяца Вас ждёт новоселье — всё остальное мы&nbsp;берём на&nbsp;себя
                    </li>
                    <li>— Доставка, расстановка мебели и&nbsp;техники</li>
                    <li>
                      — Отделка по&nbsp;дизайн-проекту или под Ваши пожелания
                    </li>
                    <li>
                      — Вы&nbsp;действительно только наслаждаетесь процессом — без&nbsp;стресса
                    </li>
                    <li>
                      — Всё для дома в&nbsp;одной компании — от&nbsp;розеток до&nbsp;декора
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Плитка 2 */}
            <div className="option-card">
              <img
                src="/img/2.jpeg"
                alt="Ремонт и дизайн-проект"
                className="option-image"
              />

              <div className="option-overlay">
                <div className="overlay-body">
                  <div className="overlay-header">
                    <h3 className="option-title">Ремонт и&nbsp;дизайн-проект</h3>
                    <button className="order-button">Заказать</button>
                  </div>

                  <ul className="option-features">
                    <li>
                      — Индивидуальный дизайн-проект с&nbsp;утверждением каждой детали
                    </li>
                    <li>
                      — Инженерные проекты (электрика, сантехника, коммуникации)
                    </li>
                    <li>
                      — Планировочные решения — помощь с&nbsp;зонированием пространства
                    </li>
                    <li>
                      — Подбор мебели и&nbsp;бытовой техники с&nbsp;доставкой
                    </li>
                    <li>— Все ремонтные работы под&nbsp;ключ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*                      СЕКЦИЯ ДИЗАЙН-ПРОЕКТА                       */}
      {/* ---------------------------------------------------------------- */}
      <div className="design-order-section">
        <div className="container">
          <div className="design-order-grid">
            <div className="design-order-content">
              <h2 className="design-title">Дизайн-проект — основа идеального ремонта</h2>
              <div className="design-features">
                <div className="design-feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8Z" stroke="#776556" strokeWidth="2"/>
                      <path d="M14 3V9H20" stroke="#776556" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Детальная проработка</h4>
                    <p>Каждый сантиметр пространства будет задействован с&nbsp;максимальной пользой</p>
                  </div>
                </div>
                <div className="design-feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#776556" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="#776556" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Экономия времени</h4>
                    <p>Сокращает сроки ремонта до&nbsp;30% благодаря заранее проработанным деталям</p>
                  </div>
                </div>
                <div className="design-feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" stroke="#776556" strokeWidth="2"/>
                      <path d="M15 9H9V15H15V9Z" stroke="#776556" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Бюджетный контроль</h4>
                    <p>Точный подсчет материалов и работ избавит от&nbsp;неожиданных расходов</p>
                  </div>
                </div>
              </div>

              <div className="design-package">
                <h3>В&nbsp;полный пакет дизайн-проекта входит:</h3>
                <ul className="design-package-list">
                  <li>Обмерный план и&nbsp;техническое задание</li>
                  <li>Планировочное решение с&nbsp;расстановкой мебели</li>
                  <li>3D-визуализация всех помещений</li>
                  <li>Полный комплект чертежей для строителей</li>
                  <li>Детальная спецификация отделочных материалов</li>
                  <li>Подбор мебели, освещения и&nbsp;сантехники</li>
                </ul>
              </div>
            </div>

            <div className="design-order-form-container">
              {/* Используем ConsultationForm с параметрами для заказа дизайн-проекта */}
              <ConsultationForm 
                title="Заказать дизайн-проект"
                subtitle="При заказе ремонта «под ключ», вы&nbsp;получаете дизайн-проект в&nbsp;подарок*"
                buttonText="Получить смету"
                withNote={true}
                noteText="* для помещений более 200 кв. м."
                formType="Заказ дизайн-проекта"
                className="design-order-form"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* ---------------------------------------------------------------- */}
      {/*                     СТОИМОСТЬ РЕМОНТА                            */}
      {/* ---------------------------------------------------------------- */}
      <div className="price-factors-section">
        <div className="container">
          <h2 className="section-title">Стоимость ремонта зависит от следующих параметров:</h2>

          <div className="factors-grid">
            <div className="factor-item">
              <div className="factor-icon">✓</div>
              <p className="factor-text">Стоимость строительных материалов и сопутствующих товаров</p>
            </div>
            
            <div className="factor-item">
              <div className="factor-icon">✓</div>
              <p className="factor-text">Площадь объекта, которая подлежит отделке</p>
            </div>
            
            <div className="factor-item">
              <div className="factor-icon">✓</div>
              <p className="factor-text">Объем и&nbsp;сложность запланированных работ</p>
            </div>
            
            <div className="factor-item">
              <div className="factor-icon">✓</div>
              <p className="factor-text">Временные затраты, требуемые на&nbsp;ремонт квартир</p>
            </div>
          </div>
        </div>
      </div>

 

      {/* ---------------------------------------------------------------- */}
      {/*                 ИНФОРМАЦИЯ О РЕМОНТЕ КВАРТИР                     */}
      {/* ---------------------------------------------------------------- */}
      <div className="renovation-info-section">
        <div className="container">
          <h2 className="section-title">Ремонт квартир «под ключ» в&nbsp;Москве и&nbsp;Московской области</h2>

          <div className="info-text">
            <p>
              Наша компания предлагает услуги по&nbsp;расчету стоимости и&nbsp;проведению ремонта. 
              Услуга «Ремонт квартиры под ключ» позволяет клиентам избавиться от&nbsp;множества проблем, 
              связанных с&nbsp;обустройством жилья, и&nbsp;получить наилучший результат. Благодаря этой 
              услуге создается уютное и&nbsp;комфортное жилое пространство. Но&nbsp;некоторые люди не&nbsp;всегда 
              понимают, что представляет собой данная услуга, какие у&nbsp;нее преимущества, как выбрать 
              подходящего подрядчика и&nbsp;избежать разочарований.
            </p>

            <h3>Что в&nbsp;себя включает ремонт квартиры «под ключ»?</h3>

            <p>
              Ремонт квартиры «под ключ» включает в&nbsp;себя полный комплекс работ, который проводится 
              независимо от&nbsp;текущего состояния помещения. Владелец недвижимости может не&nbsp;иметь 
              конкретных предпочтений по&nbsp;дизайну интерьера и&nbsp;не&nbsp;разбираться в&nbsp;особенностях 
              различных строительных материалов.
            </p>

            <h3>Подрядчик обеспечивает:</h3>

            <ul className="circle-numbered-list">
  <li>
    <span className="circle-number">1</span>
    <span className="list-text">Выезд прораба для ознакомления с&nbsp;объектом;</span>
  </li>
  <li>
    <span className="circle-number">2</span>
    <span className="list-text">Разработку дизайн-проекта;</span>
  </li>
  <li>
    <span className="circle-number">3</span>
    <span className="list-text">Согласование документов в&nbsp;инстанциях;</span>
  </li>
  <li>
    <span className="circle-number">4</span>
    <span className="list-text">Подбор стройматериалов и&nbsp;составление сметы;</span>
  </li>
  <li>
    <span className="circle-number">5</span>
    <span className="list-text">Проведение ремонтных работ в&nbsp;полном объеме;</span>
  </li>
  <li>
    <span className="circle-number">6</span>
    <span className="list-text">Уборку строительного мусора;</span>
  </li>
  <li>
    <span className="circle-number">7</span>
    <span className="list-text">Сдачу объекта.</span>
  </li>
</ul>

            <p>
              Клиенту не&nbsp;нужно беспокоиться ни&nbsp;о&nbsp;чем, кроме утверждения проекта и&nbsp;сметы. 
              При реализации эксклюзивного дизайнерского решения осуществляется авторский контроль.
            </p>

            <p>
              Виды ремонтных работ зависят от&nbsp;дизайн-проекта и&nbsp;исходного состояния квартиры. 
              В&nbsp;новостройках обычно требуется только финальная отделка без существенных изменений. 
              Во&nbsp;вторичном жилье часто возникает необходимость в&nbsp;перепланировке, а&nbsp;иногда 
              требуется и&nbsp;капитальный ремонт с&nbsp;заменой основных элементов (окна, двери, перегородки, 
              электропроводка, сантехника и&nbsp;т.&nbsp;д.). Стоимость работ, конечно&nbsp;же, будет разной.
            </p>

            <h3>Какие бывают виды ремонта квартир</h3>

            <p>
              Ремонтные работы в&nbsp;квартире могут отличаться по&nbsp;объему и&nbsp;масштабу. Они делятся 
              на&nbsp;следующие виды:
            </p>

            <ul>
              <li>
                — Черновая отделка, включающая выравнивание поверхностей, разводку труб, подключение 
                электропроводки и&nbsp;коммуникаций, установку сантехники.
              </li>
              <li>
                — Капитальный ремонт, включающий демонтаж и&nbsp;замену конструктивных элементов 
                (оконные и&nbsp;дверные блоки, перегородки, сантехника).
              </li>
              <li>
                — Косметический (финишный или чистовой) ремонт, включающий отделку поверхностей 
                финишным покрытием (натяжной потолок, обои, ламинат и&nbsp;т.&nbsp;д.), установку розеток, 
                осветительных элементов, встроенной бытовой техники.
              </li>
            </ul>

            <p>
              Обязательный набор работ включает в&nbsp;себя отделку стен, пола, потолков. При капитальном 
              ремонте демонтируются старые покрытия (ламинат, линолеум, гипсокартон, штукатурка) до&nbsp;основания, 
              поверхности с&nbsp;большими перепадами (кирпичные стены, бетонные полы и&nbsp;т.&nbsp;д.) выравниваются, 
              грунтуются, тщательно подготавливаются к&nbsp;нанесению финишного покрытия.
            </p>

            <p>
              Возможно также замена или реставрация дверей и&nbsp;окон.
            </p>

            <p>
              В&nbsp;новостройках обычно уже имеется черновой ремонт, проведена электропроводка и&nbsp;установлена 
              сантехника. Остается только провести чистовой ремонт.
            </p>

            <h3>От&nbsp;чего зависит стоимость ремонта «под ключ»</h3>

            <p>
              Основным фактором, влияющим на&nbsp;формирование цены, является сложность работ. Например, 
              финишная шпаклевка стен перед нанесением обоев будет стоить меньше, чем отделка декоративным 
              камнем или поклейка шинкрустовых обоев. С&nbsp;другой стороны, натяжные фотостены позволяют 
              сэкономить на&nbsp;шпаклевке и&nbsp;грунтовке. Обычно стоимость услуг рассчитывается по&nbsp;формуле: 
              20% от&nbsp;стоимости материалов плюс оплата подготовительных работ. Чем дороже материалы, тем 
              выше стоимость услуг. Хорошо, когда у&nbsp;подрядчика есть стабильный прайс-лист и&nbsp;прозрачность 
              в&nbsp;ценообразовании. Это предотвращает неожиданное увеличение стоимости.
            </p>

            <p>
              Второй важный фактор — скорость выполнения работ. Если требуется быстро и&nbsp;качественно 
              выполнить ремонт, это может увеличить общую стоимость на&nbsp;50%.
            </p>

            <p>
              Третий фактор, влияющий на&nbsp;ценообразование, — это профессионализм и&nbsp;репутация мастеров.
            </p>

            <p>
              Начинающие мастера могут выполнять работу на&nbsp;высоком уровне, но&nbsp;их&nbsp;услуги будут стоить 
              дешевле. Они все еще набираются опыта, поэтому ошибки возможны. Выбор между везением и&nbsp;опытом 
              профессионалов остается за&nbsp;вами.
            </p>

            <h3>Как правильно выбрать подрядчика</h3>

            <p>
              Для успешного ремонта квартиры «под ключ» важно обратиться к&nbsp;профессионалам, которые умеют 
              работать с&nbsp;выбранными вами материалами.
            </p>

            <p>
              Например, узкоспециализированный штукатур-маляр не&nbsp;сможет установить натяжной потолок или 
              заменить двери/окна. Даже с&nbsp;современными отделочными материалами работают не&nbsp;все специалисты. 
              Поэтому рекомендуется заранее уточнить навыки специалистов.
            </p>

            <p>
              Подписание договора поможет зафиксировать гарантии на&nbsp;юридическом уровне. Важно обсудить все 
              детали в&nbsp;договоре, включая стоимость работ и&nbsp;сроки их&nbsp;выполнения.
            </p>

            <h3>На&nbsp;что обратить внимание при выборе подрядчика?</h3>

            <p>
              Для выполнения широкого спектра работ рекомендуется нанять специализированную бригаду,
              в&nbsp;которой каждый мастер имеет свою узкую специализацию. Универсальные мастера также могут
              качественно и&nbsp;быстро выполнять работу, но&nbsp;следует тщательно проверить их&nbsp;навыки.
            </p>

            <p>
              Обратите внимание на&nbsp;оборудование и&nbsp;техническую базу подрядчика. Если они используют
              современные технологии, то&nbsp;результат обычно превосходит ожидания. Репутация подрядчика также
              важна. Изучите объекты, на&nbsp;которых уже выполнены работы, похожие на&nbsp;ваш проект.
            </p>

            <p>
              Посетите готовые объекты и&nbsp;узнайте у&nbsp;клиентов, были&nbsp;ли соблюдены условия договора (сроки, цены
              и&nbsp;т.&nbsp;д.), насколько комфортно было общаться с&nbsp;мастерами и&nbsp;прорабом.
            </p>

            <h3>Почему стоит заказать ремонт «под ключ» в&nbsp;нашей компании?</h3>

            <p>
              Мы&nbsp;создали для вас наш веб-сайт, где вы&nbsp;можете найти примеры наших работ, отзывы клиентов
              и&nbsp;информацию о&nbsp;ценах. Здесь вы&nbsp;можете ознакомиться со&nbsp;всеми необходимыми данными, спектром
              предоставляемых услуг, уровнем профессионализма наших мастеров. Это очень удобно для
              клиентов. Вы&nbsp;можете сразу оценить наши возможности, договориться о&nbsp;сроках и&nbsp;ценах, узнать
              о&nbsp;квалификации специалистов.
            </p>

            <p>
              Заказать ремонт «под ключ» на&nbsp;нашем сайте очень просто и&nbsp;выгодно. Выберите услугу,
              соответствующую вашим потребностям и&nbsp;бюджету. Это абсолютно бесплатно, быстро и&nbsp;безопасно.
              Наши консультанты всегда готовы помочь, если у&nbsp;вас возникнут какие-либо трудности.
            </p>

            <p>
              Мы&nbsp;рассмотрели основные аспекты, важные для тех, кто хочет заказать ремонт квартиры «под ключ»:
              что входит в&nbsp;услугу, виды ремонта, стоимость работ и&nbsp;как выбрать лучшего подрядчика. Если у&nbsp;вас
              остались вопросы — обращайтесь!
            </p>
          </div>
        </div>
      </div>

{/* ---------------------------------------------------------------- */}
      {/*                     ПОДПИСКА НА СОЦСЕТИ                          */}
      {/* ---------------------------------------------------------------- */}
      <div className="social-subscribe-section">
        <div className="container">
          <h2 className="section-title">Подпишитесь на&nbsp;наши социальные сети</h2>

          <p className="social-text">
            Следите за&nbsp;нашими проектами в&nbsp;онлайн-режиме: истории с&nbsp;клиентами, готовые
            дизайн-проекты и&nbsp;объекты «под ключ», советы и&nbsp;разборы ошибок!
          </p>

          <div className="social-icons">
            <a href="#" className="social-icon instagram" aria-label="Instagram"></a>
            <a href="#" className="social-icon youtube" aria-label="YouTube"></a>
            <a href="#" className="social-icon telegram" aria-label="Telegram"></a>
            <a href="#" className="social-icon vk" aria-label="ВКонтакте"></a>
            <a href="#" className="social-icon rutube" aria-label="RuTube"></a>
            <a href="#" className="social-icon pinterest" aria-label="Pinterest"></a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*                            ФУТЕР                                 */}
      {/* ---------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default RenovationApartmentPage;