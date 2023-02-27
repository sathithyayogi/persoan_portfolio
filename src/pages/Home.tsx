import { useEffect } from 'react';
import About from '../components/About';
import BlogSubscribe from '../components/BlogSubscribe';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import Navbar from '../components/Navbar';
import UnderConstruction from '../components/UnderConstruction';
;
const Home = () => {


  useEffect(()=>{
    ReactGA.pageview('Main Page');
  },[])

    return (
        <>
            <Navbar />
            {/* <Hero /> */}
            <UnderConstruction/>
            <About />
            <BlogSubscribe/>
            <Experience/>
            <Footer />
        </>
    )
}

export default Home