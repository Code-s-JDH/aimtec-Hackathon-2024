import React from 'react'
import './home.css'

import TranslateInput from "../../components/translateInput/TranslateInput"
import TranslateOutput from "../../components/translateOutput/TranslateOutput"

const Home = () => {
  return <div className='translator'>
    <TranslateInput/>
    <TranslateOutput/>
    </div>
}

export default Home