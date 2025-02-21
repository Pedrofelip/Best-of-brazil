import React, { useContext } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselProductsArrow";
import useEmblaCarousel from "embla-carousel-react";

import Product from "../product/Product";

import styles from "./carouselProducts.module.css";
import CartContext from "@/data/contexts/CartContext";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { cartItems, products, randomProducts, addProductToCart } =
    useContext(CartContext);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {randomProducts.slice(0, 8).map((item: any) => (
            <div className={styles.embla__slide} key={item.id}>
              {/* <div className={styles.embla__slide__number}>{index + 1}</div> */}
              <Product
                key={item.id}
                product={item}
                addToCart={addProductToCart}
              ></Product>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className={styles.embla__button}/>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
