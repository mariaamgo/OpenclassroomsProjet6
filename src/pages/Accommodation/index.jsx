import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import AccommodationCard from '../../components/AccommodationCard'
import announcementList from '../../datas/announcementList.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Accommodation() {
  const { accomodationId } = useParams()

  //trouver l'annonce avec l'ID correspondant à accomodationId dans le tableau announcementList
  const announcement = announcementList.find(
    (announcement) => announcement.id === accomodationId,
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!announcement) {
      // Redirection vers la page d'erreur si l'ID est invalide
      navigate('/error', { replace: true })
    }
  }, [announcement, navigate]) // Dépendances pour garantir que l'effet se déclenche au bon moment

  // Si `announcement` est `undefined`, on retourne `null` pour éviter un rendu incomplet
  if (!announcement) {
    return null
  }

  const equipments = (
    <ul>
      {/* boucle sur les équipements pour en faire une liste */}
      {announcement.equipments.map((equipment, index) => (
        <li key={`equipment-${index}`} className="collapse__list--equipment">
          {equipment}
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <Slideshow pictures={announcement.pictures} alt={announcement.title} />
      <AccommodationCard announcement={announcement} />
      <ul className="collapse collapse--accomodation">
        <Collapse
          id={`description-${announcement.id}`}
          title="Description"
          description={announcement.description}
        />
        <Collapse
          id={`equipments-${announcement.id}`}
          title="Équipement"
          description={equipments}
        />
      </ul>
    </>
  )
}

export default Accommodation
