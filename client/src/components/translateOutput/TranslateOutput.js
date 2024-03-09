import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import IconBtn from '../../ui/buttons/iconBtn/iconBtn'
import './translateOutput.css'

const TranslateOutput = () => {
  return (
    <div className='outputWrapper'>
      <div>
      <div>
          <IconBtn className="langBtn" icon={faGlobe}></IconBtn>
          <p>Čeština</p>
          </div>
        <IconBtn icon={faArrowDown}></IconBtn>
        <div className='invisibleDiv'></div>
      </div>
      <div className='translateOutput'></div>

    </div>
  )
}

export default TranslateOutput