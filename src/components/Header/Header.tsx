"use client"

import { useEffect, useState } from "react"
import "./Header.css"

const Header = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = {
      hero: document.getElementById("hero"),
      courses: document.getElementById("courses"),
      "learning-process": document.getElementById("learning-process"),
      prices: document.getElementById("prices"),
      footer: document.getElementById("footer"),
      "data-form": document.getElementById("data-form"),
    }

    const handleScroll = () => {
      let currentSection = null

      for (const [key, section] of Object.entries(sections)) {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 100) {
            currentSection = key
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : ""
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ""
  }

  const handleTrialClick = () => {
    const dataFormSection = document.getElementById("data-form")
    if (dataFormSection) {
      dataFormSection.scrollIntoView({ behavior: "smooth" })
    }
    if (isMenuOpen) {
      closeMenu()
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__content">
            <a href="/" className="header__logo">
              <div className="logo__inner">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    // srcSet="https://s3-alpha-sig.figma.com/img/653d/4144/fe99844aeb4fa109ba5ef92dc959adae?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOt5PxEHCx7iCXz2eWhVAXFyQyw9r4O-Ic2CrnuQLGYeq92uF0gfeLBjVg7b4KLMTXS1DwcJJJoPlCw164XNQzuCJVUECbtn-CKaNHC~04kXF04sXpWlks4jYH0PyU54g1hXLH4Wkkz~O6fjEio4SAd6x8ahMqwsMGS3QXn6cHpOOBT-4TmFSdDsf3E6XFow0-av5N6ZOq5ZIroyCoT8R-frgX~dwf~s-8ruR3k6Yv3Nw~0e-Rscm~KYbJPkHvAw9~jzqnW6j8cmc6b8id9AYZSuoqG~1nq-Lk4quY~g8WcIMUp6M78nIWi2NjmGFdqCGqV65Se5ikcBkHbpnYCHDA__"
                    srcSet="http://localhost:9000/mindset/mindsetLogoBig.png"
                  />
                  <img
                    src="http://localhost:9000/mindset/mindsetLogoSmall.png"
                    // src="https://s3-alpha-sig.figma.com/img/9800/6fb1/c7a4b75407f527eca6419704da5f0f22?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=blMap07UavwtM~BM~DFYTnhl3qJHQUfBjh-uAUd0WGA51qNoCb~kK435HQ0zXqoHU6759xETNaqApmUqUwViJhM42JUyvrUjs39oE2NrxAou7xHZVwMaio0LPsg5k1Q5uF-RLafdVl~xc1ddq0fbFvfN5tb24eUyMUingupq1Qxv2NL~ogvyeWy1nh6f75Drq6afcWq3-Vl7pS1jQXVe6j~1FBAITPdhKekBjCYpZNXNUrVZuv1RpcIrkOMrJiN8GRige96BU5-roWnPIhZaeyLC1sQB1V-~Dp7~GSmDCzx1Ne5QW9ioOuoZmL-eu1-dBBkOO7Ufdq3yIyS1lcU3Tw__"
                    alt="Logo"
                  />
                </picture>
              </div>
            </a>

            <nav className="header__nav">
              <a href="#courses" className={`nav__link ${activeSection === "courses" ? "active" : ""}`}>
                Курсы
              </a>
              <a
                href="#learning-process"
                className={`nav__link ${activeSection === "learning-process" ? "active" : ""}`}
              >
                Процесс обучения
              </a>
              <a href="#prices" className={`nav__link ${activeSection === "prices" ? "active" : ""}`}>
                Услуги и цены
              </a>
              <a href="#data-form" className={`nav__link ${activeSection === "data-form" ? "active" : ""}`}>
                Заявки
              </a>
              <a href="#footer" className={`nav__link ${activeSection === "footer" ? "active" : ""}`}>
                Контакты
              </a>
            </nav>

            <button className="header__cta" onClick={handleTrialClick}>
              ПРОБНОЕ ЗАНЯТИЕ
            </button>
            <button className="header__menu-button" onClick={toggleMenu}>
              <span className={`header__menu-icon ${isMenuOpen ? "open" : ""}`}></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
        <button className="mobile-menu__close" onClick={closeMenu}>
          ×
        </button>
        <div className="mobile-menu__content">
          <div className="mobile-menu__logo">
            <img
              // src="https://s3-alpha-sig.figma.com/img/653d/4144/fe99844aeb4fa109ba5ef92dc959adae?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOt5PxEHCx7iCXz2eWhVAXFyQyw9r4O-Ic2CrnuQLGYeq92uF0gfeLBjVg7b4KLMTXS1DwcJJJoPlCw164XNQzuCJVUECbtn-CKaNHC~04kXF04sXpWlks4jYH0PyU54g1hXLH4Wkkz~O6fjEio4SAd6x8ahMqwsMGS3QXn6cHpOOBT-4TmFSdDsf3E6XFow0-av5N6ZOq5ZIroyCoT8R-frgX~dwf~s-8ruR3k6Yv3Nw~0e-Rscm~KYbJPkHvAw9~jzqnW6j8cmc6b8id9AYZSuoqG~1nq-Lk4quY~g8WcIMUp6M78nIWi2NjmGFdqCGqV65Se5ikcBkHbpnYCHDA__"
             src="http://localhost:9000/mindset/mindsetLogoBig.png"
              alt="Mindset Logo"
            />
          </div>
          <nav className="mobile-menu__nav">
            <a href="#courses" onClick={closeMenu}>
              Курсы
            </a>
            <a href="#learning-process" onClick={closeMenu}>
              Процесс обучения
            </a>
            <a href="#prices" onClick={closeMenu}>
              Услуги и цены
            </a>
            <a href="#data-form" onClick={closeMenu}>
              Заявки
            </a>
            <a href="#footer" onClick={closeMenu}>
              Контакты
            </a>
          </nav>
          <button className="mobile-menu__cta" onClick={handleTrialClick}>
            ПРОБНОЕ ЗАНЯТИЕ
          </button>
          <div className="mobile-menu__contacts">
            <h3>Связаться с нами:</h3>
            <a href="mailto:mindsetstudy@yandex.ru">mindsetstudy@yandex.ru</a>
            <a href="tel:+78005553535">+7 (800) 555-35-35</a>
          </div>
          <div className="mobile-menu__social">
            <h3>Ссылки на наши соцсети:</h3>
            <div className="mobile-menu__social-links">
              <a href="#" className="mobile-menu__social-link"></a>
              <a href="#" className="mobile-menu__social-link"></a>
              <a href="#" className="mobile-menu__social-link"></a>
              <a href="#" className="mobile-menu__social-link"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

