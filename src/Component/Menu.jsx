import data from '../data.json'
const mapping = data.product.main_food


const Menu = () => {
    return(
        <div className='w-full flex flex-col items-center '>
            <h1 className='text-6xl font-bold font-[Lexend]'>Our <span className='text-[#594545]'>Menu</span></h1>
            {data && (
                <div className='grid grid-cols-4 gap-6 w-[90%] h-96 mt-6'>
                     {mapping.map((items) => {
                    return(
                      <div className='bg-[#FFF8EA] shadow-[3px_2px_6px_2px_#594545] rounded-2xl h-[670px] relative'>
                          <div className='bg-black w-44 h-44 m-auto my-6 rounded-full'>
                            {/* <img 
                            src={items.data.Image}
                            width={50}
                            height={50}
                            /> */}
                          </div>
                          <div className='flex flex-col w-[90%] ml-4'>
                          <h1 className='font-bold text-[#594545] text-4xl font-[Lexend] h-16'>{items.data.name}</h1>
                          <h2 className='text-lg font-bold mt-6 text-[#815B5B]'>Contain:</h2>
                            {items.data.ingridients.map((items) => {
                                return(
                                    <ul>
                                        <li className=' text-md font-[Kufam] text-[#815B5B]'>- {items}</li>
                                    </ul>
                                )
                            })}
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