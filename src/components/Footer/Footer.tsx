"use client"
import type { FC } from "react"
import "./Footer.css"

interface FooterProps {
    id?: string;
  }
  
  const Footer: FC<FooterProps> = ({ id }) => {
  return (
    <footer className="footer" id={id}>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <img
              src="https://s3-alpha-sig.figma.com/img/653d/4144/fe99844aeb4fa109ba5ef92dc959adae?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOt5PxEHCx7iCXz2eWhVAXFyQyw9r4O-Ic2CrnuQLGYeq92uF0gfeLBjVg7b4KLMTXS1DwcJJJoPlCw164XNQzuCJVUECbtn-CKaNHC~04kXF04sXpWlks4jYH0PyU54g1hXLH4Wkkz~O6fjEio4SAd6x8ahMqwsMGS3QXn6cHpOOBT-4TmFSdDsf3E6XFow0-av5N6ZOq5ZIroyCoT8R-frgX~dwf~s-8ruR3k6Yv3Nw~0e-Rscm~KYbJPkHvAw9~jzqnW6j8cmc6b8id9AYZSuoqG~1nq-Lk4quY~g8WcIMUp6M78nIWi2NjmGFdqCGqV65Se5ikcBkHbpnYCHDA__"
              alt="Mindset Logo"
              className="footer__logo-image"
            />
          </div>

          <div className="footer__contacts">
            <h3 className="footer__subtitle">Связаться с нами:</h3>
            <div className="footer__social-links"></div>
            <a href="mailto:mindsetstudy@yandex.ru" className="footer__link">
              mindsetstudy@yandex.ru
            </a>
            <a href="tel:+78005553535" className="footer__link">
              +7 (800) 555-35-35
            </a>
          </div>

          <div className="footer__social">
            <h3 className="footer__subtitle">Ссылки на наши соцсети:</h3>
            <div className="footer__social-links">
              <a href="#" className="footer__social-link"></a>
              <a href="#" className="footer__social-link"></a>
              <a href="#" className="footer__social-link"></a>
              <a href="#" className="footer__social-link"></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
          <p className="footer__legal-text">ИНН 772841744929</p>
            
            <a href="#" className="footer__legal-link">
              Политика конфиденциальности
            </a>
            <p className="footer__legal-text">ОГРНИП 324774600735749</p>
            <a href="#" className="footer__legal-link">
            Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

