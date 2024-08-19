import data from '../data.json'
import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Menu = ({Menu}) => {
  const mapping = data.product.main_food

    return(
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-7xl max-sm:text-4xl font-bold font-[Lexend]'>Our <span className='text-[#594545]'>Menu</span></h1>
            {data &&(
                <div className='grid max-sm:w-[350px] max-sm:h-[450px] max-sm:items-center max-sm:bg-green-400 max-sm:rounded-xl grid-cols-4 max-sm:flex max-sm:flex-row gap-6 w-[90%] max-sm:w-[300px] h-96 mt-6 max-sm:overflow-x-scroll max-sm:overscroll-x-contain' ref={Menu}>
                     {mapping.map((items) => {
                       return(  
                         <div className='bg-[#FFF8EA] shadow-[3px_2px_6px_2px_#594545] rounded-2xl h-[670px] max-sm:h-[370px] max-sm:px-10 transform hover:scale-110 hover:cursor-pointer transition duration-500 max-sm:ml-10'>
                          <div className='bg-black w-44 h-44 m-auto my-6 max-sm:mt-8 rounded-full'>
                            {/* <img 
                            src={items.data.Image}
                            width={50}
                            height={50}
                            /> */}
                          </div>
                          <div className='flex flex-col w-[90%] ml-4'>
                          <h1 className='font-bold text-[#594545] text-4xl max-sm:text-xl font-[Lexend] h-16'>{items.data.name}</h1>
                          <h2 className='text-lg max-sm:text-sm z-10 font-bold mt-6 text-[#815B5B]'>Contain:</h2>
                              <div>
                                <ul>
                                {items.data.ingridients.map((items, index) => {
                                  return(
                                    <li key={index} className='max-sm:text-sm text-md font-[Kufam] text-[#815B5B]'>- {items}</li>
                                    )
                                  })}
                                  </ul>
                              </div>
                            <div className='w-full absolute bottom-0 bg-[#9E7676] left-0 h-12 rounded-b-xl'>
                            <h1 className='text-white font-bold text-2xl text-center mt-2 ml-1 text-[#594545]'>Rp{items.data.Price}</h1>
                            </div>
                          </div>
                      </div>
                    )
                  })}
                </div>
            )}
        </div>
    )
}

export default Menu;