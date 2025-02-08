import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselProductsArrow'
import useEmblaCarousel from 'embla-carousel-react'

import Product from '../product/Product'

import styles from "./carouselProducts.module.css";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
}

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  data: Product[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, data } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.map((item) => (
            <div className={styles.embla__slide} key={item.id}>
              {/* <div className={styles.embla__slide__number}>{index + 1}</div> */}
              <Product id={item.id} image={item.image} name={item.name} description={item.description} onClickBuy={item}></Product>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}
    </section>
  )
}

export default EmblaCarousel
