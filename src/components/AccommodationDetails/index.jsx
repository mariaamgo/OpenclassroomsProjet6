import pinkStar from '../../assets/pink_star.svg'
import greyStar from '../../assets/grey_star.svg'

function AccommodationDetails({ announcement }) {
  //séparation du nom et du prénom
  const [firstName, lastName] = announcement.host.name.split(' ')

  //création d'un tableau de nombres pour faire une boucle pour afficher les étoiles de notation
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className="accommodation-details">
      <div className="accommodation-details__content">
        <h1>{announcement.title}</h1>
        <p>{announcement.location}</p>
        <ul>
          {announcement.tags.map((tag, index) => (
            <li key={`tag-${index}`}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="accommodation-details__info">
        <div className="accommodation-details__host">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
          <img src={announcement.host.picture} alt="" />
        </div>
        <div className="accommodation-details__rating">
          {numbers.map((number) =>
            announcement.rating >= number ? (
              <img
                src={pinkStar}
                alt="Étoile rose"
                key={`star-${number.toString()}`}
              />
            ) : (
              <img
                src={greyStar}
                alt="Étoile grise"
                key={`star-${number.toString()}`}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default AccommodationDetails
