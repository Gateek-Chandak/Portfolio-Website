import {Card, CardHeader, CardBody, Image, Divider, CardFooter} from "@nextui-org/react";
import Link from "next/link";

const ProjectsSection = () => {
    return ( 
        <div className="min-h-fit flex flex-col items-center w-full pt-24 pb-20 snap-start scroll-container " id="projects">
            <h1 className="text-zinc-200 text-2xl text-center">Projects</h1>
            <p className="text-zinc-400 text-sm mt-6">some cool stuff i&apos;ve built</p>
            <div className="w-10/12 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 z-0 h-fit">
                <Card className="border bg-zinc-800 bgdiamonds transform transition duration-500 hover:scale-110 z-10 border-blue-800 hover:border-gradient-right h-fit" as={Link} href="https://github.com/Gateek-Chandak/Study-Bot">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Study-Bot</h1>
                        <p className="text-zinc-400 text-xs">2024</p>
                    </CardHeader>
                    <CardBody className="px-5">
                        <Image className="border m-auto border-blue-200" src="/StudyBot.png" alt="Study Bot" width="full" height="auto"/>
                        <div className="w-full flex flex-row gap-3 mt-5 mb-2 justify-center">
                            <Image src="/TSicon.png" alt="Typescript" width="30px" height="auto"/>
                            <Image src="/NEXTicon.png" alt="Next" width="30px" height="auto" className="bg-zinc-200 border border-zinc-200"/>
                            <Image src="/REACTicon.png" alt="React" width="30px" height="auto"/>
                            <Image src="/NODEicon.png" alt="Node" width="30px" height="auto"/>
                            <Image src="/TAILWINDicon.png" alt="Tailwind" width="30px" height="auto"/>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="p-5">
                        <p className="text-zinc-300 text-center text-sm w-full">a tool that improves studying and research efficient with an interactive chat-bot that learns from articles</p>
                    </CardFooter>
                </Card>
                <Card className="border bg-zinc-700 bgdiamonds transform transition duration-500 hover:scale-110 z-10 border-green-800 hover:border-green-300 h-fit" as={Link} href="https://github.com/Gateek-Chandak/Estate-Eagle">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Estate Eagle - Real Estate Forecaster</h1>
                        <p className="text-zinc-400 text-xs">2024</p>
                    </CardHeader>
                    <CardBody className="px-5">
                        <Image className="border border-green-400" src="/Estate_Eagle.png" alt="Estate Eagle" width="full" height="auto"/>
                        <div className="w-full flex flex-row gap-3 mt-5 justify-center">
                            <Image src="/TSicon.png" alt="Typescript" width="30px" height="auto"/>
                            <Image src="/NEXTicon.png" alt="Next" width="30px" height="auto" className="bg-zinc-200 border border-zinc-200"/>
                            <Image src="/REACTicon.png" alt="React" width="30px" height="auto"/>
                            <Image src="/NODEicon.png" alt="Node" width="30px" height="auto"/>
                            <Image src="/TAILWINDicon.png" alt="Tailwind" width="30px" height="auto"/>
                            <Image src="/SUPABASEicon.png" alt="Supabase" width="30px" height="auto"/>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="p-5">
                        <p className="text-zinc-300 text-center text-sm w-full">comprehensive platform for tracking and forecasting real estate prices</p>
                    </CardFooter>
                </Card>
                <Card className="border bg-zinc-700 bgdiamonds transform transition duration-500 hover:scale-110 z-10 border-purple-800 hover:border-purple-500 h-fit" as={Link} href="https://workout-wizard-five.vercel.app">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Workout Wizard - Fitness Planner</h1>
                        <p className="text-zinc-400 text-xs">2024</p>
                    </CardHeader>
                    <CardBody className="px-5">  
                        <Image className="border border-purple-200" src="/Workout_Wizard.png" alt="Workout Wizard" width="full" height="auto"/>
                        <div className="w-full flex flex-row gap-3 mt-5 justify-center">
                            <Image src="/JSicon.png" alt="Javascript" width="30px" height="auto"/>
                            <Image src="/VITEicon.png" alt="Vite" width="30px" height="auto"/>
                            <Image src="/REACTicon.png" alt="React" width="30px" height="auto"/>
                            <Image src="/NODEicon.png" alt="Node" width="30px" height="auto"/>
                            <Image src="/TAILWINDicon.png" alt="Tailwind" width="30px" height="auto"/>
                            <Image src="/SUPABASEicon.png" alt="Supabase" width="30px" height="auto"/>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="p-5">
                        <p className="text-zinc-300 text-center text-sm w-full">simple and automated workout planner with AI generated workouts</p>
                    </CardFooter>
                </Card>
                <Card className="border bg-zinc-800 bgdiamonds transform transition duration-500 hover:scale-110 z-10 border-amber-800 hover:border-amber-500 h-fit" as={Link} href="https://github.com/Gateek-Chandak/Arena_Warrior">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Arena Warrior</h1>
                        <p className="text-zinc-400 text-xs">2021</p>
                    </CardHeader>
                    <CardBody className="px-5">
                        <Image className="border border-yellow-200" src="/ArenaWarrior.png" alt="Arena Warrior" width="full" height="auto"/>
                        <div className="w-full flex flex-row gap-3 mt-5 justify-center">
                            <Image src="/UNITYicon.png" alt="Unity" width="30px" height="auto" className="bg-zinc-300"/>
                            <Image src="/CSHARPicon.png" alt="C sharp" width="30px" height="auto"/>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="p-5">
                        <p className="text-zinc-300 text-center text-sm w-full">fast paced wave-based-game inspired by Super Smash Bros</p>
                    </CardFooter>
                </Card>
                <Card className="border bg-zinc-800 bgdiamonds transform transition duration-500 hover:scale-110 hover:z-10 border-red-800 hover:border-red-400 h-fit" as={Link} href="https://github.com/Gateek-Chandak/MonsterDash">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Monster Dash</h1>
                        <p className="text-zinc-400 text-xs">2020</p>
                    </CardHeader>
                    <CardBody className="px-5">
                        <Image className="border border-red-200" src="/MonsterDash.png" alt="Monster Dash" width="full" height="auto"/>
                        <div className="w-full flex flex-row gap-3 mt-5 justify-center">
                            <Image src="/UNITYicon.png" alt="Unity" width="30px" height="auto" className="bg-zinc-300"/>
                            <Image src="/CSHARPicon.png" alt="C sharp" width="30px" height="auto"/>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="p-5">
                        <p className="text-zinc-300 text-center text-sm w-full">endless 2D runner game with beautiful graphics and animations</p>
                    </CardFooter>
                </Card>
                <Card className="border bg-zinc-700 bgdiamonds transform transition duration-500 hover:scale-110 hover:z-10 border-yellow-800 hover:border-yellow-400 h-fit" as={Link} href="https://github.com/Gateek-Chandak/Colour_Switch_Remak">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Colour Switch Remake</h1>
                        <p className="text-zinc-400 text-xs">2019</p>
                    </CardHeader>
                    <CardBody className="px-5">
                        <Image className="border border-yellow-200" src="/ColourSwitch.png" alt="Colour Switch" width="full" height="auto"/>
                        <div className="w-full flex flex-row gap-3 mt-5 justify-center">
                            <Image src="/UNITYicon.png" alt="Unity" width="30px" height="auto" className="bg-zinc-300"/>
                            <Image src="/CSHARPicon.png" alt="C sharp" width="30px" height="auto"/>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="p-5">
                        <p className="text-zinc-300 text-center text-sm w-full">remake of a childhood favourite - Colour Switch!</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
     );
}
 
export default ProjectsSection;