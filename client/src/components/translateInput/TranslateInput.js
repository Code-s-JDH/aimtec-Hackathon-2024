import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import IconBtn from '../../ui/buttons/iconBtn/iconBtn'
import './translateInput.css'

const TranslateInput = () => {
  return (
    <div className='inputWrapper'>
          <div>
          <div>
          <IconBtn className="langBtn" icon={faGlobe}></IconBtn>
          <p>Čeština</p>
          </div>
          <IconBtn icon={faMicrophone}></IconBtn>
          <div className='invisibleDiv'></div>
          </div>
      <textarea className="translateInput"  type="text" placeholder="enter text"/>
    </div>
  )
}

export default TranslateInput