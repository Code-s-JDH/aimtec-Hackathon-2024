import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faLanguage, faInfo, faHashtag, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../ui/buttons/iconBtn/iconBtn';
import './navigation.css';

const Navigation = () => {
  const [DarkMode, setDarkMode] = useState(false);

  const switchTheme = () => {
    setDarkMode(!DarkMode);
    document.documentElement.style.setProperty('--main_color', DarkMode ? '--main_color' : '#141414');
    document.documentElement.style.setProperty('--primary_color', DarkMode ? '--primary_color' : '#141414');
    document.documentElement.style.setProperty('--secondary_color', DarkMode ? '--secondary_color' : '#C8C8C8');
    document.documentElement.style.setProperty('--active_color', DarkMode ? '--active_color: #282828;' : '#FFFFFF');
    document.documentElement.style.setProperty('--border_color', DarkMode ? '--border_color: #282828;' : '#14141433');
  };

  return (
    <nav>
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
        <IconBtn icon={faCircleHalfStroke} onClick={switchTheme} />
      </div>
    </nav>
  );
};

export default Navigation;
