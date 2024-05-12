import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { Helmet } from "react-helmet-async";

const Services = () => {
    const services = useLoaderData();
    return (
        <div className="grid grid-cols-1 gap-6 my-10">
            <Helmet>
                <title>Electra Repair | Services</title>
            </Helmet>
            {
                services.map((service, idx)=> <Service singleService={service} idx={idx} key={service._id}></Service>)
            }
        </div>
    );
};

export default Services;