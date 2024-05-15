import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";
import PopularCards from "../Components/PopularCards";
import Testimonials from "../Components/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCards></PopularCards>
            <Contact></Contact>
            <Faq></Faq>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;