import {Card, CardHeader, CardBody, Image, Divider} from "@nextui-org/react";
import Link from "next/link";

const ProjectsSection = () => {
    return ( 
        <div className="min-h-screen flex flex-col items-center w-full pt-24 pb-12 snap-start scroll-container" id="projects">
            <h1 className="text-zinc-200 text-2xl text-center">Projects</h1>
            <p className="text-orange-300 text-sm mt-6">some cool stuff i&aposve built</p>
            <div className="w-11/12 mt-10 grid grid-cols-3 gap-6 z-0 h-dvh">
                <Card className="border border-zinc-800 bg-zinc-600 transform transition duration-500 hover:scale-105 hover:border-zinc-500" as={Link} href="https://github.com/Gateek-Chandak/Arena_Warrior">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Arena Warrior</h1>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
                <Card className="border border-zinc-800 bg-zinc-600 transform transition duration-500 hover:scale-105 hover:border-zinc-500 row-span-2" as={Link} href="https://github.com/Gateek-Chandak/Study-Bot">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Study-Bot</h1>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
                <Card className="border border-zinc-800 bg-zinc-500 transform transition duration-500 hover:scale-105 hover:border-zinc-500" as={Link} href="https://github.com/Gateek-Chandak/Colour_Switch_Remak">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Colour Switch Remake</h1>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
                <Card className="border border-zinc-800 bg-zinc-600 transform transition duration-500 hover:scale-105 hover:border-zinc-500 row-span-2" as={Link} href="https://workout-wizard-five.vercel.app">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Workout Wizard - Fitness Planner</h1>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
                <Card className="border border-zinc-800 bg-zinc-600 transform transition duration-500 hover:scale-105 hover:border-zinc-500 row-span-2" as={Link} href="https://github.com/Gateek-Chandak/Estate-Eagle">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Estate Eagle - Real Estate Forecaster</h1>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
                <Card className="border border-zinc-800 bg-zinc-600 transform transition duration-500 hover:scale-105 hover:border-zinc-500" as={Link} href="https://github.com/Gateek-Chandak/MonsterDash">
                    <CardHeader>
                        <h1 className="text-white text-center w-full">Monster Dash</h1>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
            </div>
        </div>
     );
}
 
export default ProjectsSection;