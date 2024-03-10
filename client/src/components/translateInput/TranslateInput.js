import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMicrophone, faCircleStop } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../ui/buttons/iconBtn/iconBtn';
import { textToSpeech } from '../../service/translatorApi';
import { useTranslator } from '../../context/TranslatorContext';
import './translateInput.css';

const TranslateInput = ({ onStartRecording, onStopRecording }) => {
  const { storeTranslatedData, textLang, textToLang } = useTranslator();
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('cs'); // Default language is Czech
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
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
    // Cancel the previous timeout, if any
    clearTimeout(typingTimeout);

    // Set a new timeout
    const newTypingTimeout = setTimeout(async () => {
      try {
        const response = await textToSpeech(newText, textLang, textToLang);
        storeTranslatedData(response);
        console.log('TextToSpeech response:', response);
      } catch (error) {
        console.error('Error during textToSpeech request:', error);
      }

      console.log('Text changed:', newText);
    }, 1000);

    // Save the timeout ID to state
    setTypingTimeout(newTypingTimeout);
  };

  const handleLanguageBtnClick = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguageMenu(false);
    storeTranslatedData({}, language, 'en'); // Prázdný objekt pro překlady při změně jazyka
  };

  return (
    <div className='inputWrapper'>
      <div>
        <div>
          <div className="languageMenuWrapper">
            <IconBtn className="langBtn" icon={faGlobe} onClick={handleLanguageBtnClick}></IconBtn>
            {showLanguageMenu && (
              <div className="languageMenu">
                {/* Include language options here */}
                <p onClick={() => handleLanguageSelect('arb')}>Arabic</p>
                <p onClick={() => handleLanguageSelect('ar-AE')}>Arabic (Gulf)</p>
                <p onClick={() => handleLanguageSelect('ca-ES')}>Catalan</p>
                <p onClick={() => handleLanguageSelect('yue-CN')}>Chinese (Cantonese)</p>
                <p onClick={() => handleLanguageSelect('cmn-CN')}>Chinese (Mandarin)</p>
                <p onClick={() => handleLanguageSelect('da-DK')}>Danish</p>
                <p onClick={() => handleLanguageSelect('nl-BE')}>Dutch (Belgian)</p>
                <p onClick={() => handleLanguageSelect('nl-NL')}>Dutch</p>
                <p onClick={() => handleLanguageSelect('en-AU')}>English (Australian)</p>
                <p onClick={() => handleLanguageSelect('en-GB')}>English (British)</p>
                <p onClick={() => handleLanguageSelect('en-IN')}>English (Indian)</p>
                <p onClick={() => handleLanguageSelect('en-NZ')}>English (New Zealand)</p>
                <p onClick={() => handleLanguageSelect('en-ZA')}>English (South African)</p>
                <p onClick={() => handleLanguageSelect('en-US')}>English (US)</p>
                <p onClick={() => handleLanguageSelect('en-GB-WLS')}>English (Welsh)</p>
                <p onClick={() => handleLanguageSelect('fi-FI')}>Finnish</p>
                <p onClick={() => handleLanguageSelect('fr-FR')}>French</p>
                <p onClick={() => handleLanguageSelect('fr-BE')}>French (Belgian)</p>
                <p onClick={() => handleLanguageSelect('fr-CA')}>French (Canadian)</p>
                <p onClick={() => handleLanguageSelect('hi-IN')}>Hindi</p>
                <p onClick={() => handleLanguageSelect('de-DE')}>German</p>
                <p onClick={() => handleLanguageSelect('de-AT')}>German (Austrian)</p>
                <p onClick={() => handleLanguageSelect('is-IS')}>Icelandic</p>
                <p onClick={() => handleLanguageSelect('it-IT')}>Italian</p>
                <p onClick={() => handleLanguageSelect('ja-JP')}>Japanese</p>
                <p onClick={() => handleLanguageSelect('ko-KR')}>Korean</p>
                <p onClick={() => handleLanguageSelect('nb-NO')}>Norwegian</p>
                <p onClick={() => handleLanguageSelect('pl-PL')}>Polish</p>
                <p onClick={() => handleLanguageSelect('pt-BR')}>Portuguese (Brazilian)</p>
                <p onClick={() => handleLanguageSelect('pt-PT')}>Portuguese (European)</p>
                <p onClick={() => handleLanguageSelect('ro-RO')}>Romanian</p>
                <p onClick={() => handleLanguageSelect('ru-RU')}>Russian</p>
                <p onClick={() => handleLanguageSelect('es-ES')}>Spanish (European)</p>
                <p onClick={() => handleLanguageSelect('es-MX')}>Spanish (Mexican)</p>
                <p onClick={() => handleLanguageSelect('es-US')}>Spanish (US)</p>
                <p onClick={() => handleLanguageSelect('sv-SE')}>Swedish</p>
                <p onClick={() => handleLanguageSelect('tr-TR')}>Turkish</p>
                <p onClick={() => handleLanguageSelect('cy-GB')}>Welsh</p>
                <p onClick={() => handleLanguageSelect('cs')}>Čeština</p>
                <p onClick={() => handleLanguageSelect('en')}>English</p>
                {/* Add more languages as needed */}
              </div>
            )}
          </div>
          <IconBtn icon={isRecording ? faCircleStop : faMicrophone} onClick={handleRecordingToggle} />
          <div className='invisibleDiv'></div>
        </div>
        <textarea
          className="translateInput"
          type="text"
          placeholder="Napište něco"
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TranslateInput;
