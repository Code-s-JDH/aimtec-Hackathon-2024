import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as mp from '@mediapipe/tasks-vision';


const GestureRecognition = () => {
  const webcamRef = useRef(null);
  const gestureRecognizerRef = useRef(null);

  useEffect(() => {
    const initGestureRecognizer = async () => {
      const vision = await mp.FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm');
      gestureRecognizerRef.current = await mp.GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: 'https://storage.googleapis.com/mediapipe-tasks/gesture_recognizer/gesture_recognizer.task',
        },
        numHands: 1,
        runningMode: 'VIDEO',
      });

      startGestureRecognition();
    };

    const startGestureRecognition = async () => {
      const gestureRecognizer = gestureRecognizerRef.current;
      const webcam = webcamRef.current.video;

      if (gestureRecognizer && webcam) {
        const result = gestureRecognizer.recognizeForVideo(webcam);
        console.log(result);

        // Zde můžete aktualizovat stav nebo provádět další akce podle výsledků
      }

      // Pokračujte ve sledování nových snímků
      requestAnimationFrame(startGestureRecognition);
    };

    // Inicializuj Gesture Recognizer
    initGestureRecognizer();
  }, []);

  return (
    <div>
      <Webcam ref={webcamRef} width={640} height={480} />
    </div>
  );
};

export default GestureRecognition;
