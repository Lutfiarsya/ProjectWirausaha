import { useEffect, useState } from 'react';
import data from '../data.json'
import Perkedel from '../Assets/Perkedel-Object.png'
import Risol from '../Assets/Risol-Object.png'
import TelurAsin from '../Assets/telur asin rebus.png'
import TelurRebus from '../Assets/Telur rebus.png'



const ToppingFood = () => {
const dataMenu = data.product.additional_food

const extraArray = [Risol, TelurAsin, TelurRebus, Perkedel]

const mapArray = extraArray.map(i => i)


return(
    <div>
        {data && (
            <div className='flex flex-col items-center p-4 h-[600px] mt-12 max-sm:mt-0 max-sm:mb-24'>
                <h1 className='text-7xl max-sm:text-4xl text-[#594545] font-bold font-[Lexend]'>Extra</h1>
                <div className='grid grid-cols-2 gap-24 mt-24 max-sm:mt-8 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:grid-cols-1 max-sm:gap-8'>
                {dataMenu.map((items, index) => {
                    return(
                        <div className='bg-[#FFF8EA] w-[500px] max-sm:w-80 max-sm:h-32 h-36 rounded-r-full rounded-l-full flex flex-row shadow-[3px_2px_6px_2px_#594545] rounded-2xl transform hover:scale-110 hover:cursor-pointer transition duration-500'>
                            <div key={items.data.id} className='max-sm:w-36 max-sm:h-36 bg-black w-52 h-52 flex justify-center items-center rounded-full mt-[-22px] ml-[-10px] max-sm:mt-[-10px]'>
                                <img 
                                 src={mapArray[index]}    
                                 alt='no Image'
                                 className='max-sm:w-36 max-sm:h-36 w-52 h-52 object-cover rounded-full border-solid border-[#594545] border-4'
                                />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='font-bold text-[#594545] text-3xl ml-4 mt-6 max-sm:text-xl font-[Lexend]'>{items.data.name}</h1>
                                <h1 className='font-bold text-[#594545] text-3xl ml-4 mt-6 max-sm:text-xl font-[Lexend]'>Rp{items.data.Price}/Pcs</h1>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )}
    </div>
)
};

export default ToppingFood;

