import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom'
import Navbar from '../homepage/components/Navbar.jsx';
import Image from '../../assets/react.svg';
import Card from '../homepage/components/Card.jsx'
import Img_1 from '../../assets/book_1.jpg'
import Img_2 from '../../assets/book_2.jpg'
import Img_3 from '../../assets/book_3.jpg'


const profilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full py-4 px-5 overflow-hidden">
        <div className="bg-gray-100 dark:bg-slate-800 rounded-xl shadow-lg">
          <div className="flex justify-between items-center px-5 py-4">
            <div className="grid gap-0 place-items-start">
              <span className="text-gray-800 dark:text-slate-400 text-sm">Good morning,</span>
              <h1 className="text-gray-800 dark:text-slate-400 font-bold text-lg">Rifki Maulana</h1>
              <div className="flex gap-2 items-center justify-start">
                <span className="text-gray-800 dark:text-slate-400 text-xs">
                  Kuningan
                </span>
                <span className="text-gray-800 dark:text-slate-400 text-xs">
                  Joined at 2023
                </span>
              </div>
              <span className="text-gray-800 dark:text-slate-400 text-xs">science enthusiasm</span>
            </div>
            <img src={Image} className="w-10 h-10 rounded-full border border-gray-800" />
          </div>
          <div className="flex justify-center items-center gap-12 px-5 py-4">
            <div className="grid place-items-center gap-1 font-semibold">
              <FontAwesomeIcon icon="fa-solid fa-book" className="w-5 h-5"/>
              5
            </div>
            <div className="grid place-items-center gap-1 font-semibold">
              <FontAwesomeIcon icon="fa-solid fa-heart" className="w-5 h-5"/>
              3
            </div>
            <div className="grid place-items-center gap-1 font-semibold">
              <FontAwesomeIcon icon="fa-solid fa-globe" className="w-5 h-5"/>
              IDN
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-6 w-full">
            <button className="bg-gray-800 dark:bg-slate-400 w-full text-base-100 dark:text-gray-800 py-1 rounded-lg">
              <FontAwesomeIcon icon="fa-solid fa-pencil"/>
              <span className="text-sm font-semibold text-base-100 dark:text-gray-800 ml-3">Edit profile</span>
            </button>
            <button className="bg-gray-800 dark:bg-slate-400 w-1/4 text-base-100 dark:text-gray-800 py-1 rounded-lg">
              <FontAwesomeIcon icon="fa-solid fa-share"/>
            </button>
          </div>
        </div>
          <div className="flex items-center flex-rows justify-between pt-5 md:px-10 md:py-8">
            <h1 className="text-xl font-bold">Your books</h1>
              <NavLink to='trendings' className='text-gray-400 text-sm'>
                See All
                <FontAwesomeIcon className='ml-2' icon="fa-solid fa-arrow-right"/>
              </NavLink>
          </div>
            <div className='flex py-2 md:px-10 md:py-4 overflow-hidden'>
                <div className='flex items-center justify-between gap-4 overflow-x-auto no-scrollbar'>
                 
                    <Card image={Img_2} title='Test aja' />
                    <Card image={Img_3} title='tes juga'/>
                    <Card image={Img_1} title='tes lah'/>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
              </div>
      </div>
    </div>
  )
}

export default profilePage
