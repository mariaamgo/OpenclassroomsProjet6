import pinkStar from '../../assets/pink_star.svg'
import greyStar from '../../assets/grey_star.svg'

function AccommodationCard({ announcement }) {
  //séparation du nom et du prénom
  const [firstName, lastName] = announcement.host.name.split(' ')

  //création d'un tableau de nombres pour faire une boucle pour afficher les étoiles de notation
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className="accomodation">
      <div className="accomodation__details">
        <h1>{announcement.title}</h1>
        <p>{announcement.location}</p>
        <ul>
          {announcement.tags.map((tag, index) => (
            <li key={`tag-${index}`}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="accomodation__info">
        <div className="accomodation__host">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
          <img src={announcement.host.picture} alt="" />
        </div>
        <div className="accomodation__rating">
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

export default AccommodationCard
