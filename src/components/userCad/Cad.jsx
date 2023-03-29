import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
icon: 'users',
title: 'Usuários',
subtitle: 'Aba de login'
}

const initialState = {
user: { name: '', password: '' }
}

export default class userLogin extends Component {

state = { ...initialState }

clear() {
    this.setState({ user: initialState.user })
}

cadastro() {
    return (
        alert("Cadastro efetivado com sucesso!")
    )
}

updateField(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
}

renderForm() {
    return (
        <div className="form">
            <div className="row d-flex ">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Nome..." />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Sobrenome</label>
                        <input type="text" className="form-control"
                            name="undername"
                            value={this.state.user.undername}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a Sobrenome..." />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o E-mail..." />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control"
                            name="password"
                            value={this.state.user.password}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a senha..." />
                    </div>
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary"
                        onClick={e => this.cadastro(e)}>
                        Cadastrar
                    </button>

                    <button className="btn btn-secondary ml-2"
                        onClick={e => this.clear(e)}>
                        cancelar
                    </button>
                </div>

                
            </div>
        </div>
    )
}

render() {
    return (
        <Main {...headerProps}>
            Área de Cadastro
            <hr />
            {this.renderForm()}
        </Main>
    )
}
}
