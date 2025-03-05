import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import container from "../../page.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={`${styles.top_part} ${container.container_wrap}`}>
        <section className={styles.grid_first_section}>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <div className={styles.txt_first_section}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolor debitis, distinctio accusantium fuga dolores voluptatibus nesciunt rerum porro voluptate?
            </p>
            <Link href="/contact" className={styles.btn_footer}>
              Entre em contato <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
        <section className={styles.second_section}>
          <Image
            src="/logo-best-of-brazil.png"
            alt="Logo Best of Brazil"
            width={90}
            height={90}
            priority
          />
          <div className={styles.social_links}>
            <nav className={styles.grid_styles_links}>
              <a href="" target="_blank">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="" target="_blank">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="" target="_blank">
                <i className="fa-brands fa-square-whatsapp"></i>
              </a>
              <a href="" target="_blank">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </nav>
          </div>
        </section>
        <section className={styles.grid_third_section}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugiat
            minima asperiores, quidem laudantium voluptatem! Excepturi molestiae
            quo consectetur nihil cupiditate, nisi impedit eum unde?
          </p>
          <div className={styles.txt_location}>
            <h3>Localização</h3>
            <p>Rua Bamboré, 151 - Ipiranga <br></br> São Paulo, SP <br></br> 04278-060</p>
          </div>
          <div className={styles.txt_links}>
            <h3>Links Uteis</h3>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/products" className={styles.link}>Produtos</Link>
            <Link href="/about" className={styles.link}>Sobre</Link>
            <Link href="/contact" className={styles.link}>Contato</Link>
            <Link href="/location" className={styles.link}>Localização</Link>
            <Link href="/partners" className={styles.link}>Lojas & Parceiros</Link>
          </div>
        </section>
      </section>
      <section className={styles.bottom_part}>
        <div className={`${styles.grid_bottom_part} ${container.container_wrap}`}>
          <p>© Copyright 2024 - 2024 | Todos os direitos reservados</p>
          <Image
            src="/logo-best-of-brazil.png"
            alt="Logo Best of Brazil"
            width={90}
            height={90}
            className={styles.image_bottom_part}
            priority
          />
          <p><a href="https://www.linkedin.com/in/pedro-felipe-barros-da-silva/" target="blank">Desenvolvido por Pedro Felipe👨🏾‍💻</a></p>
        </div>
      </section>
    </footer>
  );
}
