import { useState } from 'react'
import arrowRight from '../../assets/arrow_right.svg'
import arrowLeft from '../../assets/arrow_left.svg'

function Slideshow({ pictures, alt }) {
  const [index, setIndex] = useState(0)

  //nombre d'images que contient le logement
  const length = pictures.length

  //aller à l'image récédente
  const previousImage = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  //aller à l'image suivante
  const nextImage = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  return (
    <div className="carousel">
      {pictures.map((picture, i) => (
        <img
          key={i}
          src={picture}
          alt={alt}
          className={
            i === index
              ? 'carousel__image carousel__image--active'
              : 'carousel__image'
          }
        />
      ))}
      {pictures.length > 1 && (
        <>
          <button onClick={previousImage} className="carousel__button--left">
            <img src={arrowLeft} alt="Flèche pointant à gauche" />
          </button>
          <button onClick={nextImage} className="carousel__button--right">
            <img src={arrowRight} alt="Flèche pointant à droite" />
          </button>
          <p className="carousel__number">
            {index + 1}/{length}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow
