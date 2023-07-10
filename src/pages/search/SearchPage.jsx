import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import Img_1 from '../../assets/book_1.jpg'
import Img_2 from '../../assets/book_2.jpg'
import Img_3 from '../../assets/book_3.jpg'

const SearchPage = () => {
  return (
    <div>
      <div className="w-full px-5 py-4">
        <div className='flex w-full items-center justify-center py-2 gap-4 outline-gray-700 md:px-10 md:py-5'>
          <button className="btn w-2 btn-ghost btn-circle">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
          </button>
          <input type="text" name="search" placeholder='Search Title, Author, or categories...' className='input-bordered-primary text-gray-800 px-3 py-2 rounded-xl w-full foucus:outline-slite-700 focus:ring-slite-400 border-slate-700 bg-gray-100 dark:bg-slate-800 dark:text-white transition-focus duration-300'/>
          <button className="btn w-2 btn-ghost btn-circle">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
          </button>
        </div>
        <div className="grid gap-3 place-items-start">
          <span className="text-gray-800 dark:text-slate-400 font-semibold">Search Result</span>
          <div className="flex justify-start items-center bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-400 px-3 py-2 w-full rounded-xl">
            <NavLink to='/preview' className="card w-[70px] h-[100px] bg-shadow-sm rounded-xl overflow-hidden transition ease-in-out hover:-translate-y-1 md:hover:-translate-y-2 duration-200" >
              <figure>
                <img src={Img_1} alt="Shoes" className="w-[70px] h-[100px]" />
              </figure>
            </NavLink>
            <NavLink to='/preview' className="grid text-gray-800 dark:text-slate-400 px-3">
              <span className="font-semibold text-lg">Modul OSN Astrophysi...</span>
              <span className="text-sm">Book by Rifki Maulana</span>
              <span className="text-xs">
                <FontAwesomeIcon icon="fa-solid fa-book-bookmark" className="mr-2"/>
                130 page
              </span>
              <span className="text-xs">
                <FontAwesomeIcon icon="fa-solid fa-globe" className="mr-2"/>
                INDONESIA
              </span>
            </NavLink> 
          </div>
        </div>
      </div>
    </div>    
  )
}

export default SearchPage
