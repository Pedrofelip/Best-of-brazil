"use client"

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import container from "../page.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import CartContext from "@/data/contexts/CartContext";

export default function Partners() {

  const {cartItems, products, randomProducts, addProductToCart} = useContext(CartContext)
  
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Grapes",
  ]);

  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (query: any) => {
    if (!query) {
      setFilteredItems(items); // Se não houver pesquisa, mostra todos os itens
      return;
    }
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const logo_partners = [
    {
        id: 1,
        src: "https://logospng.org/download/starbucks/logo-starbucks-256.png",
        alt: "imagem carrousel",
      },
      {
        id: 2,
        src: "https://static.vecteezy.com/system/resources/previews/019/909/686/non_2x/burger-king-transparent-burger-king-free-free-png.png",
        alt: "imagem carrousel",
      },
      {
        id: 3,
        src: "https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png",
        alt: "imagem carrousel",
      },
      {
        id: 4,
        src: "https://logos-world.net/wp-content/uploads/2023/01/Subway-Logo-2002.png",
        alt: "imagem carrousel",
      },
      {
        id: 5,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Pringles_logo.png/797px-Pringles_logo.png",
        alt: "imagem carrousel",
      },
      {
        id: 6,
        src: "https://seeklogo.com/images/W/wendys-logo-75361EA3A8-seeklogo.com.png",
        alt: "imagem carrousel",
      },
      {
        id: 10,
        src: "https://logo.com/image-cdn/images/kts928pd/production/4513fd3a32f247c61ee3a487ff6100dfa154f83a-700x394.png?w=1920&q=72&fm=webp",
        alt: "imagem carrousel",
      },
      {
        id: 11,
        src: "https://1000marcas.net/wp-content/uploads/2022/07/Logo-KFC.png",
        alt: "imagem carrousel",
      },
      {
        id: 12,
        src: "https://i.pinimg.com/originals/ea/92/cc/ea92cc0b141df13a93095275323e1b50.jpg",
        alt: "imagem carrousel",
      },
      {
        id: 19,
        src: "https://logospng.org/download/starbucks/logo-starbucks-256.png",
        alt: "imagem carrousel",
      },
      {
        id: 29,
        src: "https://static.vecteezy.com/system/resources/previews/019/909/686/non_2x/burger-king-transparent-burger-king-free-free-png.png",
        alt: "imagem carrousel",
      },
      {
        id: 39,
        src: "https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png",
        alt: "imagem carrousel",
      },
  ]

  return (
    <>
      <Header data={items} onSearch={handleSearch} cartItems={cartItems}></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
            <section className={styles.first_section}>
                <div className={styles.txt_first_section}>
                    <h3>Lojas & Parceiros</h3>
                    <h1>Contrary to popular belief, Lorem Ipsum is not simply</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <Link href="#partners" className={styles.btn_first_section}>Conheça nossos clientes</Link>
                </div>
                <div className={styles.img_first_section}>
                    <div className={styles.img_left}>
                        <div>

                        </div>
                    </div>
                    <div className={styles.img_right}>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.second_section} id="partners">
                <h2>Empresas que trabalhamos</h2>

                <div className={styles.grid_partners}>
                    {logo_partners.map((item) => (
                        <div className={styles.logo_partners}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
