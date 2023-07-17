import Announcement from "../components/Announcement";
import Cats from "../components/Cats";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Slider from "../components/Slider";

const Home = () => {
    return (
    <>
        <Announcement />
        <Navbar />
        <Slider />
        <Cats />
        <Product />
        <Newsletter />
        <Footer />
    </>
    );
}
 
export default Home;