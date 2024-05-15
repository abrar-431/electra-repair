import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { AwesomeButton } from "react-awesome-button";

const BookedService = () => {
    const services = useLoaderData();
    const { user , theme} = useAuth();
    const bookedServices = services.filter(service => service.useremail === user.email);

    return (
        <div className="mt-10">
            <div className="overflow-x-auto">
                <Helmet>
                    <title>Electric Repair | Booked Services</title>
                </Helmet>
                {bookedServices.length > 0 ?
                    <table className={theme==='sunset'?
                    "table text-gray-100"
                    :
                    "table"
                    }>
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Instruction</th>
                                <th>Date</th>
                                <th>Service Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookedServices.map((service, idx) =>
                                    <tr key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{service.service}</td>
                                        <td>{service.price}</td>
                                        <td>{service.instruction}</td>
                                        <td>{service.date.slice(0, 10)}</td>
                                        <td>{service.serviceStatus}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                    <div className={theme==='sunset'?
                        "text-gray-100"
                        :
                        ""
                    }>
                        <p className="text-lg font-semibold mb-3 text-center">You have no booked services, you can explore services.</p>
                        <div className="flex justify-center">
                        <Link to='/services'>
                            <AwesomeButton>Explore Services</AwesomeButton>
                        </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default BookedService;