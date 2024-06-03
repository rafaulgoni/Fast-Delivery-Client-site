import Banner from "./Banner/Banner";
import Collection from "./Collection";
import BestSell from "./Sell/BestSell";
import Reviews from "./Reviews";
import ContactUs from "./Contact/ContactUs";



const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <Collection />
            <BestSell />
            
            <ContactUs />
            <Reviews />
        </div>
    );
};

export default Home;