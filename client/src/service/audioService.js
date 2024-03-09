const startRecording = (setSpeech) => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64data = reader.result.split(',')[1];
          setSpeech(base64data);
        };

        reader.readAsDataURL(audioBlob);
      };

      mediaRecorder.start();
      setTimeout(() => mediaRecorder.stop(), 5000);  // Automaticky zastavit nahrávání po 5 sekundách (můžete přizpůsobit)
    })
    .catch((error) => {
      console.error('Chyba při získávání přístupu k mikrofonu:', error);
    });
};

const stopRecording = (mediaRecorder) => {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
  }
};

export { startRecording, stopRecording };
