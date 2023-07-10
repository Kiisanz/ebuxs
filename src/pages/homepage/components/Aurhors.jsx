import Image from '../../../assets/react.svg'

const Aurhors = () => {
  return (
    <div>
      <div className='flex justify-center items-center pt-4 pb-1'>
        <div className="card w-[50px] h-[50px] bg-slate-100 shadow-sm rounded-full overflow-hidden">
          <figure>
            <img className='w-[50px] h-[50px]' src={Image} alt="Shoes" /> 
          </figure>
        </div>
        </div>
      <div className='grid justify-center items-center py-1'>
          <h4 className="font-semibold text-sm">Name</h4>
      </div>
    </div>
  )
}

export default Aurhors
