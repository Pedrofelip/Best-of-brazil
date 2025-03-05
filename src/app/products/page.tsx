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
import CarouselFilter from "../components/carousel_customer_filter/CarouselFilter";
import ScrollButton from "../components/scroll_button/ScrollButton";

export default function Products() {
  const { cartItems, products, randomProducts, addProductToCart } =
    useContext(CartContext);

  const OPTIONS_CP: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };

  const OPTIONS: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };

  return (
    <>
    <ScrollButton></ScrollButton>
      <Header
      ></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.filter_section}>
            <div>
              <h2>Filtrar por empresa</h2>
              <CarouselFilter
                slides={products}
                options={OPTIONS}
              ></CarouselFilter>
            </div>
          </section>
          <section className={styles.first_section}>
            <section className={styles.section_products_ascent}>
              <div className={styles.grid_section_products}>
                <h3></h3>
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
                <CarouselProducts options={OPTIONS_CP}></CarouselProducts>
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
