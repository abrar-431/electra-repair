import { Bounce, Fade} from "react-awesome-reveal";
import useAuth from "../Hooks/useAuth";

const Faq = () => {
    const {theme} = useAuth();
    return (
        <div className=" my-5 space-y-3">
            <div className={theme==='sunset'?"collapse collapse-plus bg-base-200 text-gray-100":"collapse collapse-plus bg-base-200"}>
                <input type="radio" name="my-accordion-3" defaultChecked />
                <Bounce delay={500} direction="top"><h2 className="text-center mx-auto md:w-1/2 w-full md:text-2xl text-lg font-bold">Frequently Asked Questions (FAQ)</h2></Bounce>
                <hr className='w-1/6 mx-auto mt-2 bg-blue-800 border-0 h-1 rounded-full' />
            <Fade delay={500}>
                <p className="font-medium text-lg my-3 md:w-3/4 w-full mx-auto text-center">Got questions? We have got answers! Explore our comprehensive FAQ section to find solutions to common queries about our electronic device repair services. From repair durations to warranty coverage, payment options to technician certifications, we have compiled a list of frequently asked questions to provide you with all the information you need. At Electra Repair, transparency and customer satisfaction are our top priorities, and our FAQ section is designed to address any concerns you may have. Can not find the answer you are looking for? Do not hesitate to reach out to our friendly team for personalized assistance. Your electronic devices are in good hands with Electra Repair!</p>
            </Fade>
            </div>
            <div className={theme==='sunset'?"collapse collapse-plus bg-base-200 text-gray-100":"collapse collapse-plus bg-base-200"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Do you offer any warranty on repairs?
                </div>
                <div className="collapse-content">
                    <p>Yes, we stand behind our repairs with a warranty. We offer a standard warranty period of 90 days on parts and labor. If you experience any issues with your repaired device within this period, simply bring it back to us, and we will take care of it.</p>
                </div>
            </div>
            <div className={theme==='sunset'?"collapse collapse-plus bg-base-200 text-gray-100":"collapse collapse-plus bg-base-200"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can you repair water-damaged devices?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! We specialize in water damage restoration for various electronic devices. Our technicians utilize advanced techniques and equipment to salvage water-damaged devices and restore them to full functionality. However, the success of the repair depends on the extent of the damage and how quickly you bring the device to us.</p>
                </div>
            </div>
            <div className={theme==='sunset'?"collapse collapse-plus bg-base-200 text-gray-100":"collapse collapse-plus bg-base-200"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are your technicians certified?
                </div>
                <div className="collapse-content">
                    <p>Yes, our technicians are highly trained and certified professionals with extensive experience in electronic device repair. They undergo regular training to stay updated on the latest repair techniques and technologies, ensuring that your devices are in capable hands.</p>
                </div>
            </div>
            <div className={theme==='sunset'?"collapse collapse-plus bg-base-200 text-gray-100":"collapse collapse-plus bg-base-200"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Do you provide pickup and delivery services?
                </div>
                <div className="collapse-content">
                    <p>At Electra Repair, we understand that convenience is key. That is why we offer pickup and delivery services for our customers within a certain radius. Simply schedule an appointment, and our team will pick up your device, perform the necessary repairs, and deliver it back to you once it is ready.</p>
                </div>
            </div>
            <div className={theme==='sunset'?"collapse collapse-plus bg-base-200 text-gray-100":"collapse collapse-plus bg-base-200"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can you repair devices from all manufacturers?
                </div>
                <div className="collapse-content">
                    <p>Yes, we have experience repairing devices from a wide range of manufacturers, including Apple, Samsung, Google, LG, and more. Whether you have a smartphone, tablet, laptop, or other electronic device, our skilled technicians can diagnose and repair issues efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;