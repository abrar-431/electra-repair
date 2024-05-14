import { AwesomeButton } from "react-awesome-button";
import { Helmet } from "react-helmet-async";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ServiceDetails = () => {
    const [startDate, setStartDate] = useState(new Date())
    const serviceDetails = useLoaderData();
    const { user } = useAuth();
    const { _id, service, area, image, price, description, providerName, providerImage, providerEmail } = serviceDetails;

    const handlePurchase = e =>{
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const name = form.name.value;
        const email = form.email.value;
        const username = form.username.value;
        const useremail = form.useremail.value;
        const service = form.service.value;
        const image = form.image.value;
        const price = form.price.value;
        const instruction = form.instruction.value;

        const newService = {id, name, email, username, useremail, service, image, price, instruction, date: startDate, serviceStatus: "pending"};
        axios.post('http://localhost:5000/booked-services', newService)
        .then(res=>{
            if(res.data.insertedId){
                toast('Your purchase was successful!');
            }
        })
        form.reset();
    }
    return (
        <div>
            <Helmet>
                <title>
                    Electra Repair | {service}
                </title>
            </Helmet>
            <h2 className="text-2xl font-bold my-4 text-center">{service}</h2>
            <img className='rounded-lg w-3/4 my-3 mx-auto' src={image} alt={service} />
            <h2 className="text-2xl font-semibold my-4 text-center">{service}</h2>
            <p className="text-center text-lg font-medium my-2">{description}</p>
            <div className='flex items-center text-lg font-medium'>
                <MdLocationOn className='text-lg mr-2'></MdLocationOn>
                <p>{area}</p>
            </div>
            <div className="mt-4 text-lg font-medium">
                <div className='flex items-center'>
                    <FaMoneyCheckDollar className='text-lg mr-2'></FaMoneyCheckDollar>
                    <p>$ {price}</p>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mt-10 mb-2">This service is added by, </h2>
            <div className="flex items-center gap-6">
                <img className="rounded-full w-16" src={providerImage} alt={providerName} />
                <p className="text-lg font-medium">{providerName}</p>
            </div>
            <div className="flex justify-center my-4">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <AwesomeButton className='rounded-lg mx-auto' type="primary" onPress={() => document.getElementById('my_modal_4').showModal()}>Book Now</AwesomeButton>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form method="dialog" className="flex justify-end">
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Hello, {user.displayName}!</h3>
                        <p className="py-4">Check carefully and then click purchase button</p>
                        <img className='rounded-lg md:w-1/4 w-1/2 my-3 mx-auto' src={image} alt={service} />
                        <div>
                            <form onSubmit={handlePurchase} className="space-y-5">
                                <div className="flex md:flex-row flex-col gap-2">
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Service Id</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="id" className="grow" defaultValue={_id} placeholder="Service Id" readOnly required />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Service Name</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="service" className="grow" defaultValue={service} placeholder="Service Name" readOnly required />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-70">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-2">
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Service Image</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="image" className="grow" placeholder="Image URL of the Service" readOnly required defaultValue={image} />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Price</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="price" className="grow" placeholder="Price" readOnly required defaultValue={price} />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-2">
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Provider Name</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="name" className="grow" placeholder="Provider Name" readOnly required defaultValue={providerName} />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Provider Email</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="email" className="grow" placeholder="Provider Email" readOnly required defaultValue={providerEmail} />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-2">
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Current User Name</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="username" className="grow" placeholder="User Name" readOnly required defaultValue={user.displayName} />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Current User Email</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="useremail" className="grow" placeholder="User Email" readOnly required defaultValue={user.email} />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-2">
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Service Taking Date</span>
                                        <label className="input input-bordered input-info flex items-center justify-between">
                                            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <span className="label-text">Special Instruction</span>
                                        <label className="input input-bordered input-info flex items-center gap-2">
                                            <input type="text" name="instruction" className="grow" placeholder="Instruction" required />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>


                                <div className="mt-6 flex justify-center">
                                    <AwesomeButton className='rounded-lg' type="primary">Purchase</AwesomeButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default ServiceDetails;