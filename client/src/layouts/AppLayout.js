import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'
import "./appLayout.css"

const AppLayout = () => {
  return (<div id='mainWrapper'>
    <Outlet></Outlet>
    <Navigation />
  </div>
  )
}

export default AppLayout