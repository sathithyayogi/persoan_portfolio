import About from '../components/About';
import BlogSubscribe from '../components/BlogSubscribe';
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
            <BlogSubscribe/>
            <Experience/>
            <Footer />
        </>
    )
}

export default Home