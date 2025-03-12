import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import styles from './carouselArticles.module.css'
import articles from '../../page.module.css'

type PropType = {
  slides: any
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((item, index) => (
            <article className={styles.embla__slide} key={index}>
            {/* <div className={articles.top_article}>
              <i className={`${item.icon}`}></i>
              <h3>{item.title}</h3>
            </div>
            <div className={articles.bottom_article}>
              <p>{item.description}</p>
            </div> */}
            <div className={styles.embla__slide__number}>
              <i className={`${item.icon} ${articles.icon_article}`}></i>

              <div className={articles.grid_text_article}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
