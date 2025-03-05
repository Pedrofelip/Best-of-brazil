"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import container from "../page.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import CartContext from "@/data/contexts/CartContext";

export default function Partners() {

  const card_info = [
    {
      id: 1,
      icon: "fa-solid fa-home",
      title: "Página Inicial",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic at, excepturi impedit expedita nobis!",
    },
    {
      id: 2,
      icon: "fa-solid fa-users",
      title: "Usuários",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic at, excepturi impedit expedita nobis!",
    },
    {
      id: 3,
      icon: "fa-solid fa-cogs",
      title: "Configurações",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic at, excepturi impedit expedita nobis!",
    },
  ]

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <div className={container.container_wrap}>
          <section className={styles.first_section}>
            <div className={styles.img_first_section}>
              <div className={styles.img_left}>
                <div></div>
              </div>
              <div className={styles.img_right}>
                <div></div>
              </div>
            </div>
            <div className={styles.txt_first_section}>
              <h3>Lojas & Parceiros</h3>
              <h1>
                Contrary to popular belief, Lorem Ipsum is not simply
              </h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old contrary to popular belief,
                Lorem Ipsum is not simply random text.
              </p>
            </div>
          </section>
          <section className={styles.second_section}>
            <h2>What we do</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </section>
          <section className={styles.third_section}>
            {card_info.map((item) => (
              <article className={styles.card}>
                <i className={item.icon}></i>
                <h3 className="">{item.title}</h3>
                <p className="">{item.description}</p>
              </article>
            ))}
          </section>
          <section className={styles.fourth_section}>
                <div className={styles.txt_fourth_section}>
                    <h1>Contrary to popular belief, Lorem Ipsum is not simply</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
                <div className={styles.img_fourth_section}>
                    <div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
