import Header from "./Header";

import Link from "next/link";

const HeroPage = () => {
    return ( 
        <div className="flex h-screen flex-col items-center w-full snap-start scroll-container" id="home">
            <Header />
            <h1 className="px-40 mt-52 text-2xl text-zinc-200 mb-14">
                Gateek Chandak - <span className="bg-gradient-to-r from-gradient-left via-gradient-middle to-gradient-right text-transparent bg-clip-text">Software Developer.</span>
            </h1>   
            <div className="px-40 flex flex-col items-center gap-4 w-9/12 text-zinc-300 text-lg">
                <p className="text-md">currently...</p>
                <p className="">
                    <span className="font-bold">Studying </span><span className="font-bold text-gradient-middle">Computer Science</span> and <span className="font-bold text-gradient-middle">Finance</span> @ <span className="font-bold">University of Waterloo</span>.
                </p>
                <p>
                <span className="font-bold">Developing</span> software to help the UW student community @ <span className="font-bold text-gradient-middle">UW Code Labs</span>
                </p>
                <p className="m-8 text-zinc-100">Looking for <span className="font-bold">Winter 2025 </span>internships.</p>

                <div className="flex flex-row justify-center w-full gap-5 p-6">
                <Link href="https://www.linkedin.com/in/gateek-chandak" target="_blank" className="text-zinc-600 transition ease-in-out duration-300 hover:text-gradient-middle">
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </Link>
                <Link href="https://github.com/Gateek-Chandak" target="_blank" className="text-zinc-600 transition ease-in-out duration-300 hover:text-gradient-middle">
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </Link>
                </div>
                <p className="text-zinc-400 text-sm">chandakgateek@gmail.com</p>
            </div>
            <div className="relative -bottom-28 text-white">
                <svg fill="gray" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.787 511.787"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213 c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333 C512.827,136.693,512.827,129.867,508.667,125.707z"></path> </g> </g> </g></svg>
            </div>
           
        </div>
     );
}
 
export default HeroPage;