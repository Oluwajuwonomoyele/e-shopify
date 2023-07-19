import Cats from "../components/Cats";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Slider from "../components/Slider";

const Home = () => {
    return (
    <>
        <Slider />
        <Cats />
        <Product />
        <Newsletter />
    </>
    );
}
 
export default Home;