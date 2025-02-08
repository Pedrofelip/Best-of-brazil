"use client";

import { useRouter } from "next/router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./page.module.css";
import container from "../../page.module.css";
import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/app/components/product/Product";

import CarouselProduct from '../../components/carousel_product/CarouselProduct'
import { EmblaOptionsType } from 'embla-carousel'

export default function Product({ params }) {
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

  const products = [
    {
      id: 1,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Queijo Minas Artesanal",
      description:
        "Queijo minas artesanal, curado por 6 meses, com sabor suave e textura cremosa.",
      origin: "Minas Gerais",
      category: "Queijos",
      producedBy: "Queijaria São João",
      weight: "300g",
    },
    {
      id: 2,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Abelha Orgânico",
      description:
        "Mel puro e orgânico, extraído de abelhas cuidadas de forma sustentável.",
      origin: "São Paulo",
      category: "Mel",
      producedBy: "Mel Natural",
      weight: "500g",
    },
    {
      id: 3,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Pão de Queijo Congelado",
      description:
        "Delicioso pão de queijo, pronto para assar e saborear no seu café da manhã.",
      origin: "Minas Gerais",
      category: "Pães",
      producedBy: "Pão de Queijo Artesanal",
      weight: "400g",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Chocolates Finos",
      description:
        "Chocolate gourmet, elaborado com cacau de alta qualidade, disponível em várias versões.",
      origin: "São Paulo",
      category: "Doces",
      producedBy: "Chocolates Finos",
      weight: "250g",
    },
    {
      id: 5,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Varietal",
      description:
        "Vinho de qualidade, produzido com uvas selecionadas, oferecendo um sabor único.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Varietal",
      weight: "750ml",
    },
    {
      id: 6,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Salgadinhos Artesanais",
      description:
        "Salgadinhos feitos à mão com ingredientes frescos e selecionados, ideais para petiscar.",
      origin: "Campinas",
      category: "Salgados",
      producedBy: "Salgados de Festa",
      weight: "500g",
    },
    {
      id: 7,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Geleia de Morango Caseira",
      description:
        "Geleia feita com morangos frescos e açúcar mascavo, 100% natural e sem conservantes.",
      origin: "São Paulo",
      category: "Geleias",
      producedBy: "Geleias Caseiras",
      weight: "250g",
    },
    {
      id: 8,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Laranjeira",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
      origin: "Espírito Santo",
      category: "Mel",
      producedBy: "Mel Laranjeira",
      weight: "500g",
    },
    {
      id: 9,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Queijo Brie",
      description:
        "Queijo brie suave e cremoso, perfeito para entradas e acompanhamento de vinhos.",
      origin: "França",
      category: "Queijos",
      producedBy: "Queijaria Brie",
      weight: "200g",
    },
    {
      id: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Pasta de Amendoim",
      description:
        "Pasta de amendoim cremosa, rica em proteínas, ideal para lanches rápidos e saudáveis.",
      origin: "São Paulo",
      category: "Pasta",
      producedBy: "Pasta Natural",
      weight: "300g",
    },
    {
      id: 11,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Tinto",
      description:
        "Vinho tinto encorpado, perfeito para acompanhar pratos com carnes vermelhas.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Tinto",
      weight: "750ml",
    },
    {
      id: 12,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Pipoca Gourmet",
      description:
        "Pipoca gourmet feita com ingredientes especiais e uma pitada de sabor refinado.",
      origin: "São Paulo",
      category: "Petiscos",
      producedBy: "Pipoca Gourmet",
      weight: "200g",
    },
    {
      id: 13,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Café Orgânico",
      description:
        "Café orgânico de alta qualidade, com sabor encorpado e aroma intenso.",
      origin: "Minas Gerais",
      category: "Cafés",
      producedBy: "Café Minas",
      weight: "250g",
    },
    {
      id: 14,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel com Própolis",
      description:
        "Mel misturado com própolis, ideal para fortalecer o sistema imunológico.",
      origin: "São Paulo",
      category: "Mel",
      producedBy: "Mel Saúde",
      weight: "400g",
    },
    {
      id: 15,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Presunto Defumado",
      description:
        "Presunto defumado de qualidade, perfeito para sanduíches e lanches rápidos.",
      origin: "Santa Catarina",
      category: "Carnes",
      producedBy: "Carnes Defumadas",
      weight: "300g",
    },
    {
      id: 16,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Chá Verde Orgânico",
      description:
        "Chá verde orgânico, perfeito para momentos de relaxamento e bem-estar.",
      origin: "Minas Gerais",
      category: "Chás",
      producedBy: "Chá Verde",
      weight: "100g",
    },
    {
      id: 17,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Branco",
      description:
        "Vinho branco refrescante, ideal para acompanhar pratos leves como frutos do mar.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Branco",
      weight: "750ml",
    },
    {
      id: 18,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Salgados de Festa",
      description:
        "Salgadinhos variados, ideais para festas e eventos, preparados com muito sabor.",
      origin: "Campinas",
      category: "Salgados",
      producedBy: "Salgados de Festa",
      weight: "600g",
    },
    {
      id: 19,
      image:
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      name: "Arroz Integral Orgânico",
      description:
        "Arroz integral orgânico, ideal para uma alimentação mais saudável e equilibrada.",
      origin: "São Paulo",
      category: "Grãos",
      producedBy: "Arroz Natural",
      weight: "1kg",
    },
    {
      id: 20,
      image:
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      name: "Mel de Eucalipto",
      description:
        "Mel de eucalipto, com sabor marcante e diversas propriedades terapêuticas.",
      origin: "Minas Gerais",
      category: "Mel",
      producedBy: "Mel de Eucalipto",
      weight: "500g",
    },
    {
      id: 21,
      image:
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      name: "Bacon Defumado",
      description:
        "Bacon defumado de alta qualidade, perfeito para grelhar ou utilizar em receitas.",
      origin: "Santa Catarina",
      category: "Carnes",
      producedBy: "Carnes Defumadas",
      weight: "250g",
    },
    {
      id: 22,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      name: "Pão de Forma Integral",
      description:
        "Pão de forma integral, feito com farinha 100% integral, ideal para sanduíches.",
      origin: "São Paulo",
      category: "Pães",
      producedBy: "Pão Integral",
      weight: "500g",
    },
    {
      id: 23,
      image:
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      name: "Vinho Rosé",
      description:
        "Vinho rosé delicado, ótimo para acompanhar pratos mais leves como saladas.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Rosé",
      weight: "750ml",
    },
    {
      id: 24,
      image:
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      name: "Bolinho de Arroz",
      description:
        "Bolinho de arroz crocante, ideal para acompanhar o prato principal ou como lanche.",
      origin: "Campinas",
      category: "Salgados",
      producedBy: "Bolinho de Arroz",
      weight: "300g",
    },
  ];

  // Função que separa um objeto com base no ID fornecido
  function filterById(id) {
    const produtoEncontrado = products.find((produto) => produto.id == id);
    return produtoEncontrado || "Produto não encontrado"; // Caso não encontre, retorna uma mensagem
  }

  const product = filterById(params.productId);

  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Header data={items} onSearch={handleSearch}></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.first_section}>
            <div className={styles.product_image}>
            <CarouselProduct slides={SLIDES} options={OPTIONS} />
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
              <button>Adicionar na lista</button>
            </div>
          </section>
          <section className={styles.second_section}>
            <h2>Lorem Ipsum has been</h2>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <video width="100%" height="450" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </section>
          <hr className={styles.hr}/>
          <section className={styles.section_products}>
            <div className={styles.grid_section_products}>
              <h3>Nossos produtos</h3>
              <div className={styles.grid_our_products}>
                {products.slice(0,4).map((item) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    onClickBuy={item}
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
