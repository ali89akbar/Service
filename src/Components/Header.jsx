// import React, { useState } from 'react';


import Projects from './Projects.jsx'
import Image from '../Images/home-img.jpg'
import AboutUs from './AboutUs.jsx'
import ContactUs from './Contactus.jsx'

import '../style.scss'


const Header=()=>{

    return(

<div className='body'>
    
    <div className='Wrapper'>
        <section id="Mainsection"> 
            <div className='Main'>
                <h1 className='firstTag'> Web Developer</h1>
                <h2 className='firstTag-sub'><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum explicabo nulla nihil soluta rem veritatis iusto. Quisquam non repellendus quidem, tempore sed laborum eveniet, molestias et cupiditate saepe maxime atque. Ratione accusantium consectetur blanditiis sunt! Corrupti voluptates officia in!</h2>
                <div className="ImageSection"><img src={Image} alt="" /></div>
            </div>
        </section>
        <section id='ProjectSection'>
            
            <Projects/>
            
        </section>
        <section id='AboutSection'>
        </section>
        <section id="ContactSection">
            <ContactUs/>
        </section>
    </div>
    
    
</div>

    )
}
export default Header