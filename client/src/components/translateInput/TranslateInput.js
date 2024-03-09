import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMicrophone, faCircleStop } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../ui/buttons/iconBtn/iconBtn';
import './translateInput.css';

const TranslateInput = ({ onStartRecording, onStopRecording }) => {
  const [isRecording, setIsRecording] = useState(false);

  const [isVisible, setVisibility] = useState(false);
  const Visibility = () => {
      setVisibility(!isVisible);

  const handleRecordingToggle = () => {
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className='inputWrapper'>
      <div>
        <div>
          <IconBtn className="langBtn" icon={faGlobe}></IconBtn>
          <p>Čeština</p>
        </div>
        <IconBtn icon={isRecording ? faCircleStop : faMicrophone} onClick={handleRecordingToggle} />
        <div className='invisibleDiv'></div>
      </div>
      <textarea className="translateInput" type="text" placeholder="enter text" />
    </div>
  );
};

export default TranslateInput;
