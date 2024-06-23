
import { Outlet } from 'react-router-dom'
import TopBar from '../pages/shared/TopBar'
import Footer from '../pages/shared/Footer'
import Header from '../pages/shared/Header'
import ScrollToTop from '../components/ScrollToTop'

function Index() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default Index