import React from 'react'
import '../assets/Styles/components/Products.scss'

import IziJr from '../assets/Static/IziJr.png'
import Izi from '../assets/Static/Izi.png'
import IziSmart from '../assets/Static/IziSmart.png'


const Products = () => (

    <section className="pricing section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2 className="section-title">Nuestros Productos</h2>
          <span className="section-divider"></span>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="box featured">
              <img src={IziJr} alt=""/>
              <h3>izi Jr</h3>
              <h5>¡Conéctate a tu smartphone y listo!</h5>
              <ul>
                <li> <span>Se conecta</span> por bluetooth a un Smartphone o Tablet.</li>
                <li> Envía el voucher por <span>correo, SMS o redes sociales.</span></li>
                <li> Batería de <span>larga duración.</span></li>
              </ul>
              <h4><sup>S/.</sup>95</h4>
              <h6>Se aplica terminos y condiciones</h6>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="box featured">
              <img src={Izi} alt=""/>
              <h3>izi</h3>
              <h5><span>El POS portátil</span><br/>¡llévalo contigo siempre!</h5>
              <ul>
                <li> Incluye Chip con <span>internet ilimitado Gratis.</span></li>
                <li> <span>Envía el voucher</span> por SMS.</li>
                <li> Permite <span>firmar en pantalla.</span></li>
                <li> <span>No necesitas</span> un celular para funcionar.</li>
                <li> Recibe las copias de los <span>voucher por correo.</span></li>
              </ul>
              <h4><sup>S/.</sup>148</h4>
              <h6>Se aplica terminos y condiciones</h6>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="box featured">
              <img src={IziSmart} alt=""/>
              <h3>izi Smart</h3>
              <h5><span>El POS clásico</span> en su versión más moderna</h5>
              <ul>
                <li> Incluye Chip con <span>internet ilimitado Gratis.</span></li>
                <li> Pantalla <span>Táctil.</span></li>
                <li> Imprime el voucher o <span>envíalo por SMS o correo electrónico.</span></li>
                <li> POS <span>mobil</span></li>
              </ul>
              <h4><sup>S/.</sup>198</h4>
              <h6>Se aplica terminos y condiciones</h6>
            </div>
          </div>

        </div>
      </div>
    </section>
)


export default Products;