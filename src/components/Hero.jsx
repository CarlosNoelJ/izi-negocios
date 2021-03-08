import React from 'react'
import '../assets/Styles/components/Hero.scss'
import Whatsapp from '../assets/Static/wp.png'


const Hero = () => (

    <section className="hero">

    <div className="hero-text">
      <h2 className="hero-titulo">IZI NEGOCIOS</h2>
      <p>Desde 1999 ayudamos a las empresas del Perú a desarrollar sus negocios.</p>
      <a href="https://wa.me/message/HCA7K3K5XSVUJ1" className="btn-get-started scrollto"><img src={Whatsapp} className="img" alt=""/>Comenzamos</a>

    </div>

  </section>
)

export default Hero;