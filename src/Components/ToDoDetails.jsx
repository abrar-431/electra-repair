import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaCalendarDays } from 'react-icons/fa6';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import useAuth from '../Hooks/useAuth';

const ToDoDetails = ({ singleService }) => {
    const { _id, service, image, instruction, date, serviceStatus, username } = singleService;
    const [serviceStat, setServiceStatus] = useState(serviceStatus);
    const {theme} = useAuth();

    const handleServiceStatus = (id, status) =>{
        axios.patch(`http://localhost:5000/booked-services/${id}`, {status})
        .then(res=>{
            if(res.data.modifiedCount > 0){
                toast('Service status updated successfully!');
                setServiceStatus(status);
            }
        })
    }
    return (
        <div>
            <details className={theme==='sunset'? "dropdown p-4 max-w-[345px] text-center text-gray-100" : "dropdown p-4 max-w-[345px] text-center"}>
                <summary className="m-1 btn">Change Service Status</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleServiceStatus(_id, 'Pending')}><a>Pending</a></li>
                    <li onClick={()=>handleServiceStatus(_id, 'Working')}><a>Working</a></li>
                    <li onClick={()=>handleServiceStatus(_id, 'Completed')}><a>Completed</a></li>
                </ul>
            </details>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={service}
                />
                <CardContent className='p-4'>
                    <Typography gutterBottom variant="h5" component="div">
                        {service}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Instruction: {instruction}
                    </Typography>
                </CardContent>
                <p className='text-lg font-medium my-2 p-4'>Service taken by, {username}</p>
                <div className='flex items-center p-4'>
                    <FaCalendarDays className='text-lg mr-2'></FaCalendarDays>
                    <p>{date}</p>
                </div>
                <p className='text-xl font-bold text-blue-600 p-4'>Service Status : {serviceStat}</p>
            </Card>
            <ToastContainer/>
        </div>
    );
};

export default ToDoDetails;
ToDoDetails.propTypes = {
    singleService: PropTypes.object,
}