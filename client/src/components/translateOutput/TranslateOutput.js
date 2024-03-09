import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import IconBtn from '../../ui/buttons/iconBtn/iconBtn'
import './translateOutput.css'
import { useTranslator } from '../../context/TranslatorContext';

const TranslateOutput = () => {
  const { getTranslatedData } = useTranslator();
  const translatedData = getTranslatedData();

  const firstKey = Object.keys(translatedData)[2];
  const textToDisplay = firstKey ? translatedData[firstKey] : '';

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
      <div className='translateOutput'>
        <p>{textToDisplay}</p>
      </div>
    </div>
  )
}

export default TranslateOutput;
