import { Bounce, Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import service from '../assets/add_service.jpg'
import { AwesomeButton } from "react-awesome-button";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddService = () => {
    const { user } = useAuth();
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const service = form.service.value;
        const area = form.area.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const newUser = {
            service, area, image, price, description,
            providerEmail: user.email,
        providerImage: user.photoURL,
        providerName:user.displayName,
    };
    console.log(newUser);
    axios.post('http://localhost:5000/services', newUser)
    .then(res=>{
        if(res.data.insertedId){
            toast('Your service was added successfully');
        }
    })
    form.reset();
}
return (
    <div className='flex flex-col md:flex-row gap-6 my-6'>
        <Helmet>
            <title>Electra Repair | Add Service</title>
        </Helmet>
        <div className='md:w-1/2 h-1/2 w-full overflow-hidden'>
            <Fade damping={0.5}>
                <div className="shadow-xl z-10">
                    <img className='rounded-t-2xl ' src={service} alt="" />
                    <svg className="rounded-b-2xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,128L26.7,149.3C53.3,171,107,213,160,192C213.3,171,267,85,320,48C373.3,11,427,21,480,32C533.3,43,587,53,640,69.3C693.3,85,747,107,800,138.7C853.3,171,907,213,960,202.7C1013.3,192,1067,128,1120,133.3C1173.3,139,1227,213,1280,229.3C1333.3,245,1387,203,1413,181.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </div>
            </Fade>
        </div>
        <div className='md:w-1/2 w-full my-0 md:my-16'>
            <Bounce>
                <div className='shadow-xl rounded-lg bg-gray-100 flex flex-col p-4'>
                    <h2 className="text-2xl font-bold text-center">Add Service</h2>
                    <hr className='w-1/12 mx-auto mt-2 bg-blue-800 border-0 h-1 rounded-full mb-4' />
                    <form onSubmit={handleAddService} className="space-y-5">
                        <label className="input input-bordered input-info flex items-center gap-2">
                            <input type="text" name="service" className="grow" placeholder="Service Name" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-70">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                            </svg>
                        </label>
                        <label className="input input-bordered input-info flex items-center gap-2">
                            <input type="text" name="area" className="grow" placeholder="Service Area" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-70">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </label>
                        <label className="input input-bordered input-info flex items-center gap-2">
                            <input type="text" name="image" className="grow" placeholder="Image URL of the Service" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </label>
                        <label className="input input-bordered input-info flex items-center gap-2">
                            <input type="text" name="price" className="grow" placeholder="Price" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </label>
                        <label className="input input-bordered input-info input-lg flex items-center gap-2">
                            <input type="text" name="description" className="grow" placeholder="Description" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </label>
                        <div className="mt-6 w-1/2 mx-auto">
                            <AwesomeButton className='rounded-lg w-full' type="primary">Add</AwesomeButton>
                        </div>
                    </form>
                </div>
            </Bounce>
        </div>
        <ToastContainer/>
    </div>
);
};

export default AddService;