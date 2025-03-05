"use client";

import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import container from "../../page.module.css";
import CartSidebar from "../cart_modal/cart_modal";
import CartContext from "@/data/contexts/CartContext";

//criando o componente cabecalho e informando que qunado ele for usado precisa ser passado dois parametros
export default function Header({}) {
  const { cartItems, products, isCartOpen, openCart, closeCart } =
    useContext(CartContext);

  //criando o estado que vai manibular o valor que tem na barra de pesquisa
  const [query, setQuery] = useState("");
  //estado que contem a lista filtrada com base na pesquisa
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // Estado para controlar se o input está focado

  //função responsavel por filtrar os itens e jogar nos estados
  const handleSearch = (query: any) => {
    if (!query) {
      setFilteredItems(products); // Se não houver pesquisa, mostra todos os itens
      return;
    }
    setFilteredItems(
      products.filter((products: any) =>
        products.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  //criando a função para capturar o valor do input
  const handleChange = (event: any) => {
    const value = event.target.value;
    setQuery(value);
    handleSearch(value);
  };

  // Função para tratar o foco no input
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Função para tratar a perda de foco do input
  const handleBlur = () => {
    // Usando setTimeout para atrasar a remoção de foco
  setTimeout(() => {
    setIsFocused(false);
  }, 100); // Espera 100ms antes de remover o foco
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (query.length > 0) {
        // Aqui você pode navegar para a página do produto ou fazer qualquer ação
        window.location.href = `/searchProducts/${query}`;  // Exemplo de redirecionamento
      }
    }
  };

  console.log(filteredItems);
  console.log(query);

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
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className={styles.search_input}
          />
          <hr className={styles.search_hr} />
          <i className={`${"fas fa-search"} ${styles.search_icon}`}></i>
        </div>

        <button onClick={openCart} className={styles.shop_btn}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cartItems.length}</span>
        </button>

        {!isFocused ? (
          <></>
        ) : (
          <>
            <div className={styles.result_serch}>
              
              {query === '' ? (<></>) : (
                <p>filtrar por:</p>
              )}
              {query === '' ? (<></>) : (
                <Link href={`/searchProducts/${query}`} className={styles.link_result}>
                <span>
                  <i className={`${"fas fa-search"}`}></i>
                  {query}
                </span>
              </Link>
              )}
              {filteredItems.length <= 0  ? (<></>) : (
                <p>produtos encontrados</p>
              )}
              {filteredItems.map((item) => (
                <Link href={`/product/${item.id}`} key={item.id} className={styles.link_result}>
                  <span>
                    <i className={`${"fas fa-search"}`}></i>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}

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
