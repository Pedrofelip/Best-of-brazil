import React from "react";

import styles from "./product.module.css";

export default function Product({
  image,
  name,
  description,
  onClick,
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
          <button onClick={onClick} className={styles.button_know}>
            Conheça
          </button>
          <button onClick={onClickBuy} className={styles.button_add}>
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
