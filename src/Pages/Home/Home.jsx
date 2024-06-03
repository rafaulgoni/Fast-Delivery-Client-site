import Banner from "./Banner/Banner";
import Collection from "./Collection";
import BestSell from "./Sell/BestSell";
import Reviews from "./Reviews";
import ContactUs from "./Contact/ContactUs";
import Featured from "./Feature/Featured";



const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <Collection />
            <BestSell />
            <Featured/>
            <ContactUs />
            <Reviews />
        </div>
    );
};

export default Home;