

const MyBooking = () => {
    return (
        <div className="py-24 px-3 mx-auto">
            <h1 className="text-4xl text-center font-bold mb-10">No Booking Room</h1>
            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Rooms Title</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Date</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Price</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Room Size</span>
                                            </button>
                                        </th>


                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Actions
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Review
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>

                                    <tr>
                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            
                                        </td>

                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            
                                        </td>

                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            
                                        </td>
                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            
                                        </td>

                                        <td className='px-4 py-4 text-3xl whitespace-nowrap flex items-center gap-4 '>
                                        </td>

                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            <button className="bg-rose-500 text-white font-semibold px-4 py-3 rounded hover:bg-rose-600 duration-300">Add Review</button>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;