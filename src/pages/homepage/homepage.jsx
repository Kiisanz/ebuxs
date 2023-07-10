import Navbar from "./components/Navbar";
import Categories from "./components/Categories.jsx"
import Card from "./components/Card.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Profile from "../../assets/img/1.jpg";
import Authors from './components/Aurhors.jsx'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img_1 from '../../assets/book_1.jpg'
import Img_2 from '../../assets/book_2.jpg'
import Img_3 from '../../assets/book_3.jpg'

function Homepage() {
    return (
        <>
        <div className='bg-base-100 dark:bg-slate-900'>
            <Navbar />
            <div className='flex w-full items-center justify-center px-5 py-2 outline-gray-700 md:px-10 md:py-5'>
                <input type="text" name="search" placeholder='Search Title, Author, or categories...' className='input-bordered-primary text-gray-800 px-3 py-2 rounded-xl w-full foucus:outline-slite-700 focus:ring-slite-400 border-slate-700 bg-gray-100 dark:bg-slate-800 dark:text-white transition-focus duration-300'/>
            </div>
                <div className="flex items-center flex-rows justify-start px-5 py-2 md:px-10 md:py-5">
                    <h1 className="text-xl font-bold">
                        Categories                  
                    </h1>
                </div>
            <div className='grid overflow-hidden px-5 py-3 rounded-xl'>
            <div className='no-scrollbar flex w-full md:justify-center md:gap-5 gap-2 py-1 overflow-x-auto'>
            <Categories category='Healthy' />    
            <Categories category='Horror' />    
            <Categories category='Creepy' />    
            <Categories category='Education' />    
            <Categories category='Drama' />    
            <Categories category='Commedy' />    
            <Categories category='Romance' />    
            </div>
            <div className='no-scrollbar flex md:justify-center w-full gap-2 md:gap-5 py-1 overflow-x-auto'>
            <Categories category='Fiction' />    
            <Categories category='Novel' />    
            <Categories category='Ensiclopedia' />    
            <Categories category='Science' />    
            <Categories category='ScienceFiction' />    
            <Categories category='History' />    
            <Categories category='Thiller' />    
            </div>
        </div>
                <div className="flex items-center flex-rows justify-between px-5 py-4 md:px-10 md:py-8">
                    <h1 className="text-xl font-bold">Trending Books</h1>
                    <NavLink to='trendings' className='text-gray-400 text-sm'>
                        See All
                        <FontAwesomeIcon className='ml-2' icon="fa-solid fa-arrow-right"/>
                    </NavLink>
                </div>
            <div className='flex px-5 py-2 md:px-10 md:py-4 overflow-hidden'>
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
                <div className="flex items-center flex-rows justify-start px-5 py-3 md:px-10 md:py-6">
                    <h1 className="text-xl font-bold">
                        Top Authors                  
                    </h1>
                </div>
            <div className='flex px-5 py-2 md:px-10 md:py-4 overflow-hidden'>
                <div className='flex items-center justify-between gap-4 overflow-x-auto no-scrollbar'>
                    <Authors />
                    <Authors />
                    <Authors />
                    <Authors />
                    <Authors />
                    <Authors />
                    <Authors />
                    <Authors />
                    <Authors />
                </div>
                </div>
                <div className="flex items-center flex-rows justify-between px-5 py-4 md:px-10 md:py-8">
                    <h1 className="text-xl font-bold">Overview</h1>
                    <NavLink to='/preview' className='text-gray-400 text-sm'>See All</NavLink>
                </div>
            <div className='grid px-5 py-2 md:px-10 md:py-4 overflow-hidden'>
                <div className='flex items-center justify-between gap-4 overflow-x-auto no-scrollbar'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='flex items-center justify-between gap-4 overflow-x-auto no-scrollbar'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                </div>
        </div>
        </>
    );
}
export default Homepage;
