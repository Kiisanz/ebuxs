import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BottomNav = () => {
  return (
    <>
    <div>
      <div className="btm-nav bg-base-100 dark:bg-slate-900">
          <NavLink className="text-gray-800 dark:text-slate-400 bg-base-100 dark:bg-slate-900" to='/'>
            <FontAwesomeIcon icon="fa-solid fa-house"/>
          </NavLink>
          <NavLink className="text-gray-800 dark:text-slate-400 bg-base-100 dark:bg-slate-900" to='search'>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
          </NavLink>
          <NavLink className="text-gray-800 dark:text-slate-400 bg-base-100 dark:bg-slate-900" to='me'>
            <FontAwesomeIcon icon="fa-solid fa-user"/>
          </NavLink>
      </div>
    </div>
    </>
  )
}

export default BottomNav
