import { Link } from 'react-router-dom';
import './Promotion.css';

const Promotion = () => {
    return (
        <div className="promotion-item bg-fixed  text-center items-center  ">
            <div className='hero-overlay bg-opacity-60'>
                <div className="p-20 text-white">
                    <h4 className='text-xl mb-4'>Enjoy with your partner</h4>
                    <h3 className="text-4xl font-bold  mb-4">Honeymoon Package <br /> 50% Off</h3>
                    <Link to={'/rooms'}><button className="px-8 py-3 rounded-xl font-bold bg-rose-400 hover:bg-rose-500 text-xl mb-8">Book Now</button></Link>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                    <div>
                        <h1 className='text-6xl text-white bg-black'>00</h1>
                        <p className='text-xl text-white bg-black'>DAYS</p>
                    </div>
                    <div>
                        <h1 className='text-6xl text-white bg-black'>00</h1>
                        <p className='text-xl text-white bg-black'>HOURS</p>
                    </div>
                    <div>
                        <h1 className='text-6xl text-white bg-black'>00</h1>
                        <p className='text-xl text-white bg-black'>MINUTES</p>
                    </div>
                    <div>
                        <h1 className='text-6xl text-white bg-black'>00</h1>
                        <p className='text-xl text-white bg-black'>SECONDS</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;