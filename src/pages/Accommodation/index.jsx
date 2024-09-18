import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import AccommodationDetails from '../../components/AccommodationDetails'
import Equipments from '../../components/Equipments'
import announcementList from '../../datas/announcementList.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Accommodation() {
  const { accommodationId } = useParams()

  // Trouver l'annonce avec l'ID correspondant à accomodationId dans le tableau announcementList
  const announcement = announcementList.find(
    (announcement) => announcement.id === accommodationId,
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!announcement) {
      // Redirection vers la page d'erreur si l'ID est invalide
      navigate('/erreur', { replace: true })
    }
  }, [announcement, navigate]) // Dépendances pour garantir que l'effet se déclenche au bon moment

  // Si announcement est undefined, on retourne null pour éviter un rendu incomplet
  if (!announcement) {
    return null
  }

  return (
    <>
      <Slideshow pictures={announcement.pictures} alt={announcement.title} />
      <AccommodationDetails announcement={announcement} />
      <ul className="collapse collapse--accomodation">
        <Collapse
          id={`description-${announcement.id}`}
          title="Description"
          description={announcement.description}
        />
        <Collapse
          id={`equipments-${announcement.id}`}
          title="Équipements"
          description={<Equipments equipments={announcement.equipments} />}
        />
      </ul>
    </>
  )
}

export default Accommodation
