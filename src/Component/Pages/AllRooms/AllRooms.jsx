import Card from "../../Card/Card";


const AllRooms = () => {
    return (
        <div className="py-24">
            <div className="pb-10">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                    Our Rooms
                </h1>

                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-rose-400 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-rose-400 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-rose-400 rounded-full"></span>
                </div>
            </div>
            <div>
                <Card></Card>
            </div>
        </div>
    );
};

export default AllRooms;