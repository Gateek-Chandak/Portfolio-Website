const Header = () => {
    return ( 
        <div className="bgdiamonds bg-zinc-900 flex flex-row gap-5 text-zinc-400 px-14 pt-7 pb-5 sm:justify-start justify-center fixed w-full border-b border-b-zinc-800 z-50">
             <a href="#home" className="bg-transparent">
                <h1 className="transition ease-in-out duration-300 hover:text-orange-400">Home</h1>
            </a>
            <a href="#projects" className="bg-transparent">
                <h1 className="transition ease-in-out duration-300 hover:text-orange-400">Projects</h1>
            </a>
            {/* <a href="#skills" className="bg-transparent">
                <h1 className="transition ease-in-out duration-300 hover:text-gradient-middle">Skills</h1>
            </a> */}
            {/* <a href="#resume" className="bg-transparent">
                <h1 className="transition ease-in-out duration-300 hover:text-orange-400">Resume</h1>
            </a> */}
        </div>
     );
}
 
export default Header;