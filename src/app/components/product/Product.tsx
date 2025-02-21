import React, { useContext } from "react";

import styles from "./product.module.css";
import Link from "next/link";
import CartContext from "@/data/contexts/CartContext";

export default function Product({product, addToCart}) {

  const {cartItems, products, randomProducts, addProductToCart} = useContext(CartContext)
  
  return (
    <article className={styles.card}>
      <div className={styles.card_grid}>
          <div>
          <img src={product.image[0]} alt={product.name} className={styles.card_img} />
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          </div>
        <div className={styles.grid_button}>
          <Link href={`/product/${product.id}`} className={styles.button_know}>
            Conheça
          </Link>
          <button onClick={() => addToCart(product)} className={styles.button_add}>
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
