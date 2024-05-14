import { AwesomeButton } from 'react-awesome-button';
import Error from '../assets/error-01.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto mt-10 w-1/2 rounded-lg' src={Error} alt="Error-Not Found" />
            <div className="mt-6 flex justify-center">
                <Link to='/'><AwesomeButton className='rounded-lg' type="danger">Return to Home</AwesomeButton></Link>
            </div>
        </div>
    );
};

export default ErrorPage;