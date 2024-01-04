import profile from '../assets/profile.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile3.png'
import profile3 from '../assets/profile4.png'
import profile4 from '../assets/profile5.png'

function Card() {
  return (
    <>
    <div className='flex bg-slate-800 p-3 w-fit rounded-[30px]'>
        {/* club for imgs */}
    <div className='flex flex-wrap md:w-32 w-16 items-center justify-center'>
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile1} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile3} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile2} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile4} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile3} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile2} alt="profile" />
        <img className='md:h-10 md:w-10 h-5 w-5'  src={profile1} alt="profile" />
    </div>
    </div>
    </>
  )
}

export default Card