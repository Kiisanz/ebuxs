import Image from "../../../assets/img/1.jpg"
import { NavLink } from 'react-router-dom'

const Card = ({image, title}) => {
  return (
    <div>
      <div className='flex justify-center items-center pt-4 pb-1'>
        <NavLink to='/preview' className="card w-[150px] h-[200px] bg-slate-100 shadow-sm rounded-xl overflow-hidden transition ease-in-out hover:-translate-y-1 md:hover:-translate-y-2 duration-200" >
          <figure>
              <img src={image} alt="Shoes" className="w-[150px] h-[200px]" />
          </figure>
        </NavLink>
        </div>
      <div className='grid justify-center items-center py-1'>
          <NavLink to='/preview' className="font-semibold text-lg">Modul OSN Astrophysics Nasional</NavLink>
      </div>
    </div>
  )
}

export default Card
