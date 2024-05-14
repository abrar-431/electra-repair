import axios from "axios";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import ManageServiceDetails from "./ManageServiceDetails";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";

const ManageService = () => {
    const [services, setServices] = useState([]);
    const { user } = useAuth();
    const url = `http://localhost:5000/services?email=${user.email}`;
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
                    axios.delete(`http://localhost:5000/services/${id}`)
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
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {
                services.map(service => <ManageServiceDetails key={service._id} handleDelete={handleDelete} SingleService={service}></ManageServiceDetails>)
            }
            <ToastContainer />
        </div>
    );
};

export default ManageService;