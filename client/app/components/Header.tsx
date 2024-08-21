const Header = () => {
    return ( 
        <div className="flex flex-row gap-5 text-zinc-400 px-14 pt-7 pb-5 ml-auto fixed bg-zinc-900 w-full border-b border-b-zinc-800">
             <a href="#home">
                <h1 className="transition ease-in-out duration-300 hover:text-gradient-middle hover:underline">Home</h1>
            </a>
            <a href="#projects">
                <h1 className="transition ease-in-out duration-300 hover:text-gradient-middle hover:underline">Projects</h1>
            </a>
            <a href="#tech-stack">
                <h1 className="transition ease-in-out duration-300 hover:text-gradient-middle hover:underline">Tech Stack</h1>
            </a>
            <a href="#resume">
                <h1 className="transition ease-in-out duration-300 hover:text-gradient-middle hover:underline">Resume</h1>
            </a>
        </div>
     );
}
 
export default Header;