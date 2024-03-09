import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'
import "./appLayout.css"
import logo from "../media/sprites/logo_deaflator.svg"

const AppLayout = () => {
  return (<div id='mainWrapper'>
    <h1 className='mainHeader'>DEAFLATOR</h1>
    <Outlet></Outlet>
    <Navigation />
  </div>
  )
}

export default AppLayout