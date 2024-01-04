import { FaEarthAmericas, FaGraduationCap } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

function Content() {
    return (
        <>
            <section className="bg-black p-[24px] text-white  ">
                <section className="flex items-center justify-center pb-12">
                    <div className="text-xl">
                        <h1>You, <span className=" text-gray-400">21</span></h1>
                        <h3 className=" text-gray-400">Female</h3>
                    </div>
                </section>
                <section className="flex flex-wrap items-start gap-4 justify-evenly pb-20">
                    <div className=" md:w-fit w-full self-start text-left flex flex-col gap-4 items-start justify-center">
                        <div className="flex gap-4 text-left">
                            <h1 className="text-[#A5219B] uppercase">FIRST  NAME</h1>
                            <h1>Jennifer</h1>
                        </div>
                        <div className="flex gap-4 text-left">
                            <h1 className="text-[#A5219B] uppercase">LAST  NAME</h1>
                            <h1>John</h1>
                        </div>
                        <div className="flex gap-4 text-left">
                            <h1 className="text-[#A5219B] uppercase">Birthday</h1>
                            <h1>7  May 2005</h1>
                        </div>
                        <div className="flex gap-4 text-left">
                            <h1 className="text-[#A5219B] uppercase">age</h1>
                            <h1 className=" text-gray-400">22</h1>
                        </div>
                    </div>
                    <div className="text-white md:w-fit w-full self-start text-left flex flex-col gap-4 items-start justify-center">
                        <div className="flex gap-4 text-left">
                            <h1 className="text-[#A5219B] uppercase">gender</h1>
                            <h1>Female</h1>
                        </div>
                        <div className="flex gap-4 text-left">
                            <h1 className="text-[#A5219B] uppercase">phone</h1>
                            <h1 className=" text-gray-400">+91 8283016334</h1>
                        </div>
                        <div className="flex gap-4 text-left">
                            <h1 className="text-[#A5219B] uppercase">email</h1>
                            <h1>jenni.john@gmail.com</h1>
                        </div>
                    </div>
                </section>
                <section className="flex text-xl items-center flex-col justify-center ">
                    <div className="flex gap-4 items-start flex-col md:w-fit w-full justify-center">
                        <div className="flex gap-8 items-center justify-center">
                            <FaEarthAmericas className=" text-gray-400"/>
                            <h1>San fransisco</h1>
                        </div>
                        <div className="flex gap-8 items-center justify-center">
                            <FaGraduationCap className=" text-gray-400"/>
                            <h1>Harvard</h1>
                        </div>
                        <div className="flex gap-8 items-center justify-center">
                            <MdOutlineWork className=" text-gray-400" />
                            <h1>Not yet</h1>
                        </div>
                        <div className="flex gap-8 items-center justify-center">
                            <FaRegSnowflake />
                            <h1 className=" text-gray-400">Tell everyone what's the most <br />
                                interesting thing about you?</h1>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Content