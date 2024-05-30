import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";

const Services = () => {
    const loadedServices = useLoaderData();
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [services, setServices] = useState(loadedServices);
    const { theme } = useAuth();
    useEffect(() => {
        axios.get(`https://assignment-11-server-side-alpha.vercel.app/searched-services/?search=${search}&location=${location}`)
            .then(res => {
                setServices(res.data)
            })
    }, [search, location])

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text)
        e.target.reset();
    }

    const handleLocationSearch = area =>{
        setSearch('')
        setLocation(area)
    }
    console.log(location)
    return (
        <div className="grid grid-cols-1 gap-6 my-10">
            <Helmet>
                <title>Electra Repair | Services</title>
            </Helmet>
            <div className="mx-auto flex md:flex-row flex-col gap-6">
                <form onSubmit={handleSearch} >
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
                <div className=''>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="flex gap-4 items-center border-2 border-gray-300 text-info p-2 rounded-lg " onClick={() => document.getElementById('my_modal_1').showModal()}>
                        <p className="text-lg">Your Location</p>
                        <FaLocationDot className="text-xl"></FaLocationDot>
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h2 className="md:text-xl text-base font-bold text-center flex justify-center items-center gap-2">
                                Select Your <FaLocationDot className="text-xl text-info"></FaLocationDot> Area
                            </h2>
                            <div className="divider"></div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                                {
                                    loadedServices.map(service=><div key={service._id}>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button onClick={()=>handleLocationSearch(service.area)} className="btn w-full">{service.area}</button>
                                    </form>
                                </div>)
                                }
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
                {
                    services.map((service, idx) => <Service singleService={service} idx={idx} key={service._id}></Service>)
                }
        </div>
    );
};

export default Services;