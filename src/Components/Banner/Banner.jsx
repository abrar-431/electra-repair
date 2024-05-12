import { Slide, Zoom } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import service7 from '../../assets/service_7.avif'
import './Banner.css'
import { AwesomeButton } from "react-awesome-button";
import { useState } from "react";

const Banner = () => {
    const [full, setFull] = useState(false);
    const handleLearnMore = () =>{
        setFull(!full);
    }
    return (
        <div className="flex md:flex-row flex-col md:gap-6 gap-2 mt-10">
            <div className="md:w-3/4 w-full">
                <TypeAnimation
                    splitter={(str) => str.split(/(?=)/)}
                    sequence={[
                        'Electra Repair - Your Trusted Electronic Item Repair Service',
                        500,
                        ''
                    ]}
                    className="border-l-4 pl-2 border-blue-800 md:text-2xl text-lg font-bold"
                    speed={70}
                    deletionSpeed={70}
                    repeat={Infinity}
                />
                <Slide damping={0.5}>
                    {
                        full?
                        <div className=" p-4">
                            <p className="mt-3 md:text-lg text-sm text-justify font-medium mb-5">Welcome to Electra Repair, your trusted destination for all your electronic device repair needs. With our team of skilled technicians, we offer fast, reliable, and professional service. Whether it is a cracked phone screen, a malfunctioning laptop battery, or any other electronic issue, we are here to help. Our commitment to quality ensures that your devices are in good hands. Trust Electra Repair for efficient solutions and get back to enjoying your devices hassle-free. Explore our comprehensive range of repair services tailored to meet your electronic device needs. From smartphones to laptops, tablets to TVs, we specialize in fixing a wide array of issues. With our expertise and dedication to excellence, we ensure your devices are restored to optimal functionality. Trust us for top-notch repairs and enjoy seamless performance from your favorite gadgets.</p>
                            <AwesomeButton onPress={handleLearnMore} className='rounded-lg mx-auto' type="secondary">See Less</AwesomeButton>
                        </div>
                        :
                        <div className=" p-4">
                            <p className="mt-3 md:text-lg text-sm text-justify font-medium mb-5">Welcome to Electra Repair, your trusted destination for all your electronic device repair needs. With our team of skilled technicians, we offer fast, reliable, and professional service. Whether it is a cracked phone screen, a malfunctioning laptop battery, or any other electronic issue, we are here to help. Our commitment to quality ensures that your devices are in good hands.</p>
                            <AwesomeButton onPress={handleLearnMore} className='rounded-lg mx-auto' type="secondary">See More</AwesomeButton>
                        </div>
                    }
                </Slide>
            </div>

            <div className="mx-auto md:w-1/4 w-full">
                <Zoom damping={0.6}>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={service7} alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/sysDx0G/service-7.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/qpzMVmr/service-8.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/9yp24db/service-9.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/1LXBvsw/service-004.jpg" alt="" /></SwiperSlide>
                    </Swiper>
                </Zoom>
            </div>

        </div>
    );
};

export default Banner;