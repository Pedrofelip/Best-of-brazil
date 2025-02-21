"use client";

import React, { useContext } from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import container from "../page.module.css";
import CarouselLocation from '../components/carousel_location/CarouselLocation'
import { EmblaOptionsType } from 'embla-carousel'
import { useState } from "react";
import '../components/carousel_location/CarouselLocation.css'
import CartContext from '@/data/contexts/CartContext';

export default function Location() {

  const {cartItems, products, randomProducts, addProductToCart} = useContext(CartContext)

  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Grapes",
  ]);

  const first_location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14634.124365584317!2d-46.567554420129404!3d-23.513393353338973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f112bf27381%3A0xd06b657ef8262190!2sR.%20Cabo%20Ant%C3%B4nio%20Pinton%2C%20231%20-%20Parque%20Novo%20Mundo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002186-000!5e0!3m2!1spt-BR!2sbr!4v1738110868284!5m2!1spt-BR!2sbr"

  const second_location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.164569803495!2d-46.51618572391318!3d-23.598430162956593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce678bb2ff46c9%3A0xd17397ea4c430fa0!2sR.%20Gen.%20Porf%C3%ADrio%20da%20Paz%2C%202048%20-%20Vila%20Bancaria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003918-000!5e0!3m2!1spt-BR!2sbr!4v1738115833109!5m2!1spt-BR!2sbr"


  //estado que contem a lista filtrada com base na pesquisa
  const [filteredItems, setFilteredItems] = useState(items);
  const [location, setLocation] = useState(first_location);
  const [change, setChange] = useState(true)

  //função responsavel por filtrar os itens e jogar nos estados
  const handleSearch = (query: any) => {
    if (!query) {
      setFilteredItems(items); // Se não houver pesquisa, mostra todos os itens
      return;
    }
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleClick = () => {
    if(change){
        setLocation(second_location)
        setChange(false)
    }else{
        setLocation(first_location)
        setChange(true)
    }
  }

  const OPTIONS: EmblaOptionsType = { align: 'center' }
  const SLIDE_COUNT = 2
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  const locs = [
    {
      id: 1,
      image: "https://shipware.com/wp-content/uploads/2022/04/about-5_1920x.jpg",
      name: "Objeto 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      src: "https://exemplo.com/objeto1"
    },
    {
      id: 2,
      image: "https://lojafarm.vteximg.com.br/arquivos/lenco-tukanis_web.jpg",
      name: "Objeto 2",
      description: "Descrição do segundo objeto.",
      src: "https://exemplo.com/objeto2"
    }
  ];

  return (
    <>
      <Header data={items} onSearch={handleSearch} cartItems={cartItems}></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.first_section}>
            <iframe
              src={location}
              className={styles.map}
              style={{ border: 0 }}
              loading="lazy"
            > 
            </iframe>
            <CarouselLocation slides={SLIDES} options={OPTIONS} data={locs} handleClick={handleClick}/>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
