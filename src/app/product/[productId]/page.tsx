"use client";

import { useRouter } from "next/router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./page.module.css";
import container from "../../page.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import ProductCard from "@/app/components/product/Product";

import CarouselProduct from '../../components/carousel_product/CarouselProduct'
import { EmblaOptionsType } from 'embla-carousel'
import CartContext from "@/data/contexts/CartContext";
import ScrollButton from "@/app/components/scroll_button/ScrollButton";

export default function Product({ params }) {

  const {cartItems, products, randomProducts, addProductToCart} = useContext(CartContext)

  // Função que separa um objeto com base no ID fornecido
  function filterById(id: any) {
    const produtoEncontrado = products.find((produto) => produto.id == id);
    return produtoEncontrado || "Produto não encontrado"; // Caso não encontre, retorna uma mensagem
  }

  const product = filterById(params.productId);

  const OPTIONS: EmblaOptionsType = {};

  return (
    <>
    <ScrollButton></ScrollButton>
      <Header></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.first_section}>
            <div className={styles.product_image}>
            <CarouselProduct slides={product.image} options={OPTIONS} />
            </div>

            <div className={styles.product_description}>
              <h1>{product.name}</h1>
              <p>{product.weight} por unidade</p>
              <p>{product.description}</p>
              <p>
                <b>Origem:</b> {product.origin}
              </p>
              <p>
                <b>Categoria:</b> {product.category}
              </p>
              <p>
                <b>Produzido por:</b> {product.producedBy}
              </p>
              <button onClick={() => addProductToCart(product)}>Adicionar na lista</button>
            </div>
          </section>
          <section className={styles.second_section}>
            <h2>Lorem Ipsum has been</h2>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <video width="100%" height="450" controls>
              <source src="/video_exemplo.mp4" type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </section>
          <hr className={styles.hr}/>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Mais produtos</h3>
              <div className={styles.grid_our_products}>
                {products.slice(0,4).map((item) => (
                  <ProductCard
                  key={item.id}
                  product={item}
                  addToCart={addProductToCart}
                  ></ProductCard>
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
