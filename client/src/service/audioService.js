// audioService.js
const startRecording = async () => {
  return new Promise((resolve, reject) => {
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
            resolve(base64data);
          };

          reader.readAsDataURL(audioBlob);
        };

        mediaRecorder.start();
        setTimeout(() => {
          mediaRecorder.stop();
        }, 5000);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const stopRecording = (mediaRecorder) => {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
  }
};

export { startRecording, stopRecording };
