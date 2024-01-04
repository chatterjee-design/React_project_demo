import { FaArrowDown } from "react-icons/fa";
import { FaPlusMinus } from "react-icons/fa6";
import profiles from '../assets/profiles.png'
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
            <section className=" text-white flex gap-8 md:items-center  justify-center py-[5rem]">
                <h1 className="md:text-4xl self-start text-lg">People <span style={gradientTextStyle}>similar to you</span></h1>
                <button className="flex rounded items-center justify-center md:px-5 md:py-3 py-[7px] px-[10px] bg-gradient-to-b from-[#A5219B] to-[#54ADFF]"><FaPlusMinus className="text-md" /> 10% <FaArrowDown className="text-md" /></button>
            </section>

            {/* bottom section */}
            <section className="flex items-center justify-center">
                <div className="text-white flex flex-wrap items-center justify-center gap-8 w-[100vw] ">
                    <div className="flex flex-col items-center justify-center md:m-10 gap-3">
                        <Card />
                        <p>Behavioral (27%)</p>
                        <p>🚺 34k · 🚹 41k · 🏳️‍🌈 1.5k</p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:m-10 gap-3">
                        <Card />
                        <p>Interests (6%)</p>
                        🚺 1300 · 🚹 2400 · 🏳️‍🌈 15
                    </div>
                    <div className="flex flex-col items-center justify-center md:m-10 gap-3">
                        <Card />
                        <p>Interests (6%)</p>
                        🚺 1300 · 🚹 2400 · 🏳️‍🌈 15
                    </div>
                    <div className="flex flex-col items-center justify-center md:m-10 gap-3">
                        <Card />
                        <p>Interests (6%)</p>
                        🚺 1300 · 🚹 2400 · 🏳️‍🌈 15
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EndSection