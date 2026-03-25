export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ТВОРОЖНЯ</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать стол</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ВСЁ ИЗ
              <br />
              ТВОРОГА, <span>С ДУШОЙ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Уютное кафе с домашней выпечкой и десертами из натурального творога. Рецепты, проверенные временем — вкус, который остаётся в памяти.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Забронировать стол
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАЯ
              <br />
              ВЫПЕЧКА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ДОМАШНИЙ ВКУС
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ИЗ ТВОРОГА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ВЫПЕЧКА ИЗ НАТУРАЛЬНОГО ТВОРОГА * ДОМАШНИЕ ДЕСЕРТЫ * УЮТНАЯ АТМОСФЕРА * СРЕДНИЙ ЧЕК 750 ₽ * ВСЕГДА СВЕЖЕЕ *
            ВЫПЕЧКА ИЗ НАТУРАЛЬНОГО ТВОРОГА * ДОМАШНИЕ ДЕСЕРТЫ * УЮТНАЯ АТМОСФЕРА * СРЕДНИЙ ЧЕК 750 ₽ * ВСЕГДА СВЕЖЕЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ЛЮБИМОЕ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/587b514d-c580-41f6-b968-0ec02123b326/files/666b3c30-d660-4d8b-9173-52dca9c91e5d.jpg"
                alt="Творожный чизкейк"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Чизкейк классический</h3>
                  <span className="price">390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежный творожный чизкейк на песочном корже, с ягодным соусом. Без выпечки — тает во рту.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Любимое
              </span>
              <img
                src="https://cdn.poehali.dev/projects/587b514d-c580-41f6-b968-0ec02123b326/files/3df8e44f-5717-4831-82b5-625e53c068f6.jpg"
                alt="Сырники"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Сырники со сметаной</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Пышные сырники из домашнего творога, порция 3 шт. со свежими ягодами и сметаной.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://cdn.poehali.dev/projects/587b514d-c580-41f6-b968-0ec02123b326/files/1011c3d0-d7e9-42b7-aebf-b1146de44ae4.jpg"
                alt="Творожная выпечка"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Слойки с творогом</h3>
                  <span className="price">180 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Хрустящее слоёное тесто с начинкой из ванильного творога. Выпекаем каждые 2 часа.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">УЮТНО, КАК ДОМА.</h2>
            <p className="vibe-text">
              Всего 20 мест — и каждое особенное. Мы не гонимся за потоком гостей, мы создаём атмосферу, в которую хочется возвращаться. Свежая выпечка по утрам, тихая музыка и творог от местных фермеров.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нашем кафе
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            АТМОСФЕРА КАФЕ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/587b514d-c580-41f6-b968-0ec02123b326/files/61202a8f-f95f-4eea-8b92-e02312258869.jpg"
                alt="Интерьер кафе"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/587b514d-c580-41f6-b968-0ec02123b326/files/666b3c30-d660-4d8b-9173-52dca9c91e5d.jpg"
                alt="Чизкейк"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/587b514d-c580-41f6-b968-0ec02123b326/files/1011c3d0-d7e9-42b7-aebf-b1146de44ae4.jpg"
                alt="Выпечка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/587b514d-c580-41f6-b968-0ec02123b326/files/3df8e44f-5717-4831-82b5-625e53c068f6.jpg"
                alt="Сырники"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ТВОРОЖНЯ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Маленькое кафе с большим вкусом. Домашняя выпечка и десерты из натурального творога каждый день.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Галерея
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 08:00 – 20:00</li>
            <li>Сб–Вс: 09:00 – 21:00</li>
            <li style={{ marginTop: "8px", color: "var(--primary)", fontWeight: 700 }}>Всегда свежая выпечка</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (000) 000-00-00</li>
            <li>кафе@пример.рф</li>
            <li style={{ marginTop: "8px" }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                ВКонтакте
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}