import axios from "axios";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import ManageServiceDetails from "./ManageServiceDetails";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";

const ManageService = () => {
    const [services, setServices] = useState([]);
    const { user, theme } = useAuth();
    const url = `https://assignment-11-server-side-alpha.vercel.app/services?email=${user.email}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setServices(res.data);
            })
    }, [url])

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this service?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    axios.delete(`https://assignment-11-server-side-alpha.vercel.app/services/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                toast("Your service was deleted successfully");
                                const remaining = services.filter(service => service._id !== id);
                                setServices(remaining);
                            }
                        })
                }
            });
    }
    return (
        <div className=" mt-10">
            <Helmet>
                <title>Electra Repair | Manage Service</title>
            </Helmet>
            {
                services.length > 0 ?
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {
                            services.map(service => <ManageServiceDetails key={service._id} handleDelete={handleDelete} SingleService={service}></ManageServiceDetails>)
                        }
                    </div>
                    :
                    <div>
                        <p className={theme === 'sunset' ? "text-lg font-semibold mb-3 text-center text-gray-100"
                            :
                            "text-lg font-semibold mb-3 text-center"
                        }>You have not added any service. Click the button to add service.</p>
                        <div className="flex justify-center">
                            <Link to='/add-service'>
                                <AwesomeButton>Add Service</AwesomeButton>
                            </Link>
                        </div>
                    </div>
            }
            <ToastContainer />
        </div>
    );
};

export default ManageService;