"use client";

import React from "react";
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

export default function Home() {
  //estado que contem a nossa base de dados
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Grapes",
  ]);

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

  const products = [
    {
      "id": 1,
      "image": "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      "name": "Queijo Minas Artesanal",
      "description": "Queijo minas artesanal, curado por 6 meses, com sabor suave e textura cremosa.",
      "origin": "Minas Gerais",
      "category": "Queijos",
      "producedBy": "Queijaria São João",
      "weight": "300g"
    },
    {
      "id": 2,
      "image": "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      "name": "Mel de Abelha Orgânico",
      "description": "Mel puro e orgânico, extraído de abelhas cuidadas de forma sustentável.",
      "origin": "São Paulo",
      "category": "Mel",
      "producedBy": "Mel Natural",
      "weight": "500g"
    },
    {
      "id": 3,
      "image": "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      "name": "Pão de Queijo Congelado",
      "description": "Delicioso pão de queijo, pronto para assar e saborear no seu café da manhã.",
      "origin": "Minas Gerais",
      "category": "Pães",
      "producedBy": "Pão de Queijo Artesanal",
      "weight": "400g"
    },
    {
      "id": 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      "name": "Chocolates Finos",
      "description": "Chocolate gourmet, elaborado com cacau de alta qualidade, disponível em várias versões.",
      "origin": "São Paulo",
      "category": "Doces",
      "producedBy": "Chocolates Finos",
      "weight": "250g"
    },
    {
      "id": 5,
      "image": "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      "name": "Vinho Varietal",
      "description": "Vinho de qualidade, produzido com uvas selecionadas, oferecendo um sabor único.",
      "origin": "Vale dos Vinhedos",
      "category": "Vinhos",
      "producedBy": "Vinícola Varietal",
      "weight": "750ml"
    },
    {
      "id": 6,
      "image": "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      "name": "Salgadinhos Artesanais",
      "description": "Salgadinhos feitos à mão com ingredientes frescos e selecionados, ideais para petiscar.",
      "origin": "Campinas",
      "category": "Salgados",
      "producedBy": "Salgados de Festa",
      "weight": "500g"
    },
    {
      "id": 7,
      "image": "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      "name": "Geleia de Morango Caseira",
      "description": "Geleia feita com morangos frescos e açúcar mascavo, 100% natural e sem conservantes.",
      "origin": "São Paulo",
      "category": "Geleias",
      "producedBy": "Geleias Caseiras",
      "weight": "250g"
    },
    {
      "id": 8,
      "image": "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      "name": "Mel de Laranjeira",
      "description": "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
      "origin": "Espírito Santo",
      "category": "Mel",
      "producedBy": "Mel Laranjeira",
      "weight": "500g"
    },
    {
      "id": 9,
      "image": "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      "name": "Queijo Brie",
      "description": "Queijo brie suave e cremoso, perfeito para entradas e acompanhamento de vinhos.",
      "origin": "França",
      "category": "Queijos",
      "producedBy": "Queijaria Brie",
      "weight": "200g"
    },
    {
      "id": 10,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      "name": "Pasta de Amendoim",
      "description": "Pasta de amendoim cremosa, rica em proteínas, ideal para lanches rápidos e saudáveis.",
      "origin": "São Paulo",
      "category": "Pasta",
      "producedBy": "Pasta Natural",
      "weight": "300g"
    },
    {
      "id": 11,
      "image": "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      "name": "Vinho Tinto",
      "description": "Vinho tinto encorpado, perfeito para acompanhar pratos com carnes vermelhas.",
      "origin": "Vale dos Vinhedos",
      "category": "Vinhos",
      "producedBy": "Vinícola Tinto",
      "weight": "750ml"
    },
    {
      "id": 12,
      "image": "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      "name": "Pipoca Gourmet",
      "description": "Pipoca gourmet feita com ingredientes especiais e uma pitada de sabor refinado.",
      "origin": "São Paulo",
      "category": "Petiscos",
      "producedBy": "Pipoca Gourmet",
      "weight": "200g"
    },
    {
      "id": 13,
      "image": "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      "name": "Café Orgânico",
      "description": "Café orgânico de alta qualidade, com sabor encorpado e aroma intenso.",
      "origin": "Minas Gerais",
      "category": "Cafés",
      "producedBy": "Café Minas",
      "weight": "250g"
    },
    {
      "id": 14,
      "image": "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      "name": "Mel com Própolis",
      "description": "Mel misturado com própolis, ideal para fortalecer o sistema imunológico.",
      "origin": "São Paulo",
      "category": "Mel",
      "producedBy": "Mel Saúde",
      "weight": "400g"
    },
    {
      "id": 15,
      "image": "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      "name": "Presunto Defumado",
      "description": "Presunto defumado de qualidade, perfeito para sanduíches e lanches rápidos.",
      "origin": "Santa Catarina",
      "category": "Carnes",
      "producedBy": "Carnes Defumadas",
      "weight": "300g"
    },
    {
      "id": 16,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      "name": "Chá Verde Orgânico",
      "description": "Chá verde orgânico, perfeito para momentos de relaxamento e bem-estar.",
      "origin": "Minas Gerais",
      "category": "Chás",
      "producedBy": "Chá Verde",
      "weight": "100g"
    },
    {
      "id": 17,
      "image": "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      "name": "Vinho Branco",
      "description": "Vinho branco refrescante, ideal para acompanhar pratos leves como frutos do mar.",
      "origin": "Vale dos Vinhedos",
      "category": "Vinhos",
      "producedBy": "Vinícola Branco",
      "weight": "750ml"
    },
    {
      "id": 18,
      "image": "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      "name": "Salgados de Festa",
      "description": "Salgadinhos variados, ideais para festas e eventos, preparados com muito sabor.",
      "origin": "Campinas",
      "category": "Salgados",
      "producedBy": "Salgados de Festa",
      "weight": "600g"
    },
    {
      "id": 19,
      "image": "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      "name": "Arroz Integral Orgânico",
      "description": "Arroz integral orgânico, ideal para uma alimentação mais saudável e equilibrada.",
      "origin": "São Paulo",
      "category": "Grãos",
      "producedBy": "Arroz Natural",
      "weight": "1kg"
    },
    {
      "id": 20,
      "image": "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      "name": "Mel de Eucalipto",
      "description": "Mel de eucalipto, com sabor marcante e diversas propriedades terapêuticas.",
      "origin": "Minas Gerais",
      "category": "Mel",
      "producedBy": "Mel de Eucalipto",
      "weight": "500g"
    },
    {
      "id": 21,
      "image": "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      "name": "Bacon Defumado",
      "description": "Bacon defumado de alta qualidade, perfeito para grelhar ou utilizar em receitas.",
      "origin": "Santa Catarina",
      "category": "Carnes",
      "producedBy": "Carnes Defumadas",
      "weight": "250g"
    },
    {
      "id": 22,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      "name": "Pão de Forma Integral",
      "description": "Pão de forma integral, feito com farinha 100% integral, ideal para sanduíches.",
      "origin": "São Paulo",
      "category": "Pães",
      "producedBy": "Pão Integral",
      "weight": "500g"
    },
    {
      "id": 23,
      "image": "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      "name": "Vinho Rosé",
      "description": "Vinho rosé delicado, ótimo para acompanhar pratos mais leves como saladas.",
      "origin": "Vale dos Vinhedos",
      "category": "Vinhos",
      "producedBy": "Vinícola Rosé",
      "weight": "750ml"
    },
    {
      "id": 24,
      "image": "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      "name": "Bolinho de Arroz",
      "description": "Bolinho de arroz crocante, ideal para acompanhar o prato principal ou como lanche.",
      "origin": "Campinas",
      "category": "Salgados",
      "producedBy": "Bolinho de Arroz",
      "weight": "300g"
    },
  ];

  const images_carousel = [
    {
      id: 1,
      src: "https://lojafarm.vteximg.com.br/arquivos/tropicaloco.jpg",
      alt: "imagem carrousel",
    },
    {
      id: 2,
      src: "https://lojafarm.vteximg.com.br/arquivos/paraty_web.jpg",
      alt: "imagem carrousel",
    },
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

  const logo_customers = [
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
      id: 16,
      src: "https://logo.com/image-cdn/images/kts928pd/production/4513fd3a32f247c61ee3a487ff6100dfa154f83a-700x394.png?w=1920&q=72&fm=webp",
      alt: "imagem carrousel",
    },
    {
      id: 18,
      src: "https://logospng.org/download/starbucks/logo-starbucks-256.png",
      alt: "imagem carrousel",
    },
    {
      id: 21,
      src: "https://static.vecteezy.com/system/resources/previews/019/909/686/non_2x/burger-king-transparent-burger-king-free-free-png.png",
      alt: "imagem carrousel",
    },
    {
      id: 31,
      src: "https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png",
      alt: "imagem carrousel",
    },
    {
      id: 41,
      src: "https://logos-world.net/wp-content/uploads/2023/01/Subway-Logo-2002.png",
      alt: "imagem carrousel",
    },
    {
      id: 51,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Pringles_logo.png/797px-Pringles_logo.png",
      alt: "imagem carrousel",
    },
    {
      id: 61,
      src: "https://seeklogo.com/images/W/wendys-logo-75361EA3A8-seeklogo.com.png",
      alt: "imagem carrousel",
    },
    {
      id: 101,
      src: "https://logo.com/image-cdn/images/kts928pd/production/4513fd3a32f247c61ee3a487ff6100dfa154f83a-700x394.png?w=1920&q=72&fm=webp",
      alt: "imagem carrousel",
    },
    {
      id: 111,
      src: "https://1000marcas.net/wp-content/uploads/2022/07/Logo-KFC.png",
      alt: "imagem carrousel",
    },
    {
      id: 121,
      src: "https://i.pinimg.com/originals/ea/92/cc/ea92cc0b141df13a93095275323e1b50.jpg",
      alt: "imagem carrousel",
    },
    {
      id: 161,
      src: "https://logo.com/image-cdn/images/kts928pd/production/4513fd3a32f247c61ee3a487ff6100dfa154f83a-700x394.png?w=1920&q=72&fm=webp",
      alt: "imagem carrousel",
    },
  ];

  function getRandomIndexes(array, n) {
    const indexes = new Set();
    while (indexes.size < n) {
      const randomIndex = Math.floor(Math.random() * array.length);
      indexes.add(randomIndex);
    }
    return [...indexes];
  }

  // Pegar 10 índices aleatórios
  const randomIndex = getRandomIndexes(products, 8);

  // Selecionar os itens do array pelos índices aleatórios
  const randomProducts = randomIndex.map((index) => products[index]);

  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const OPTIONS_CP: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };
  const SLIDE_COUNT_CP = 15;
  const SLIDES_CP = Array.from(Array(SLIDE_COUNT_CP).keys());

  const OPTIONS_CC: EmblaOptionsType = { loop: true, direction: "ltr" };
  const OPTIONS_CC_OP: EmblaOptionsType = { loop: true, direction: "ltr" };
  const SLIDE_COUNT_CC = 20;
  const SLIDES_CC = Array.from(Array(SLIDE_COUNT_CC).keys());

  //estado que contem a lista filtrada com base na pesquisa
  const [filteredItems, setFilteredItems] = useState(items);

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

  return (
    <>
      {/* Componente Header: Passa o valor da pesquisa para a função handleSearch através da propriedade onSearch que recebeu o valor dentro do componente*/}
      <Header data={items} onSearch={handleSearch}></Header>
      <Carousel
        slides={SLIDES}
        options={OPTIONS}
        data={images_carousel}
      ></Carousel>
      <main className={styles.main}>
        <div className={styles.container_wrap}>
          <section className={styles.articles}>
            {data.map((item) => (
              <article className={styles.article_banner}>
                <div className={styles.grid_article_banner}>
                  <i className={`${item.icon} ${styles.icon_article}`}></i>

                  <div className={styles.grid_text_article}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Produtos em destaque</h3>
              <CarouselProducts
                slides={SLIDES_CP}
                options={OPTIONS_CP}
                data={randomProducts}
              ></CarouselProducts>
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
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                architecto.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                officia saepe rem fugiat enim voluptatibus illo at iste
                inventore modi asperiores eius voluptatem, quibusdam quos
                repellat nulla tempora quaerat nobis.
              </p>
            </div>
          </section>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Nossos produtos</h3>
              <div className={styles.grid_our_products}>
                {products.map((item) => (
                  <Product
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    onClickBuy={item}
                  ></Product>
                ))}
              </div>
              <Link href="/" className={styles.link_more_products}>
                Mais Produtos
              </Link>
            </div>
          </section>
        </div>
      </main>
      <section className={styles.section_customers}>
        <h3>Alguns de nossos clientes</h3>

        <CarouselCustomers
          slides={SLIDES_CC}
          options={OPTIONS_CC}
          data={logo_customers}
        ></CarouselCustomers>
        <CarouselCustomers
          slides={SLIDES_CC}
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
