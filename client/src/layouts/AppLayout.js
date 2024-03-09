import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'

const AppLayout = () => {
  return (<>
    <Outlet></Outlet>
    <Navigation />
  </>
  )
}

export default AppLayout