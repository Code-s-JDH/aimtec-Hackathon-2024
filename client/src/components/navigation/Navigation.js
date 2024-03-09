import React from 'react';
import { NavLink } from 'react-router-dom';
import { faLanguage, faInfo, faHashtag, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../ui/buttons/iconBtn/iconBtn';
import './navigation.css';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='links'>
        <NavLink to="/">
          <IconBtn icon={faLanguage} />
        </NavLink>
        <NavLink to="/info">
          <IconBtn icon={faInfo} />
        </NavLink>
        <NavLink to="/blog">
          <IconBtn icon={faHashtag} />
        </NavLink>
        <IconBtn icon={faCircleHalfStroke} onClick={toggleTheme} />
      </div>
    </nav>
  );
};

export default Navigation;
