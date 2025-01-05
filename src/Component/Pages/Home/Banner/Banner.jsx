import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from "../../../../assets/Mountain-View-Deluxe.jpg"
import slide2 from "../../../../assets/queenroom.jpeg"
import slide3 from "../../../../assets/slider3.jpg"
import slide4 from "../../../../assets/simpleroom.jpg"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slide1} alt="" />
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md ">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Experience the pinnacle of hospitality at our hotel fair, where every moment is crafted to perfection, ensuring memories that last a lifetime.</p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-xl font-bold bg-rose-400 hover:bg-rose-500 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slide2} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md ">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Experience the pinnacle of hospitality at our hotel fair, where every moment is crafted to perfection, ensuring memories that last a lifetime.</p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-xl font-bold bg-rose-400 hover:bg-rose-500 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slide3} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md ">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Experience the pinnacle of hospitality at our hotel fair, where every moment is crafted to perfection, ensuring memories that last a lifetime.</p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-xl font-bold bg-rose-400 hover:bg-rose-500 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slide4} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md ">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Experience the pinnacle of hospitality at our hotel fair, where every moment is crafted to perfection, ensuring memories that last a lifetime.</p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-xl font-bold bg-rose-400 hover:bg-rose-500 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;