"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import CartContext from "@/data/contexts/CartContext";
import { useContext } from "react";

export default function Order() {
  const {
    cartItems,
    products,
    randomProducts,
    addProductToCart,
    removeProductFromCart,
  } = useContext(CartContext);

  return (
    <>
      <section className={styles.full_screen}>
        <div className={styles.grid_full_screen}>
          <header className={styles.header}>
            <Link href="/" className={styles.btn_back}>
              <i className="fa-solid fa-chevron-left"></i>Home
            </Link>
            <Image
              src="/logo-best-of-brazil.png"
              alt="Logo Best of Brazil"
              width={70}
              height={70}
              priority
            />
          </header>
          <main className={styles.main}>
            <div className={styles.left_side}>
              <h2>Lorem ipsum dolor sit</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur doloribus omnis alias eveniet expedita quisquam?
              </p>
              <form action="">
                <div className={styles.grid_input}>
                  <label htmlFor="">Nome</label>
                  <input type="text" placeholder="infome seu nome" />
                </div>
                <div className={styles.grid_input}>
                  <label htmlFor="">E-mail</label>
                  <input
                    type="text"
                    placeholder="infome o seu e-mail de contato"
                  />
                </div>
                <div className={styles.grid_input}>
                  <label htmlFor="">Telefone</label>
                  <input
                    type="text"
                    placeholder="informe o seu telefone de contato"
                  />
                </div>
                <div className={styles.grid_btn}>
                  <button className={styles.btn_form}>Enviar pedido</button>
                </div>
              </form>
            </div>
            <div className={styles.right_side}>
              <h2>Produtos selecionados</h2>
              <div className={styles.main_sidebar}>
                {cartItems.length === 0 ? (
                  <p>Seu carrinho está vazio.</p>
                ) : (
                  <ul>
                    {cartItems.map((item, index) => (
                      <li key={index} className={styles.item_list}>
                        <Link href={`/product/${item.id}`} className={styles.item}>
                          <img src={item.image[0]} alt="" />
                          <div>
                            <h3>{item.name}</h3>
                            <p>{item.producedBy}</p>
                            <p>{item.weight}</p>
                          </div>
                        </Link>
                        <i
                          className="fa-regular fa-trash-can"
                          onClick={() => removeProductFromCart(item)}
                        ></i>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p>
                <strong>Quatidade total de produtos: {cartItems.length}</strong>
              </p>
              <p>
                *Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, id!
              </p>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
