import React from 'react'
import '../assets/Styles/components/Hero.scss'
import Whatsapp from '../assets/Static/wp.png'

class Hero extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
      linkWp : '',
      form:{
        id: '',
        nombre: '',
        correo: '',
        celular: ''
      }
    }
  }

  handleIdChanged(event){
    var form = this.state.form;
    form.id = event.target.value;

    this.setState({form: form})
  }

  handleNombreChanged(event){
      var form = this.state.form;
      form.nombre = event.target.value;

      this.setState({form:form})
  }

  handleCelularChanged(event){
      var form = this.state.form;
      form.celular = event.target.value;

      this.setState({form:form})
  }

  handleCorreoChanged(event){
      var form = this.state.form;
      form.correo = event.target.value;

      this.setState({form:form})
  }

  handleButtonClicked(){
      console.log(this.state.form)

      const URL = 'https://wa.me';
      const numeroRepresentante = 51958805677;
      const id = this.state.form.id;
      const nombre = this.state.form.nombre;
      const correo = this.state.form.correo;
      const celular = this.state.form.celular;

      var url = `${URL}/${numeroRepresentante}`;
      url += `?text=DNI o RUC:%20${id}%0ANombre%20Completo:%20${nombre}%0ACorreo:%20${correo}%0ANumero%20de%20Contacto:%20${celular}`;
      this.setState({linkWp:url})
  }

  render(){
    return ( 
      <div>
      <section className="hero">
        <div className="hero-text">
          <h2 className="hero-titulo">IZI NEGOCIOS</h2>
          <h3>Bienvenido a tu portal de compras izinegocios donde encontrarás las mejores ofertas . ¿Que esperas?</h3>

          <form className="formulario">
              <div className="form-group row">
                <input className="form-control" placeholder="DNI o RUC" value={this.state.form.id} onChange={this.handleIdChanged.bind(this)} type="number"/>
              </div>
              <div className="form-group row">
                <input className="form-control" placeholder="Nombre Completo"  value={this.state.form.nombre} onChange={this.handleNombreChanged.bind(this)} type="text"/>
              </div>
              <div className="form-group row">
                <input className="form-control" placeholder="celular"  value={this.state.form.celular} onChange={this.handleCelularChanged.bind(this)} type="number"/>
              </div>
              <div className="form-group row">
                <input className="form-control" placeholder="correo" value={this.state.form.correo} onChange={this.handleCorreoChanged.bind(this)} type="email"/>
              </div>
          </form>

          <a href={this.state.linkWp} className="btn-get-started" onClick={this.handleButtonClicked.bind(this)}><img src={Whatsapp} className="img" alt=""/><span> Consulta con nuestros asesores especializados</span></a>
        </div>
      </section>
      </div>
      )
  }
}

export default Hero;