import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faLanguage, faInfo, faHashtag, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../ui/buttons/iconBtn/iconBtn';
import './navigation.css';

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  const switchTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.style.setProperty('--main_color', darkMode ? 'var(--main_color)' : 'var(--main_color_dark)');
    document.documentElement.style.setProperty('--primary_color', darkMode ? 'var(--primary_color)' : 'var(--primary_color_dark)');
    document.documentElement.style.setProperty('--secondary_color', darkMode ? 'var(--secondary_color)' : 'var(--secondary_color_dark)');
    document.documentElement.style.setProperty('--active_color', darkMode ? 'var(--active_color)' : 'var(--active_color_dark)');
    document.documentElement.style.setProperty('--border_color', darkMode ? 'var(--border_color)' : 'var(--border_color_dark)');
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
