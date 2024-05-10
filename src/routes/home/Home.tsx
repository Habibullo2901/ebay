import Banner from '../../components/Banner'
import Dailyprods from '../../components/Dailyprods'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Products from '../../components/Products'

const Home = () => {
  return (
    <>
      <div className='line'></div>
      <Hero />
      <Products />
      <Banner />
      <Dailyprods />
      <div className='line'></div>
      <Footer />
    </>
  )
}

export default Home