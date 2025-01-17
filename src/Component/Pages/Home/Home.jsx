
import Banner from "./Banner/Banner";
import Card from "../../Card/Card";
import { Map, Marker } from "pigeon-maps";
import Promotion from "../../Promotion/Promotion";
import GoldenMemory from "./GoldenMemory/GoldenMemory";

const Home = () => {
    return (
        <div className="py-24 px-3 mx-auto">
            <div>
                <Banner></Banner>
            </div>
            <div className="pt-24">
                <div className="pb-10">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Featured Rooms
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
            <div className="pt-24">
                <div className="pb-10">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Promotions Section
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-rose-400 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-rose-400 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-rose-400 rounded-full"></span>
                    </div>
                </div>
                <div>
                    <Promotion></Promotion>
                </div>
            </div>

            <div className="pt-24">
                <div className="pb-10">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Golden Memories
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-rose-400 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-rose-400 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-rose-400 rounded-full"></span>
                    </div>
                </div>
                <GoldenMemory></GoldenMemory>
            </div>

            <div className="pt-24">
                <div className="pb-10">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Our Location
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-rose-400 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-rose-400 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-rose-400 rounded-full"></span>
                    </div>
                </div>
                <div className="px-3">
                    <Map height={400} defaultCenter={[23.8053, 90.3589]} defaultZoom={11}>
                        <Marker width={50} anchor={[23.8053, 90.3589]} />
                    </Map>
                </div>
            </div>
        </div>
    );
};

export default Home;