import Announcement from "../components/Announcement";
import Cats from "../components/Cats";
import Navbar from "../components/Navbar";
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
    </>
    );
}
 
export default Home;