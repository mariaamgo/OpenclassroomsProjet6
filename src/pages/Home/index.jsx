import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Background from '../../assets/landscapes/sea_​​landscape.webp'

function Home() {
  return (
    <main>
      <Banner>
        <img src={Background} alt="" className="banner__image" />
        <div className="banner__content">
          <h1>
            Chez vous,
            <br /> partout et ailleurs
          </h1>
        </div>
      </Banner>
      <Card />
    </main>
  )
}

export default Home
