import Image from "next/image";

const SkillsSection = () => {
    return ( 
        <div className="min-h-screen pt-24 snap-start scroll-container" id="skills">
            <h1 className="text-zinc-200 text-2xl text-center">Skills</h1>
            <div className="flex flex-row w-full justify-between p-20">
                <div className="w-full text-center border-r border-r-zinc-500 flex flex-col gap-5 items-center justify-center">
                    <h1 className="text-zinc-200">Libraries/Frameworks</h1>
                    <div className="">
                        
                    </div>
                </div>
                <div className="w-full text-center border-r border-r-zinc-500">
                    <h1 className="text-zinc-200">Languages</h1>
                    <div>
                    </div>
                </div>
                <div className="w-full text-center">
                    <h1 className="text-zinc-200">Deployment/Version Control</h1>
                </div>
            </div>
        </div>
     );
}
 
export default SkillsSection;