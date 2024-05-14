import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import ToDoDetails from "./ToDoDetails";

const ServiceToDo = () => {
    const bookedServices = useLoaderData();
    const {user} = useAuth();
    const toDoServices = bookedServices.filter(service=> service.email === user.email);
    console.log(toDoServices)
    return (
        <div className="mt-10">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                {
                    toDoServices.map(service=> <ToDoDetails singleService = {service} key={service._id}></ToDoDetails>)
                }
            </div> 
        </div>
    );
};

export default ServiceToDo;