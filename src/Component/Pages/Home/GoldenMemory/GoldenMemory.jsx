import React from 'react';
import image from '../../../../assets/scenery.jpg';
import image1 from '../../../../assets/scenery1.jpg';
import image2 from '../../../../assets/scenery2.jpg';
import image3 from '../../../../assets/scenery3.jpg';
const GoldenMemory = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div>
                    <h1 className='text-xl mb-4 text-rose-500'>AMELIA ISLAND, PANAMA</h1>
                    <h3 className='text-5xl'>Panama's Finest Hotel. Make Your Golden Memories.</h3>
                </div>
                <div>
                    <img src={image} alt="Image" />
                </div>
                <div>
                    <p className='mb-4'>Make memories at Hotel Fair, where southern charm, magnificent scenery and casually elegant surrounding
                        exemplify the gentle ambience of this barrier island's luxury swimming pull front resort.
                    </p>
                    Hotel Fair is the perfect place to feed your spirit. With recently renovated rooms and a bolder focus on cousine culture & more
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <img src={image} alt="Image" />
                <img src={image1} alt="Image" />
                <img src={image2} alt="Image" />
                <img src={image3} alt="Image" />
            </div>
        </div>
    );
};

export default GoldenMemory;