"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
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
      id: 1,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Queijo Minas Artesanal",
      description:
        "Queijo minas artesanal, curado por 6 meses, com sabor suave e textura cremosa.",
    },
    {
      id: 2,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Abelha Orgânico",
      description:
        "Mel puro e orgânico, extraído de abelhas cuidadas de forma sustentável.",
    },
    {
      id: 3,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Pão de Queijo Congelado",
      description:
        "Delicioso pão de queijo, pronto para assar e saborear no seu café da manhã.",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Chocolates Finos",
      description:
        "Chocolate gourmet, elaborado com cacau de alta qualidade, disponível em várias versões.",
    },
    {
      id: 5,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Varietal",
      description:
        "Vinho de qualidade, produzido com uvas selecionadas, oferecendo um sabor único.",
    },
    {
      id: 6,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Salgadinhos Artesanais",
      description:
        "Salgadinhos feitos à mão com ingredientes frescos e selecionados, ideais para petiscar.",
    },
    {
      id: 7,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Geleia de Morango Caseira",
      description:
        "Geleia feita com morangos frescos e açúcar mascavo, 100% natural e sem conservantes.",
    },
    {
      id: 8,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Laranjeira",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 9,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Queijo Brie",
      description:
        "Queijo brie suave e cremoso, perfeito para entradas e acompanhamento de vinhos.",
    },
    {
      id: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Pasta de Amendoim",
      description:
        "Pasta de amendoim cremosa, rica em proteínas, ideal para lanches rápidos e saudáveis.",
    },
    {
      id: 11,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Tinto",
      description:
        "Vinho tinto encorpado, perfeito para acompanhar pratos com carnes vermelhas.",
    },
    {
      id: 12,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Pipoca Gourmet",
      description:
        "Pipoca gourmet feita com ingredientes especiais e uma pitada de sabor refinado.",
    },
    {
      id: 13,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Café Orgânico",
      description:
        "Café orgânico de alta qualidade, com sabor encorpado e aroma intenso.",
    },
    {
      id: 14,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel com Própolis",
      description:
        "Mel misturado com própolis, ideal para fortalecer o sistema imunológico.",
    },
    {
      id: 15,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Presunto Defumado",
      description:
        "Presunto defumado de qualidade, perfeito para sanduíches e lanches rápidos.",
    },
    {
      id: 16,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Chá Verde Orgânico",
      description:
        "Chá verde orgânico, perfeito para momentos de relaxamento e bem-estar.",
    },
    {
      id: 17,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Branco",
      description:
        "Vinho branco refrescante, ideal para acompanhar pratos leves como frutos do mar.",
    },
    {
      id: 18,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Salgados de Festa",
      description:
        "Salgadinhos variados, ideais para festas e eventos, preparados com muito sabor.",
    },
    {
      id: 19,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Arroz Integral Orgânico",
      description:
        "Arroz integral orgânico, ideal para uma alimentação mais saudável e equilibrada.",
    },
    {
      id: 20,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Eucalipto",
      description:
        "Mel de eucalipto, com sabor marcante e diversas propriedades terapêuticas.",
    },
    {
      id: 21,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Bacon Defumado",
      description:
        "Bacon defumado de alta qualidade, perfeito para grelhar ou utilizar em receitas.",
    },
    {
      id: 22,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Pão de Forma Integral",
      description:
        "Pão de forma integral, feito com farinha 100% integral, ideal para sanduíches.",
    },
    {
      id: 23,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Rosé",
      description:
        "Vinho rosé delicado, ótimo para acompanhar pratos mais leves como saladas.",
    },
    {
      id: 24,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Bolinho de Arroz",
      description:
        "Bolinho de arroz crocante, ideal para acompanhar o prato principal ou como lanche.",
    },
    {
      id: 25,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Manteiga Ghee",
      description:
        "Manteiga ghee, sem lactose, ideal para cozinhar e como substituto para outras gorduras.",
    },
    {
      id: 26,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Castanheira",
      description:
        "Mel puro de castanheira, com um sabor característico e benefícios para a saúde.",
    },
    {
      id: 27,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Queijo Coalho",
      description:
        "Queijo coalho perfeito para grelhar ou acompanhar pratos típicos do nordeste.",
    },
    {
      id: 28,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Batata Doce",
      description:
        "Batata doce orgânica, rica em nutrientes, ideal para receitas saudáveis.",
    },
    {
      id: 29,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Espumante",
      description: "Vinho espumante, ideal para brindar em ocasiões especiais.",
    },
    {
      id: 30,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Biscoitos Caseiros",
      description:
        "Biscoitos caseiros crocantes, feitos com ingredientes frescos e sem conservantes.",
    },
    {
      id: 31,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Farinha de Amêndoa",
      description:
        "Farinha de amêndoa ideal para receitas low carb e para substituir a farinha tradicional.",
    },
    {
      id: 32,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Florada Silvestre",
      description: "Mel de florada silvestre, com um sabor floral e suave.",
    },
    {
      id: 33,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Queijo Parmesão",
      description:
        "Queijo parmesão curado, ideal para ralar sobre massas e risotos.",
    },
    {
      id: 34,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Macarrão Caseiro",
      description:
        "Macarrão artesanal, feito com farinha de trigo orgânica e ovos frescos.",
    },
    {
      id: 35,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho de Uva Concord",
      description: "Vinho de uva Concord, com uma cor intensa e sabor doce.",
    },
    {
      id: 36,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Azeitonas Temperadas",
      description:
        "Azeitonas temperadas com ervas finas, ideais para aperitivos.",
    },
    {
      id: 37,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Farinha de Coco",
      description:
        "Farinha de coco, ótima para receitas sem glúten e sem lactose.",
    },
    {
      id: 38,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Café",
      description:
        "Mel de café, com sabor forte e encorpado, ideal para adoçar bebidas e receitas.",
    },
    {
      id: 39,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Picanha Congelada",
      description:
        "Picanha de excelente qualidade, congelada para manter sua maciez e sabor.",
    },
    {
      id: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Iogurte Natural",
      description:
        "Iogurte natural cremoso, sem adição de açúcares e conservantes.",
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
      src: "https://logosmarcas.net/wp-content/uploads/2020/09/Starbucks-Logo.png",
      alt: "imagem carrousel",
    },
    {
      id: 2,
      src: "https://w7.pngwing.com/pngs/1002/138/png-transparent-burger-king-logo-hamburger-burger-king-logo-restaurant-burger-king-text-fast-food-restaurant-signage-thumbnail.png",
      alt: "imagem carrousel",
    },
    {
      id: 3,
      src: "https://w7.pngwing.com/pngs/986/569/png-transparent-pizza-hut-take-out-logo-yum-brands-pizza-pics-food-text-logo.png",
      alt: "imagem carrousel",
    },
    {
      id: 4,
      src: "https://w7.pngwing.com/pngs/496/145/png-transparent-logo-brand-fast-food-franchising-subway-subway-sandwich-food-text-logo-thumbnail.png",
      alt: "imagem carrousel",
    },
    {
      id: 5,
      src: "https://e7.pngegg.com/pngimages/346/348/png-clipart-pringles-logo-cheese-fries-brand-potato-chip-others-miscellaneous-food.png",
      alt: "imagem carrousel",
    },
    {
      id: 6,
      src: "https://w7.pngwing.com/pngs/172/485/png-transparent-wendy-039-s-hd-logo.png",
      alt: "imagem carrousel",
    },
    {
      id: 7,
      src: "https://i.pinimg.com/736x/51/9b/fa/519bfaca4362bc68af29277ffe8d6d2d.jpg",
      alt: "imagem carrousel",
    },
    {
      id: 8,
      src: "https://blog.estudiodurer.com.br/wp-content/uploads/2022/06/1024px-Coca-Cola_bottle_cap.svg_.png",
      alt: "imagem carrousel",
    },
    {
      id: 9,
      src: "https://e7.pngegg.com/pngimages/346/348/png-clipart-pringles-logo-cheese-fries-brand-potato-chip-others-miscellaneous-food.png",
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
      id: 13,
      src: "https://w7.pngwing.com/pngs/733/246/png-transparent-perrier-logo-food-water-brands.png",
      alt: "imagem carrousel",
    },
    {
      id: 14,
      src: "https://w7.pngwing.com/pngs/945/486/png-transparent-7-eleven-franchising-convenience-shop-business-slurpee-broucher-company-text-rectangle-thumbnail.png",
      alt: "imagem carrousel",
    },
    {
      id: 15,
      src: "https://w7.pngwing.com/pngs/172/485/png-transparent-wendy-039-s-hd-logo.png",
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
  const randomIndex = getRandomIndexes(products, 10);

  // Selecionar os itens do array pelos índices aleatórios
  const randomProducts = randomIndex.map((index) => products[index]);

  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const OPTIONS_CP: EmblaOptionsType = { align: "start", dragFree: true };
  const SLIDE_COUNT_CP = 15;
  const SLIDES_CP = Array.from(Array(SLIDE_COUNT_CP).keys());

  const OPTIONS_CC: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT_CC = 8;
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
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Nossos produtos</h3>
              <div className={styles.grid_our_products}>
                {randomProducts.map((item) => (
                  <Product
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    onClick={item}
                    onClickBuy={item}
                  ></Product>
                ))}
              </div>
              <Link href="/" className={styles.link_more_products}>
                Mais Produtos
              </Link>
            </div>
          </section>
          <section className={styles.section_customers}>
            <h3>Alguns de nossos clientes</h3>
            
            <CarouselCustomers
              slides={SLIDES_CC}
              options={OPTIONS_CC}
              data = {logo_customers}
              carousel_direction="default"
            ></CarouselCustomers>
            <CarouselCustomers
              slides={SLIDES_CC}
              options={OPTIONS_CC}
              data = {logo_customers}
              carousel_direction="default"
            ></CarouselCustomers>
          </section>
        </div>
      </main>
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
