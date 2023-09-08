import Cats from "../components/Cats";
import New from "../components/New";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Slider from "../components/Slider";

const Home = () => {
    return (
    <>
        <Slider />
        <Cats />
        <Product />
        <New />
        <Newsletter />
    </>
    );
}
 
export default Home;