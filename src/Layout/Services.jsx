import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";

const Services = () => {
    const loadedServices = useLoaderData();
    const [search, setSearch] = useState('');
    const [services, setServices] = useState(loadedServices);
    const { theme } = useAuth();
    useEffect(()=>{
    
    axios.get(`https://assignment-11-server-side-alpha.vercel.app/searched-services/?search=${search}`)
    .then(res=>{
        setServices(res.data)
    })
    },[search])

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text)
        e.target.reset();
    }
    return (
        <div className="grid grid-cols-1 gap-6 my-10">
            <Helmet>
                <title>Electra Repair | Services</title>
            </Helmet>
            <form onSubmit={handleSearch} className="lg:w-1/4 md:w-1/3 w-3/4 mx-auto">
                <div className=' relative'>
                    <input type="text" placeholder="Search Service" name='search' className={theme === 'sunset' ?
                        "input input-bordered w-full pl-12 bg-gray-50"
                        :
                        "input input-bordered w-full pl-12"
                    } />
                    <div className='absolute top-1/3 left-3'>
                        <button>
                            <IoSearchSharp className='text-xl' />
                        </button>
                    </div>
                </div>
            </form>
            {
                services.map((service, idx) => <Service singleService={service} idx={idx} key={service._id}></Service>)
            }
        </div>
    );
};

export default Services;