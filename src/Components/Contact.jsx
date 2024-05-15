import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hooks/useAuth";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
    const { theme } = useAuth();
    const handleContact = e => {
        e.preventDefault();
        toast('Thank you for contacting us')
    }

    return (
        <div id="contact" className="my-5">
            <div className="hero min-h-screen bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Slide damping={0.5} direction="right">
                        <div className="text-center lg:text-left">
                            <h1 className={theme === 'sunset' ? "md:text-4xl text-xl font-bold text-gray-100" : "md:text-4xl text-xl font-bold"}>Contact Us!</h1>
                            <img className="rounded-lg mt-4" src="https://i.ibb.co/y8vyDVL/turquoise-colored-pen-mouse-fern-leaves-push-pins-wooden-surface.jpg" alt="" />
                        </div>
                    </Slide>
                    <Slide damping={0.5}>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleContact} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered input-info" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input input-bordered input-info" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message</span>
                                    </label>
                                    <textarea className="textarea textarea-info textarea-lg" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Slide>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Contact;