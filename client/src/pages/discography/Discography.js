import React from 'react'
import Navbar from "../../moduls/navbar/Navbar"
import Footer from "../../moduls/footer/Footer"
import Desc from "../../moduls/sections/desc/Desc"
import image from "../../media/test_picture_sq.png"
import konecSpolecnostiImg from "../../media/obal_konec_spolecnosti.jpeg"
import chtelJsemHratImg from "../../media/logo_kapela_storno.jpg"
const Discography = () =>{
    const descs = [
        {
            id: 1,
            image: konecSpolecnostiImg,
            type: "singl",
            title: "Konec Společnosti",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi consectetur pariatur, aliquid corporis delectus nobis voluptates quisquam illo dignissimos, facilis necessitatibus, quidem dolores! Culpa impedit voluptatum voluptatibus ullam tempora.",
            date: "10. 2. 2024"
        },
        {
            id: 2,
            image: chtelJsemHratImg ,
            type: "singl",
            title: "Chtěl jsem hrát",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi consectetur pariatur, aliquid corporis delectus nobis voluptates quisquam illo dignissimos, facilis necessitatibus, quidem dolores! Culpa impedit voluptatum voluptatibus ullam tempora.",
            date: "10. 2. 2024"
        },
    ]
    return <>
    <Navbar></Navbar>
    <Desc image = {descs[0].image} type = {descs[0].type} title = {descs[0].title} desc = {descs[0].desc} date = {descs[0].date}/>
    <Desc image = {descs[1].image} type = {descs[1].type} title = {descs[1].title} desc = {descs[1].desc} date = {descs[1].date}/>
    <Footer></Footer>
    </>
}

export default Discography