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

export default Equipments
