import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDot'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'

import styles from './embla.module.css'

type Image = {
  id: number;
  src: string;
  alt: string;
}

type PropType = {
  options?: EmblaOptionsType
  data: Image[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, data } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(), Fade()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.map((item) => (
            <div className={styles.embla__slide} key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={styles.embla__dot.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
