import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { FaLandmark, FaMoneyCheckDollar } from 'react-icons/fa6';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const ManageServiceDetails = ({ SingleService, handleDelete }) => {
    const { _id, service, area, image, price, description } = SingleService;
    const {theme} = useAuth();
    
    return (
        <div className={theme==='sunset'?
        'border-gray-200 border-2 p-4 rounded-xl flex flex-col text-gray-100'
        :
        'border-gray-200 border-2 p-4 rounded-xl flex flex-col'
        }>
            <div className='flex-grow'>
                <img className='rounded-lg mx-auto w-3/4' src={image} alt={service} />
                <h2 className="text-2xl font-bold my-3">{service}</h2>
                <div className='my-4 flex justify-between'>
                    <div className='flex items-center'>
                        <FaMoneyCheckDollar className='text-lg mr-2'></FaMoneyCheckDollar>
                        <p>$ {price}</p>
                    </div>
                    <div className='flex items-center'>
                        <FaLandmark className='text-lg mr-2'></FaLandmark>
                        <p>{area}</p>
                    </div>
                </div>
                <p className='mt-2 text-lg font-medium'>{description}</p>
                <div className='flex justify-center mt-5'>
                    <div className='flex gap-4'>
                        <Button onClick={()=>handleDelete(_id)} variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                        <Link to={`/update-service/${_id}`}>
                            <Button variant="outlined" startIcon={<EditIcon />}>
                                Update
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageServiceDetails;
ManageServiceDetails.propTypes = {
    SingleService: PropTypes.object,
    handleDelete: PropTypes.func,
}