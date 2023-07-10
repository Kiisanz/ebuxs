import Card from '../homepage/components/Card.jsx'
import Image from '../../assets/book_3.jpg'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const previewBook = () => {
  return (
    <div>
      <div className="w-full h-[55vh] bg-book">
      <div className="navbar navbar-ghost">
        <div className="navbar-start">
            <NavLink to="/" className="btn btn-ghost">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
            </NavLink>
        </div>
          <div className="navbar-end">
            <button className="btn btn-ghost">
              <FontAwesomeIcon icon="fa-solid fa-heart"/>
            </button>
          </div>
      </div>
      <div className="w-full bg-gradient-to-t from-base-100 dark:from-slate-900">
      <div className='grid place-items-center items-center w-full py-4 bg-gradient-to-t from-base-100 dark:from-slate-900'>
        <Card image={Image} />
        <span className="text-sm">Book by Rifki Maulana</span>
      </div>
      </div>
      </div>
      <div className='flex justify-center gap-x-7 items-center w-full py-7 px-5'> 
        <button className="grid place-items-center btn btn-ghost btn-circle">
          <FontAwesomeIcon icon="fa-solid fa-book-open"/>
          47
        </button>
        <button className="grid place-items-center btn btn-ghost btn-circle">
          <FontAwesomeIcon icon="fa-solid fa-globe"/>
          IDN
        </button>
        <button className="grid place-items-center btn btn-ghost btn-circle">
          <FontAwesomeIcon icon="fa-solid fa-book-bookmark"/>
          130
        </button>
      </div>
      <div className="flex justify-center gap-1/2 items-center w-full py-3">
       <button className="flex items-center gap-2 bg-gray-800 dark:bg-slate-800 hover:bg-gray-700 dark:hover:bg-slate-700 py-3 px-3 border border-r-none rounded-l-xl font-semibold text-base-100 dark:text-slate-400">
          <FontAwesomeIcon icon="fa-solid fa-book"/>
          Read book
        </button>
        <button className="flex items-center gap-x-2 bg-gray-800 dark:bg-slate-800 hover:bg-gray-700 dark:hover:bg-slate-700 py-3 px-3 border rounded-r-xl font-semibold text-base-100 dark:text-slate-400">
          <FontAwesomeIcon icon="fa-solid fa-bookmark"/>
           Bookmark
           </button>
      </div>
    </div>
  )
}

export default previewBook
