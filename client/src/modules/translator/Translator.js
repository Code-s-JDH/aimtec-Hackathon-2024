import React, { useState } from 'react';
import { startRecording, stopRecording } from '../../service/audioService';
import { speechToText, textToSpeech } from '../../service/translatorApi';
import GestureRecognition from '../../components/camera2/Camera2';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import './translator.css';

import TranslateInput from "../../components/translateInput/TranslateInput";
import TranslateOutput from "../../components/translateOutput/TranslateOutput";
import IconBtn from '../../ui/buttons/iconBtn/iconBtn';

const Translator = () => {
  const [speechBase64, setSpeechBase64] = useState('');
  const [resultText, setResultText] = useState("");
  const [base64data, setBase64data] = useState("");

  const handleStartRecording = async () => {
    try {
      const recordingData = await startRecording();
      setBase64data(recordingData);
    } catch (error) {
      console.error('Chyba při nahrávání zvuku:', error);
    }
  };

  const handleStopRecording = async () => {
    try {
      await stopRecording();
      const response = await speechToText("1234123414323454", "en", "en");
      console.log(base64data);
    } catch (error) {
      console.error('Chyba při zastavení nahrávání zvuku:', error);
    }
  };

  const handleTextToSpeech = async () => {
    try {
      const response = await textToSpeech(
        'Hello, this is a test.',
        'sourceLanguage',
        'targetLanguage'
      );
    } catch (error) {
      console.error('Chyba při konverzi textu na řeč:', error);
    }
  };

  return (
    <div className='translator'>
      <button ></button>
      <TranslateInput
        onStartRecording={handleStartRecording}
        onStopRecording={handleStopRecording}
      />
      <TranslateOutput />
      {/* <Camera></Camera> */}
      <GestureRecognition></GestureRecognition>
      <IconBtn icon={textToSpeech ? faStop : faPlay} onClick={handleTextToSpeech} />
    </div>
    
  );
};

export default Translator;
