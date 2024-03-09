import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import IconBtn from '../../ui/buttons/iconBtn/iconBtn'
import './translateOutput.css'

const TranslateOutput = () => {
  return (
    <div>
      <div>
        <div>
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          <p>123</p>
        </div>
        <IconBtn icon={faMicrophone}></IconBtn>
      </div>
      
    </div>
  )
}

export default TranslateOutput