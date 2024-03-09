import React from 'react'
import { NavLink } from 'react-router-dom'
import { faLanguage, faInfo, faHashtag, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import IconBtn from '../../ui/buttons/iconBtn/iconBtn'
import './navigation.css'

const Navigation = () => {
  return (
    <nav >
      <div className='links'>
        <NavLink to="/">
          <IconBtn icon={faLanguage} />
        </NavLink>
        <NavLink to="/info">
          <IconBtn   icon={faInfo} />
        </NavLink>
        <NavLink to="/blog">
          <IconBtn icon={faHashtag} />
        </NavLink>
        <NavLink to="/">
          <IconBtn icon={faCircleHalfStroke} />
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation