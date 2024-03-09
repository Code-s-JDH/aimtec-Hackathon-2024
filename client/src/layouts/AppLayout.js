import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'
import "./appLayout.css"
import logo from "../media/sprites/logo.png"

const AppLayout = () => {
  return (<div id='mainWrapper'>
    <img className="image_logo" src={logo} alt="" />
    <Outlet></Outlet>
    <Navigation />
  </div>
  )
}

export default AppLayout