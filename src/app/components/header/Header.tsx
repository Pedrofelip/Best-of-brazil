"use client";

import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import container from "../../page.module.css";
import CartSidebar from "../cart_modal/cart_modal";
import CartContext from "@/data/contexts/CartContext";

//criando o componente cabecalho e informando que qunado ele for usado precisa ser passado dois parametros
export default function Header({ data, onSearch, cartItems }) {
  // const {cartItems, products, randomProducts, addProductToCart} = useContext(CartContext)

  //criando o estado que vai manibular o valor que tem na barra de pesquisa
  const [query, setQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  //criando a função para capturar o valor do input
  const handleChange = (event: any) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Passa o valor da pesquisa para o componente pai
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.grid_header_top} ${container.container_wrap}`}>
        <Link href="/">
          <Image
            src="/logo-best-of-brazil.png"
            alt="Logo Best of Brazil"
            width={70}
            height={70}
            priority
          />
        </Link>

        <div className={styles.search_bar}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={query}
            //chamando a função sempre que o valor alterar
            onChange={handleChange}
            className={styles.search_input}
          />
          <hr className={styles.search_hr} />
          <i className={`${"fas fa-search"} ${styles.search_icon}`}></i>
        </div>

        <button onClick={openCart} className={styles.shop_btn}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cartItems.length}</span>
        </button>

        {/* {cartItems.length === 0 ? (<span></span>) : (<span>{cartItems.length}</span>)} */}

        <CartSidebar
          isOpen={isCartOpen}
          closeSidebar={closeCart}
          cartItems={cartItems}
        />
      </div>
      <div
        className={`${styles.grid_header_bottom} ${container.container_wrap}`}
      >
        <nav className={styles.nav_bar}>
          <Link href="/" className={styles.link}>
            home
          </Link>
          <Link href="/products" className={styles.link}>
            produtos
          </Link>
          <Link href="/about" className={styles.link}>
            sobre
          </Link>
          <Link href="/contact" className={styles.link}>
            contato
          </Link>
          <Link href="/location" className={styles.link}>
            localização
          </Link>
          <Link href="/partners" className={styles.link}>
            lojas & parceiros
          </Link>
        </nav>
      </div>
    </header>
  );
}
