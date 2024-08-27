import { useState } from 'react'
import Arrow from '../../assets/arrow.svg'

function Collapse({ id, title, description }) {
  const [isOpen, setIsOpen] = useState({})

  const handleClick = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <li className="collapse__list" key={id}>
      <div className="collapse__header">
        <h2 className="collapse__title">{title}</h2>
        <img
          src={Arrow}
          alt="Flèche tournée vers le bas"
          className={
            isOpen[id]
              ? 'collapse__image collapse__image--tranform'
              : 'collapse__image'
          }
          onClick={() => handleClick(id)}
        />
      </div>
      <div
        className={
          isOpen[id]
            ? 'collapse__content'
            : 'collapse__content collapse__content--close'
        }
      >
        <p className="collapse__description">{description}</p>
      </div>
    </li>
  )
}

export default Collapse
