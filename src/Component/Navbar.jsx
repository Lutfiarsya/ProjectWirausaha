const Navbar = () => {
    return(
        <div className="flex flex-row justify-end items-center h-20">
            <nav className="flex text-[#594545] flex-row items-center justify-end mx-10 mt-1">
                <button className="mx-8 text-lg font-bold font-[Lexend]">Home</button>
                <button className="mx-8 text-lg font-bold font-[Lexend]">Menu</button>
                <button className="mx-8 text-lg font-bold font-[Lexend]">Contact</button>
            </nav>
        </div>
    )
}

export default Navbar;