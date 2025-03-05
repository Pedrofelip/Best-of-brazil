"use client";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./page.module.css";
import container from "../../page.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import ProductCard from "@/app/components/product/Product";

import CartContext from "@/data/contexts/CartContext";
import Product from "@/app/components/product/Product";

export default function SearchProducts({ params }) {
  const { cartItems, products, randomProducts, addProductToCart } =
    useContext(CartContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  // setFilteredItems(
  //     products.filter((products: any) =>
  //       products.name.toLowerCase().includes(query.toLowerCase())
  //     )

  function filterByName(name: string) {
    // Verifica se o nome existe e converte ambos os valores para minúsculas para ignorar a diferença de maiúsculas/minúsculas
    const produtosEncontrados = products.filter(
      (product: any) => product.name.toLowerCase().includes(name.toLowerCase()) // Comparação insensível a maiúsculas/minúsculas
    );

    // Retorna os produtos encontrados ou uma mensagem informando que não foram encontrados produtos
    if (produtosEncontrados.length > 0) {
      return produtosEncontrados;
    } else {
      return produtosEncontrados; // Mensagem caso não encontre nenhum produto
    }
  }

  const productName = params.productName; // Assume que params.productName vem da URL ou algum estado
  const product = filterByName(productName);

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.first_section}>
            <h2>produtos com base na pesquisa: {params.productName}</h2>
            {product <= 0 ? (
              <section className={styles.section_products}>
                <div className={styles.grid_section_not_products}>
                  <i className="fa-regular fa-face-grin-beam-sweat"></i>
                  <p>Não encontramos nenhum produto baseado em sua pesquisa</p>
                  <Link href="/products" className={styles.redirect}>Listar todos os produtos</Link>
                </div>
              </section>
            ) : (
              <section className={styles.section_products}>
                <div className={styles.grid_section_products}>
                  <div className={styles.grid_our_products}>
                    {product.map((item) => (
                      <Product
                        key={item.id}
                        product={item}
                        addToCart={addProductToCart}
                      ></Product>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
