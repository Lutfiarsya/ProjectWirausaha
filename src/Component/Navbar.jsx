

const Navbar = ({Home, Menu, Contact}) => {

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
        <div className="flex flex-row justify-end items-center h-20">
            <nav className="flex text-[#594545] flex-row items-center justify-end mx-10 mt-1">
                <button onClick={HomeClick} className="mx-8 text-lg font-bold font-[Lexend] transform hover:scale-110 hover:cursor-pointer transition duration-500">Home</button>
                <button onClick={MenuClick} className="mx-8 text-lg font-bold font-[Lexend] transform hover:scale-110 hover:cursor-pointer transition duration-500">Menu</button>
                <button onClick={ContactClick} className="mx-8 text-lg font-bold font-[Lexend] transform hover:scale-110 hover:cursor-pointer transition duration-500">Contact</button>
            </nav>
        </div>
    )
}

export default Navbar;