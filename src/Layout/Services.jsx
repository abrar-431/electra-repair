import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div className="grid grid-cols-1 gap-6 my-10">
            {
                services.map((service, idx)=> <Service singleService={service} idx={idx} key={service._id}></Service>)
            }
        </div>
    );
};

export default Services;