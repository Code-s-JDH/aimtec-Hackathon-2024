import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <nav className='bottomNavBar'>
      <div>
        <NavLink to="/">
          <FontAwesomeIcon icon={faLanguage} />
        </NavLink>
        <NavLink to="/" id='heart'>
          <FontAwesomeIcon icon={faLanguage} />
        </NavLink>
        <NavLink to="/">
        </NavLink>
        <NavLink to="/" id='heart'>
          <FontAwesomeIcon icon={faLanguage} />
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon icon={faLanguage} />
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation