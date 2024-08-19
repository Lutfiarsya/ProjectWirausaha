import { List, X } from "phosphor-react"
import { useState } from "react"

const Navbar = ({Home, Menu, Contact}) => {
    const[burger, setBurger] = useState(false)
    const active = false
const changeMenu = () => {
    setBurger(!burger)
}

const HomeClick = () => {
    if(Home.current){
        Home.current.scrollIntoView({behavior: "smooth"})
    }
}
const MenuClick = () => {
    if(Menu.current){
        Menu.current.scrollIntoView({behavior: "smooth"})
    }
}

const ContactClick = () => {
    if(Contact.current){
        Contact.current.scrollIntoView({behavior: "smooth"})
    }
}


    return(
            <nav className="flex text-[#594545] flex-row items-center justify-center  md:justify-end mx-10 mt-10">
                <div  className={`flex flex-row items-center max-sm:bg-[#FFF8EA] max-sm:rounded-2xl max-sm:py-1 max-sm:shadow-[1px_2px_3px_2px_#594545] `}>
                    <button onClick={HomeClick} className="mx-8 text-lg font-bold font-[Lexend] transform hover:scale-110 hover:cursor-pointer transition duration-500">Home</button>
                    <button onClick={MenuClick} className="mx-8 text-lg font-bold font-[Lexend] transform hover:scale-110 hover:cursor-pointer transition duration-500">Menu</button>
                    <button onClick={ContactClick} className="mx-8 text-lg font-bold font-[Lexend] transform hover:scale-110 hover:cursor-pointer transition duration-500">Contact</button>
                </div>                    
            </nav>
    )
}

export default Navbar;