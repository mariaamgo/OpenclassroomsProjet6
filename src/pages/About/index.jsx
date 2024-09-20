import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import Background from '../../assets/landscapes/mountain_landscape.webp'
import aboutList from '../../datas/aboutList.json'

function About() {
  return (
    <main>
      <Banner>
        <img
          src={Background}
          alt="Paysage de montagne"
          className="banner__image banner__image--opacity"
        />
      </Banner>
      <ul className="collapse collapse--about">
        {aboutList.map((about) => (
          <Collapse
            key={about.id}
            id={about.id}
            title={about.title}
            description={about.description}
          />
        ))}
      </ul>
    </main>
  )
}

export default About
