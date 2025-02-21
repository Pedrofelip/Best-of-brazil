"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import container from "../page.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import Product from "../components/product/Product";
import CarouselProducts from "../components/carousel_products/CarouselProducts";
import { EmblaOptionsType } from "embla-carousel";
import CartContext from "@/data/contexts/CartContext";

export default function Products() {

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

  function getRandomIndexes(array, n) {
    const indexes = new Set();
    while (indexes.size < n) {
      const randomIndex = Math.floor(Math.random() * array.length);
      indexes.add(randomIndex);
    }
    return [...indexes];
  }

  const OPTIONS_CP: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };

  return (
    <>
      <Header data={items} onSearch={handleSearch} cartItems={cartItems}></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.first_section}>
            <section className={styles.section_products_ascent}>
              <div className={styles.grid_section_products}>
                <h3>Destaque</h3>
                <div className={styles.grid_our_products}>
                  {products.slice(0, 1).map((item) => (
                    <Product
                    key={item.id}
                    product={item}
                    addToCart={addProductToCart}
                    ></Product>
                  ))}
                </div>
              </div>
            </section>
            <section className={styles.section_products_ascent_carousel}>
              <div className={styles.grid_section_products}>
                <h3></h3>
                <CarouselProducts
                  options={OPTIONS_CP}
                ></CarouselProducts>
              </div>
            </section>
          </section>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Nossos produtos</h3>
              <div className={styles.grid_our_products}>
                {randomProducts.slice(0, 4).map((item) => (
                  <Product
                  key={item.id}
                  product={item}
                  addToCart={addProductToCart}
                  ></Product>
                ))}
              </div>
            </div>
          </section>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Nossos produtos</h3>
              <div className={styles.grid_our_products}>
                {products.map((item) => (
                  <Product
                  key={item.id}
                  product={item}
                  addToCart={addProductToCart}
                  ></Product>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
