// import React, { useRef, useState, useEffect } from "react";
// import * as tf from "@tensorflow/tfjs";
// import * as handpose from "@tensorflow-models/handpose";
// import Webcam from "react-webcam";
// import { drawHand } from "../../utilities/utilities";
// import { loveYouGesture } from "./LoveYou";
// import peaceGesture from "./PeaceGesture";
// import "./App.css";
// import * as fp from "fingerpose";
// import victory from "./victory.png";
// import thumbs_up from "./thumbs_up.png";

// function Camera() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [emoji, setEmoji] = useState(null);
//   const videoConstraints = { facingMode: "user" };
//   const images = { thumbs_up: thumbs_up, victory: victory };

//   useEffect(() => {
//     const runHandpose = async () => {
//       const ws = new WebSocket(`ws://100.100.137.86:3000/api/ws/stream`);

//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then((stream) => {
//           const videoElement = webcamRef.current.video;

//           if ('srcObject' in videoElement) {
//             videoElement.srcObject = stream;
//           } else {
//             videoElement.src = window.URL.createObjectURL(stream);
//           }

//           videoElement.play();
//         })
//         .catch((error) => {
//           console.error('Failed to access media devices:', error);
//         });

//       await tf.setBackend("webgl");

//       const net = await handpose.load();
//       console.log("Handpose model loaded.");

//       const detect = async () => {
//         const video = webcamRef.current.video;

//         if (video && video.readyState === 4) {
//           const videoWidth = video.videoWidth;
//           const videoHeight = video.videoHeight;

//           webcamRef.current.video.width = videoWidth;
//           webcamRef.current.video.height = videoHeight;
//           canvasRef.current.width = videoWidth;
//           canvasRef.current.height = videoHeight;

//           const hand = await net.estimateHands(video);

//           if (hand.length > 0) {
//             const GE = new fp.GestureEstimator([
//               fp.Gestures.VictoryGesture,
//               fp.Gestures.ThumbsUpGesture,
//               loveYouGesture,
//               peaceGesture,
//             ]);
//             const gesture = await GE.estimate(hand[0].landmarks, 4);
//             if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
//               const confidence = gesture.gestures.map(
//                 (prediction) => prediction.confidence
//               );
//               const maxConfidence = confidence.indexOf(
//                 Math.max.apply(null, confidence)
//               );
//               setEmoji(gesture.gestures[maxConfidence].name);
//             }
//           }

//           const ctx = canvasRef.current.getContext("2d");
//           ctx.clearRect(0, 0, videoWidth, videoHeight);
//           drawHand(hand, ctx, videoWidth, videoHeight);

//           const frameData = canvasRef.current.toDataURL("image/jpeg");
//           sendFrameToWebSocket(ws, frameData);

//           requestAnimationFrame(detect);
//         }
//       };

//       detect();
//     };

//     runHandpose();
//   }, []);

//   const sendFrameToWebSocket = (ws, frame) => {
//     ws.send(frame);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zIndex: 9,
//             width: 640,
//             height: 480,
//           }}
//           videoConstraints={videoConstraints}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zIndex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         {emoji !== null ? (
//           <img
//             src={images[emoji]}
//             style={{
//               position: "absolute",
//               marginLeft: "auto",
//               marginRight: "auto",
//               left: 400,
//               bottom: 500,
//               right: 0,
//               textAlign: "center",
//               height: 100,
//             }}
//           />
//         ) : (
//           ""
//         )}
//       </header>
//     </div>
//   );
// }

// export default Camera;