import BottomNav from "./pages/homepage/components/BottomNav.jsx"
import Router from './router/index.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <>
                <div className='min-h-[70vh] pb-20 md:pb-12 bg-base-100 dark:bg-slate-900'>
                    <Router />
                </div>
            <BottomNav/>
        </>
    );
}

export default App;
library.add(fas)
