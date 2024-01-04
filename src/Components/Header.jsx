import profilePic from '../assets/profile.png'
import profileEffect from '../assets/Group.png'
import profileEffect2 from '../assets/smallvector.png'
import { FaArrowLeft } from "react-icons/fa6";


function Header() {
  //style for the boder
  const borderStyle = {
    background: 'linear-gradient(black, black) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box',
    borderRadius: '20px',
  }
  return (
    <>
      <section className='bg-black min-h-[58vh] w-screen  ' >
        <div className='backdrop-brightness-[50%] min-h-[58vh]'>

          {/* header section */}
          <header className='flex justify-between h-[40vh] bg-background pt-10 md:px-10 px-4 bg-no-repeat bg-center bg-cover'>
            <FaArrowLeft className='text-white text-2xl' />
            <div className='flex gap-[10px] text-sm sm:tex-md justify-end h-fit flex-wrap items-start' >
              <button className=' rounded-[20px] py-[10px] px-[20px] bg-white text-black'>Get more accurate results</button>
              <button style={borderStyle} className='border border-transparent py-[10px] px-[20px] borderstyle text-white bg-[#09090906]' >Hangout with like-minded people</button>
            </div>
          </header>

          {/* profile pic section */}
          <div className='flex items-center  relative justify-center z-10'>
            <img src={profileEffect} className=' z-20 relative top-[-6rem] right-[-6rem]' alt="effect" />
            <div className='absolute top-[-5rem] h-44 w-44 flex items-center justify-center rounded-full bg-[#1D2734] border-4 '>
              <img className=' h-32 w-32 ' src={profilePic} alt="profile" />
            </div>
            <img src={profileEffect2} className='z-20 relative  top-[5rem] left-[-5rem] ' alt="effect" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
