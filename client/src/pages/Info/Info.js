import React from 'react'
import './info.css'

const Info = () => {
  return <>
  <div className="border infoFill">
  <div>
    <h1>Informace</h1>
    <p>Toto je překladač speciálně vytvořený pro hluchoněmé. Jeho účelem je lepší začlenění lidí s těmito handicapy do společnosti prolomením jazykové bariery.</p>
    </div>
    <div>
    <h1>Návod k použití</h1>
    <p>Zvolte si vámi preferovaný jazyk a jazyk preferovaný druhou stranou. Napište, nebo namluvte větu, kterou chete přeložit. Přeložený text, se dá také spustit.</p>
    </div>
    <div>
    <h1>Technologie 3. stran</h1>
    <nl>
    <li>API- AWS Polly</li>
    <li>API- 3D Hand Pose with MediaPipe and TensorFlow.js</li>
    <li></li>
    </nl>
    </div>
    </div>
    </>
}

export default Info