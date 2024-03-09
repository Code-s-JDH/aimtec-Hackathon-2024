import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMicrophone, faCircleStop } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../ui/buttons/iconBtn/iconBtn';
import { textToSpeech } from '../../service/translatorApi';
import { useTranslator } from '../../context/TranslatorContext';
import './translateInput.css';

const TranslateInput = ({ onStartRecording, onStopRecording }) => {
  const { storeTranslatedData } = useTranslator();
  const [isRecording, setIsRecording] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleRecordingToggle = () => {
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
    setIsRecording(!isRecording);
  };

  const handleInputChange = (newText) => {
    // Zrušení předchozího zpoždění, pokud existuje
    clearTimeout(typingTimeout);

    // Nastavení nového zpoždění
    const newTypingTimeout = setTimeout(async () => {
      try {
        const response = await textToSpeech(newText, 'cs', 'en');
        storeTranslatedData(response)
        console.log('TextToSpeech response:', response);
      } catch (error) {
        console.error('Error during textToSpeech request:', error);
      }

      console.log('Text changed:', newText);
    }, 1000); // Zpoždění nastaveno na 1000 ms (1 sekunda)

    // Uložení ID zpoždění do stavu
    setTypingTimeout(newTypingTimeout);
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
      <textarea
        className="translateInput"
        type="text"
        placeholder="enter text"
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default TranslateInput;
