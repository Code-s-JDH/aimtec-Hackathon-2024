import React from 'react'
import "./Concerts.css"
import { Link } from 'react-router-dom'
import Navbar from "../../moduls/navbar/Navbar"
import Footer from "../../moduls/footer/Footer"

const Concerts = () =>{
    return <>
    <Navbar></Navbar>
    <p className='inProc'>!!Probíhá příprava!!</p>
    <Footer></Footer>
    </>
}

export default Concerts