import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './iconBtn.css'

const IconBtn = ({ icon, onClick }) => {
  return (
    <button className="iconBtn" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export default IconBtn;