import cover from '../../../assets/contactinfo.jpg'
import reception from '../../../assets/reception.jpg'
import family1 from '../../../assets/family1.jpg'
import family2 from '../../../assets/family2.jpg'
import { FaBuilding } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="py-24 px-3 container mx-auto">
            <div className='relative'>
                <img src={cover} className='w-full h-72' alt="" />
                <div className='absolute bottom-0 w-full h-full text-center py-10 bg-black bg-opacity-45 '>
                    <h1 className="text-5xl text-center font-bold text-white">About Us</h1>
                </div>
            </div>
            <section>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-16'>
                    <div>
                        <h1 className='text-3xl font-bold mb-4'>---OUR HISTORY</h1>
                        <p className='mb-4'>Welcome to Hotel Fair, where comfort meets luxury in the heart of City.
                            Since our doors first opened in Year, we have been committed to providing
                            exceptional service, comfortable accommodations, and unforgettable
                            experiences for all our guests.</p>
                        <p className='mb-4'>Our hotel offers the perfect blend of modern amenities and classic elegance.
                            Whether you're here for business, leisure, or a special event,
                            we provide everything you need for a relaxing and enjoyable stay.</p>
                        <p className='mb-4'>At Hotel Fair, we understand that every guest is unique.
                            That's why we offer a range of room options, from cozy singles
                            to spacious suites, all designed with your comfort in mind.
                            Our attentive staff is always available to assist with personalized requests,
                            ensuring your time with us is nothing short of spectacular.</p>
                    </div>
                    <div>
                        <img src={reception} height='1000px' width='1800px' alt="" />
                    </div>
                </div>
                <div className='py-16'>
                    <h1 className='text-4xl font-bold text-gray-900 text-center '>Spend Happy Holidays <br />
                        With Us</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='grid grid-cols-2 transition-all gap-6'>
                        <div className='text-center space-y-3 p-5 hover:bg-rose-500 duration-300 hover:text-white'>
                            <FaBuilding className='mx-auto text-5xl'></FaBuilding>
                            <h1 className='text-2xl font-bold'>Cozy Room</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                        <div>
                            <img src={family1} alt="" />
                        </div>
                        <div>
                            <img src={family2} alt="" />
                        </div>
                        <div className='text-center space-y-3 hover:bg-rose-500 duration-300 hover:text-white p-5'>
                            <MdDiscount className='mx-auto text-5xl'></MdDiscount>
                            <h1 className='text-2xl font-bold '>Special Offers</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-6xl font-bold text-rose-500'>Unwind A Hotel Booking Agency</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <Link to='/rooms'>
                            <button className='border-2 border-rose-500 text-rose-500 hover:bg-rose-500 duration-300 transition hover:text-white text-xl font-bold px-6 py-3'>View Our Rooms</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;