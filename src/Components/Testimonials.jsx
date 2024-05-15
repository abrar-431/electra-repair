import useAuth from '../Hooks/useAuth';
import review1 from '../assets/review-1.webp'
import review2 from '../assets/review-2.webp'
import review3 from '../assets/review-3.webp'
import review4 from '../assets/review-4.webp'
import { motion } from 'framer-motion';
const Testimonials = () => {
    const { theme } = useAuth();
    return (
        <div className='mt-8'><motion.h2
            initial={{ opacity: 1, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={theme === 'sunset' ? "md:text-2xl text-lg border-l-blue-800 border-l-4 pl-2 font-bold text-gray-100"
                : "md:text-2xl text-lg border-l-blue-800 border-l-4 pl-2 font-bold"
            }>Testimonials</motion.h2>
            <motion.p
                initial={{ opacity: 1, translateX: -100 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8, delay: 2 * 0.1 }}
                className={theme === 'sunset' ? "font-medium text-lg my-3 text-gray-100" : "font-medium text-lg my-3"}>Got questions? We have got answers! Explore our comprehensive FAQ section to find solutions to common queries about our electronic device repair services. From repair durations to warranty coverage, payment options to technician certifications, we have compiled a list of frequently asked questions to provide you with all the information you need. At Electra Repair, transparency and customer satisfaction are our top priorities, and our FAQ section is designed to address any concerns you may have. Can not find the answer you are looking for? Do not hesitate to reach out to our friendly team for personalized assistance. Your electronic devices are in good hands with Electra Repair!</motion.p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <motion.div className='bg-gray-600 rounded-xl lg:p-16 md:p-10 p-6 text-white'
                    initial={{ opacity: 0, translateX: -100, translateY: -100 }}
                    whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <p className="text-lg font-medium">“ElectraRepair has quickly become our go-to provider for all of our electrical repair needs. Their team of experts is always professional and courteous, and their quality of work is exceptional.”</p>
                    <div className='mt-3 flex gap-4 items-center'>
                        <img className='w-1/3 rounded-full' src={review1} alt="" />
                        <div>
                            <h2 className="text-lg font-semibold">Brian Davis</h2>
                            <p className='font-medium mt-1'>CMO, Trendsetter Styles</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-600 rounded-xl lg:p-16 md:p-10 p-6 text-white'
                    initial={{ opacity: 0, translateX: -100, translateY: -100 }}
                    whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.4, delay: 2 * 0.2 }}
                >
                    <p className="text-lg font-medium">“We were impressed with the level of expertise and knowledge displayed by the team at ElectraRepair. They were able to quickly diagnose and fix our electrical issue, and we couldn’t be happier with the results.”</p>
                    <div className='mt-3 flex gap-4 items-center'>
                        <img className='w-1/3 rounded-full' src={review2} alt="" />
                        <div>
                            <h2 className="text-lg font-semibold">Michael Lee</h2>
                            <p className='font-medium mt-1'>Director, The Online Emporium</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-600 rounded-xl lg:p-16 md:p-10 p-6 text-white'
                    initial={{ opacity: 0, translateX: -100, translateY: -100 }}
                    whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.4, delay: 3 * 0.2 }}
                >
                    <p className="text-lg font-medium">“The booking process was quick and easy, and the team at ElectraRepair was able to schedule our repair appointment at a time that was convenient for us. The repairs were completed quickly and to our satisfaction.”</p>
                    <div className='mt-3 flex gap-4 items-center'>
                        <img className='w-1/3 rounded-full' src={review3} alt="" />
                        <div>
                            <h2 className="text-lg font-semibold">Mark Johnson</h2>
                            <p className='font-medium mt-1'>Marketing Director, Acme Solutions</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-600 rounded-xl lg:p-16 md:p-10 p-6 text-white'
                    initial={{ opacity: 0, translateX: -100, translateY: -100 }}
                    whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.4, delay: 4 * 0.2 }}
                >
                    <p className="text-lg font-medium">“ElectraRepair has exceeded our expectations with their quality of work and exceptional customer service. We would highly recommend them to anyone in need of electrical repairs or services.”</p>
                    <div className='mt-3 flex gap-4 items-center'>
                        <img className='w-1/3 rounded-full' src={review4} alt="" />
                        <div>
                            <h2 className="text-lg font-semibold">Sarah Wilson</h2>
                            <p className='font-medium mt-1'>Founder, Greenly Technologies</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Testimonials;