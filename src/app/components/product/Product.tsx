import React from "react";

import styles from "./product.module.css";
import Link from "next/link";

export default function Product({
  id,
  image,
  name,
  description,
  onClickBuy,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.card_grid}>
          <div>
          <img src={image} alt={name} className={styles.card_img} />
          <h4>{name}</h4>
          <p>{description}</p>
          </div>
        <div className={styles.grid_button}>
          <Link href={`/product/${id}`} className={styles.button_know}>
            Conheça
          </Link>
          <button onClick={onClickBuy} className={styles.button_add}>
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
