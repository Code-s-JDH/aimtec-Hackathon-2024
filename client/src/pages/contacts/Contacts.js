import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../moduls/navbar/Navbar"
import Footer from "../../moduls/footer/Footer"
import "./Contacts.css"

import { faYoutube, faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contacts = () =>{
    return <>
    <Navbar></Navbar>
    <section className="informationText">
        <h1>Informace pro pořadatele</h1>
        <p>Pokud nás chcete na vaší akci, kontaktujte nás na emailové adrese kapela.storno@gmail.com. Na ceně se dohodneme v závislosti na podmínkách, Náročnosti dopravy atd...</p>
        </section>
    <Footer></Footer>
    </>
}

export default Contacts