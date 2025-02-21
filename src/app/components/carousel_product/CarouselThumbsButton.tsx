import React from 'react'
import styles from './CarouselProduct.module.css'

type PropType = {
  selected: boolean
  index: string
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={styles.embla_thumbs__slide.concat(
        selected ? ' embla_thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles.embla_thumbs__slide__number}
      >
        <img src={index} alt="" />
      </button>
    </div>
  )
}