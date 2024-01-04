import { FaArrowDown } from "react-icons/fa";
import { FaPlusMinus } from "react-icons/fa6";
import Card from "./Card";

function EndSection() {
    const gradientTextStyle = {
        background: '-webkit-linear-gradient(left, #DB519E, #697EFC)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    }
    return (
        <div className="bg-black p-[24px]">
            
            {/* heading section */}
            <section className=" text-white flex md:gap-8 gap-3 md:items-center font-semibold md:justify-center py-[5rem]">
                <h1 className="md:text-4xl self-start text-2xl">People <span style={gradientTextStyle}>similar to you</span></h1>
                <button className="flex rounded items-center justify-center md:px-5 md:py-3 py-[7px] px-[10px] bg-gradient-to-b from-[#A5219B] to-[#54ADFF]"><FaPlusMinus className="text-md" /> 10% <FaArrowDown className="text-md" /></button>
            </section>

            {/* bottom section */}
            <section className="flex items-center justify-center">
                <div className="text-white flex flex-wrap items-center justify-between gap-11 w-[100vw] ">
                    <div className="flex text-xs flex-col items-center justify-center md:m-10 gap-4">
                        <Card />
                        <p>Behavioral (27%)</p>
                        <p className=" text-gray-400">🚺 34k · 🚹 41k · 🏳️‍🌈 1.5k</p>
                    </div>
                    <div className="flex text-xs flex-col items-center justify-center md:m-10 gap-4">
                        <Card />
                        <p>Interests (6%)</p>
                        <p className=" text-gray-400">🚺 1300 · 🚹 2400 · 🏳️‍🌈 15</p>
                    </div>
                    <div className="flex text-xs flex-col items-center justify-center md:m-10 gap-4">
                        <Card />
                        <p>Interests (6%)</p>
                        <p className=" text-gray-400">🚺 1300 · 🚹 2400 · 🏳️‍🌈 15</p>
                    </div>
                    <div className="flex text-xs flex-col items-center justify-center md:m-10 gap-4">
                        <Card />
                        <p>Interests (6%)</p>
                        <p className=" text-gray-400">🚺 1300 · 🚹 2400 · 🏳️‍🌈 15</p>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default EndSection