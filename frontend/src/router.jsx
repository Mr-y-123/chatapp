import { createBrowserRouter ,Navigate} from 'react-router-dom';
import Authpage from './pages/Authpage';
import Homepage from './Homepage/Homepage';
const router=createBrowserRouter([{
    path:'/',
    element:<Navigate to={'login'}/>
  },
  {
    path:'/login',
    element:<Authpage/>
  },
  {
    path:'/signup',
    element:<Authpage/>
  },
  {
    path:'/home',
    element:<Homepage/>
  }
])
export default router