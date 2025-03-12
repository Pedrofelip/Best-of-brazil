import React, { useContext } from "react";
import styles from "./CartModal.module.css";
import CartContext from "@/data/contexts/CartContext";
import Link from "next/link";

const CartSidebar = ({ isOpen, closeSidebar, cartItems }) => {
  const { products, randomProducts, addProductToCart, removeProductFromCart, closeCart } =
    useContext(CartContext);

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.cabecalho_sidebar}>
          <h2>Selecionados</h2>
          <button className={styles.closeButton} onClick={closeSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className={styles.main_sidebar}>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className={styles.item_list}>
                  <Link href={`/product/${item.id}`} className={styles.item} onClick={closeCart}>
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

        <div className={styles.total}>
          <span>Quantidade de produtos:</span>
          <span>
            {
              cartItems.length
              // .reduce((total, item) => total + item.price, 0)
              // .toFixed(2)
            }
          </span>
        </div>
        {cartItems.length === 0 ? (
          <button className={styles.button_disable}>Finalizar pedido</button>
        ) : (
          <Link href="/order" className={styles.button} onClick={closeSidebar}>
          Finalizar pedido
        </Link>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
