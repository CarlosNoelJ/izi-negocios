import React from 'react'


class BadgeNew extends React.Component {

    constructor(props){
        super(props);

        this.state = {
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
    }

    render(){
        return (
            <div>
                <input placeholder="DNI o RUC" value={this.state.form.id} onChange={this.handleIdChanged.bind(this)} type="number"/>
                <input placeholder="Nombre Completo"  value={this.state.form.nombre} onChange={this.handleNombreChanged.bind(this)} type="text"/>
                <input placeholder="celular"  value={this.state.form.celular} onChange={this.handleCelularChanged.bind(this)} type="number"/>
                <input placeholder="correo" value={this.state.form.correo} onChange={this.handleCorreoChanged.bind(this)} type="email"/>

                <button onClick={this.handleButtonClicked.bind(this)}>Envíar información</button>
            </div>
        );
    }

}

export default BadgeNew;