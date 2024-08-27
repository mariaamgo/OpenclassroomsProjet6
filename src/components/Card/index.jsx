import { Link } from 'react-router-dom'
import announcementList from '../../datas/announcementList.json'

function Card() {
  return (
    <div className="card-container">
      {announcementList.map((announcement) => (
        <Link
          to={`/accommodation/${announcement.id}`}
          key={announcement.id}
          className="card"
        >
          <img
            src={announcement.cover}
            alt={announcement.description}
            className="card__image"
          />
          <h2 className="card__title">{announcement.title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default Card
