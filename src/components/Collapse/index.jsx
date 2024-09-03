import React, { useState, useRef, useEffect } from 'react'
import Arrow from '../../assets/arrow.svg'

function Collapse({ id, title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px'
    }
  }, [isOpen])

  return (
    <li className="collapse__list" key={id}>
      <div className="collapse__header">
        <h2>{title}</h2>
        <img
          src={Arrow}
          alt="Flèche tournée vers le bas"
          className={isOpen ? 'collapse__image--transform' : undefined}
          onClick={handleClick}
        />
      </div>
      <div
        className={
          isOpen
            ? 'collapse__content collapse__content--open'
            : 'collapse__content'
        }
        ref={contentRef}
      >
        <div>{description}</div>
      </div>
    </li>
  )
}

export default Collapse
