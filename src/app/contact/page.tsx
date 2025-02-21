"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import container from "../page.module.css";
import { useContext, useState } from "react";
import CartContext from "@/data/contexts/CartContext";

export default function Contact() {
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

  return (
    <>
      <Header data={items} onSearch={handleSearch} cartItems={cartItems}></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.first_section}>
            <div className={styles.txt_first_section}>
              <h1>Contrary to popular belief, Lorem Ipsum is not simply</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old contrary to popular belief,
                Lorem Ipsum is not simply random text.
              </p>
              <div className={styles.grid_infos}>
                <article className={styles.infos_contact}>
                  <h3>Email para contato</h3>
                  <p>teste@teste.com.br</p>
                </article>
                <article className={styles.infos_contact}>
                  <h3>Endereço</h3>
                  <p>Rua teste, 234. São Paulo</p>
                </article>
                <article className={styles.infos_contact}>
                  <h3>Telefone para contato</h3>
                  <p>(11) 9 9999-9999</p>
                </article>
              </div>
            </div>
            <div className={styles.form_first_section}>
                <form action="" className={styles.form}>
                    <div className={styles.grid_input}>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="infome seu nome"/>
                    </div>
                    <div className={styles.grid_input}>
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder="infome o seu e-mail de contato"/>
                    </div>
                    <div className={styles.grid_input}>
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="informe o seu telefone de contato"/>
                    </div>
                    <div className={styles.grid_input}>
                        <label htmlFor="">Assunto</label>
                        <input type="text" placeholder="infome o assunto"/>
                    </div>
                    <div className={styles.grid_input}>
                        <label htmlFor="">Descrição</label>
                        <textarea type="text" placeholder="" className={styles.text_area}/>
                    </div>
                    <div className={styles.grid_btn}>
                        <button className={styles.btn_form}>Entre em contato</button>
                    </div>
                </form>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
