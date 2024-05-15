import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import ToDoDetails from "./ToDoDetails";
import { AwesomeButton } from "react-awesome-button";

const ServiceToDo = () => {
    const bookedServices = useLoaderData();
    const { user, theme } = useAuth();
    const toDoServices = bookedServices.filter(service => service.email === user.email);
    return (
        <div className="mt-10">
            {
                toDoServices.length > 0 ?
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                {
                    toDoServices.map(service=> <ToDoDetails singleService = {service} key={service._id}></ToDoDetails>)
                }
            </div> 
            :
            <div>
                <p className={theme==='sunset'?"text-lg font-semibold mb-3 text-center text-gray-100"
                    :
                    "text-lg font-semibold mb-3 text-center"
                }>You have no services to do now. Click the button to explore home page.</p>
                        <div className="flex justify-center">
                        <Link to='/'>
                            <AwesomeButton>Go To Home</AwesomeButton>
                        </Link>
                        </div>
            </div>
            }
        </div>
    );
};

export default ServiceToDo;