import axios from "axios";
import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PopularCardDetails from "./PopularCardDetails";

const PopularCards = () => {
    const [services, setServices] = useState([]);
    const {theme} = useAuth();
    useEffect(() => {
        axios.get('https://assignment-11-server-side-alpha.vercel.app/popular-services')
            .then(res => {
                setServices(res.data);
            })
    }, [])
    
    return (
        <div className={
            theme === 'sunset'?
            "my-5 text-gray-100"
            :
            "my-5 "
        }>
            <Slide delay={1000} direction="right"><h2 className="text-center mx-auto border-l-4 md:w-1/2 w-full border-blue-800 md:text-2xl text-lg font-bold">Popular Services : Explore Top Services for Your Electronic Needs</h2></Slide>
            <Fade delay={2000}>
                <p className="font-medium text-lg my-3 md:w-3/4 w-full mx-auto text-center">Discover our most sought-after services tailored to meet your needs. Explore a curated selection of top-rated services, each offering expert solutions and exceptional value. From phone repairs to laptop upgrades, find the perfect service to enhance your electronic devices.</p>
            </Fade>
            <div className="grid grid-cols-1 gap-6">
                {
                    services.slice(0, 6).map((service, idx) => <PopularCardDetails singleService={service} idx={idx} key={service._id}></PopularCardDetails>)
                }
            </div>
            <div className="flex justify-center mx-auto my-4">
                <Link to='/services'><AwesomeButton className='rounded-lg' type="primary">Show All</AwesomeButton></Link>
            </div>
        </div>
    );
};

export default PopularCards;