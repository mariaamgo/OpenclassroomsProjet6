import PropTypes from 'prop-types'

function Equipments({ equipments }) {
  return (
    <ul>
      {equipments.map((equipment, index) => (
        <li key={`equipment-${index}`} className="collapse__list--equipment">
          {equipment}
        </li>
      ))}
    </ul>
  )
}

Equipments.propTypes = {
  equipments: PropTypes.array.isRequired,
}

export default Equipments
