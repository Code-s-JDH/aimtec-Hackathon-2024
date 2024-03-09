import { useState } from 'react';
import { startRecording, stopRecording } from '../../service/audioService';
import { speechToText, textToSpeech } from '../../service/translatorApi';
import Camera from '../../components/camera/Camera'
import './translator.css';

import TranslateInput from "../../components/translateInput/TranslateInput";
import TranslateOutput from "../../components/translateOutput/TranslateOutput";

const Translator = () => {

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
    // try {
    //   await stopRecording();
    //   const response = await speechToText("1234123414323454", "en", "en");
    //   console.log(base64data);
    // } catch (error) {
    //   console.error('Chyba při zastavení nahrávání zvuku:', error);
    // }
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
      <button onClick={handleTextToSpeech}></button>
      <TranslateInput
        onStartRecording={handleStartRecording}
        onStopRecording={handleStopRecording}
      />
      <TranslateOutput />
      {/* <Camera></Camera> */}
    </div>
  );
};

export default Translator;
