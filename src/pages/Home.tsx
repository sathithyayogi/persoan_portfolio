import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
;
const Home = () => {
    return (
        <>
            <Navbar />
            {/* <Hero /> */}
            <About />
            <Experience/>
            <Footer />
        </>
    )
}

export default Home