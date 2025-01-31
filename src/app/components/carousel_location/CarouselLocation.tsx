import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselLocationButtons'
import useEmblaCarousel from 'embla-carousel-react'

type Card = {
  id: number;
  image: string;
  name: string;
  description: string;
  src: string;
}

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  data: Card[]
  handleClick: () => void
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, data, handleClick } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item) => (
            <div className="embla__slide" key={item.id}>
              <article className="embla__slide__number">
                <div className="grid_card_map">
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </div>
                <a href={item.src} className="btn">Ver no mapa <i className="fa-solid fa-location-dot"></i></a>
            </article>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={() => {onPrevButtonClick(); handleClick()}} disabled={prevBtnDisabled} />
          <NextButton onClick={() => {onNextButtonClick(); handleClick()}} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
