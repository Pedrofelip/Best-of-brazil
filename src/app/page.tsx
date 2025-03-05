"use client";

import React, { useContext } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carousel from "./components/carousel/Carousel";
import CarouselProducts from "./components/carousel_products/CarouselProducts";
import CarouselCustomers from "./components/carousel_customers/CarouselCustomers";
import { useState } from "react";

import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import Product from "./components/product/Product";
import CartContext from "@/data/contexts/CartContext";
import ScrollButton from "./components/scroll_button/ScrollButton";

export default function Home() {
  const {
    cartItems,
    products,
    randomProducts,
    addProductToCart,
    logo_customers,
  } = useContext(CartContext);

  const data = [
    {
      id: 1,
      icon: "fa-solid fa-home",
      title: "Página Inicial",
      description: "Acesse o conteúdo principal da nossa plataforma.",
    },
    {
      id: 2,
      icon: "fa-solid fa-users",
      title: "Usuários",
      description: "Gerencie os usuários cadastrados e suas permissões.",
    },
    {
      id: 3,
      icon: "fa-solid fa-cogs",
      title: "Configurações",
      description:
        "Configure as preferências da plataforma de acordo com suas necessidades.",
    },
  ];

  const images_carousel = [
    {
      id: 3,
      src: "https://lojafarm.vteximg.com.br/arquivos/lenco-tukanis_web.jpg",
      alt: "imagem carrousel",
    },
    {
      id: 4,
      src: "https://image.architonic.com/pro2-3/20716738/ma--dama--wdmd2301-pro-b-arcit18.jpg",
      alt: "imagem carrousel",
    },
    {
      id: 5,
      src: "https://shipware.com/wp-content/uploads/2022/04/about-5_1920x.jpg",
      alt: "imagem carrousel",
    },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

  const OPTIONS_CP: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };

  const OPTIONS_CC: EmblaOptionsType = { loop: true, direction: "ltr" };
  const OPTIONS_CC_OP: EmblaOptionsType = { loop: true, direction: "ltr" };

  //estado que contem a lista filtrada com base na pesquisa
  // const [filteredItems, setFilteredItems] = useState(cartItems);

  //função responsavel por filtrar os itens e jogar nos estados
  // const handleSearch = (query: any) => {
  //   if (!query) {
  //     setFilteredItems(cartItems); // Se não houver pesquisa, mostra todos os itens
  //     return;
  //   }
  //   setFilteredItems(
  //     cartItems.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
  //   );
  // };

  return (
    <>
      <ScrollButton></ScrollButton>
      {/* Componente Header: Passa o valor da pesquisa para a função handleSearch através da propriedade onSearch que recebeu o valor dentro do componente*/}
      <Header></Header>
      <Carousel options={OPTIONS} data={images_carousel}></Carousel>
      <main className={styles.main}>
        <div className={styles.container_wrap}>
          <section className={styles.articles}>
            {data.map((item) => (
              <article className={styles.article_banner}>
                <div className={styles.top_article}>
                  <i className={`${item.icon}`}></i>
                  <h3>{item.title}</h3>
                </div>
                <div className={styles.bottom_article}>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </section>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Produtos em destaque</h3>
              <CarouselProducts options={OPTIONS_CP}></CarouselProducts>
            </div>
          </section>
          <section className={styles.section_ad}>
            <div className={styles.grid_section_ad}>
              <div className={styles.top_section_ad}>
                <h3>Lorem ipsum dolor sit.</h3>
                <a href="">Conheça</a>
              </div>
            </div>
            <div className={styles.bottom_section_ad}>
              <div className={styles.grid_txt_ad}>
                <img src="/logo-best-of-brazil.png" alt="" />
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, architecto.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum officia saepe rem fugiat enim voluptatibus illo at
                  iste inventore modi asperiores eius voluptatem, quibusdam quos
                  repellat nulla tempora quaerat nobis.
                </p>
              </div>
              <div className={styles.grid_img_ad}>
                <img src="/garrafa-ilustracao.png" alt="" />
              </div>
            </div>
          </section>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Nossas indicações</h3>
              <div className={styles.grid_our_products}>
                {randomProducts.slice(0, 4).map((item: any) => (
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
                {randomProducts.slice(0, 8).map((item: any) => (
                  <Product
                    key={item.id}
                    product={item}
                    addToCart={addProductToCart}
                  ></Product>
                ))}
              </div>
              <Link href="/products" className={styles.link_more_products}>
                Mais Produtos
              </Link>
            </div>
          </section>
        </div>
      </main>
      <section className={styles.section_customers}>
        <h3>Alguns de nossos clientes</h3>

        <CarouselCustomers
          options={OPTIONS_CC}
          data={logo_customers}
        ></CarouselCustomers>
        <CarouselCustomers
          options={OPTIONS_CC_OP}
          data={logo_customers}
        ></CarouselCustomers>
      </section>
      <Footer></Footer>
      {/* <div>
        <h1>Lista de Frutas</h1>
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
