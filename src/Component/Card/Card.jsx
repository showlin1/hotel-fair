import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch(`./roomsdata.json`)
            .then(res => res.json())
            .then(data => {
                setRooms(data);
            })
    }, [])

    return (
        <div >
            <Link to={`/roomDetails`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        rooms.map(room => (<div key={room.id} >
                            <div >
                                <div className='border-2 border-gray-200 pt-5 pb-7 pl-4 pr-4 '>
                                    <div className="relative h-72">
                                        <img className='h-72 w-full object-cover object-center' src={room.room_images} alt="" />
                                        <div className="absolute top-0 w-full bg-black bg-opacity-30 h-full">
                                            <div className='bg-rose-500 p-3 flex items-center justify-between'>
                                                <h1 className="font-bold text-xl text-white ">{room.availability}</h1>
                                                <h1 className="font-bold text-xl text-white ">
                                                    $ {room.price_per_night}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='py-3'>
                                        <h1 className='text-2xl font-bold text-black'>{room.description}</h1>
                                    </div>
                                    <div className='float-end flex items-center text-rose-500 gap-3 font-bold text-xl hover:text-rose-600 duration-300 transition'>
                                        <button>View Details</button>
                                        <FaArrowRightLong></FaArrowRightLong>
                                    </div>
                                </div>
                            </div>
                        </div>))
                    }
                </div>

            </Link >

        </div >
    );
};

export default Card;