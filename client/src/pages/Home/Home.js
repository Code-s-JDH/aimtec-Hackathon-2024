import React, { useState } from 'react';
import { startRecording, stopRecording } from '../../service/audioService';
import { textToSpeech, speechToText, textToSymbols, symbolsToText } from '../../service/translatorApi';

import './home.css';

import TranslateInput from "../../components/translateInput/TranslateInput"
import TranslateOutput from "../../components/translateOutput/TranslateOutput"

const Home = () => {
  const [speechBase64, setSpeechBase64] = useState('');
  const [resultText, setResultText] = useState('');

  const handleStartRecording = async () => {
    try {
      const base64data = await startRecording();
      setSpeechBase64(base64data);
    } catch (error) {
      console.error('Chyba při nahrávání zvuku:', error);
    }
  };

  const handleSpeechToText = async () => {
    try {
      const textData = await speechToText(speechBase64);
      setResultText(textData);
    } catch (error) {
      console.error('Chyba při konverzi řeči na text:', error);
    }
  };

  const handleTextToSpeech = async () => {
    try {
      const speechData = await textToSpeech('Hello, this is a test.');
    } catch (error) {
      console.error('Chyba při konverzi textu na řeč:', error);
    }
  };

  return (
    <div className='translator'>
      <TranslateInput />
      <TranslateOutput />
    </div>
  )
}

export default Home;
