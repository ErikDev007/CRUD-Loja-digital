import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

    

function Cadastro() {

    const [Nome, setNome] = React.useState('');
    const [SobreNome, setSobreNome] = React.useState('');
    const [CPF, setCPF] = React.useState('');
    const [Nascimento, setNascimento] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Telefone, setTelefone] = React.useState('');
    const [CEP, setCEP] = React.useState('');
    const [Numero, setNumero] = React.useState('');
    const [Complemento, setComplemento] = React.useState('');
    const [Referencia, setReferencia] = React.useState('');
    const [Senha, setSenha] = React.useState('');
    const [ConfirmacaoSenha, setConfirmacaoSenha] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const Cliente = {
            Nome,
            SobreNome,
            CPF,
            Nascimento,
            Email,
            Telefone,
            CEP,
            Numero,
            Complemento,
            Referencia,
            Senha,
            ConfirmacaoSenha
        }
        console.log(Cliente)
    }

    
    return(
        <div classNameName="Cadastro">
    <div className="d-flex flex-column wrapper">

    <NavBar />

        <main className="flex-fill" style={{padding: "100px"}}>
            <div classNameName="container pt-5">
                <h1>Informe seus dados, por favor</h1>
                <hr/>
                <form className="mt-3" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <fieldset className="row gx-3">
                                <legend>Dados Pessoais</legend>
                                <div className="form-floating mb-3">
                                    <input className="form-control" type="text" id="Nome" placeholder=" " autofocus value={Nome} onChange={(e) => setNome(e.target.value)}/>
                                    <label for="txtNome">Nome</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" type="text" id="SobreNome" placeholder=" " autofocus value={SobreNome} onChange={(e) => setSobreNome(e.target.value)}/>
                                    <label for="txtNome">Sobrenome</label>
                                </div>
                                <div className="form-floating mb-3 col-md-6 col-xl-4">
                                    <input className="form-control" type="text" id="txtCPF" placeholder=" " value={CPF} onChange={(e) => setCPF(e.target.value)}/>
                                    <label for="txtCPF">CPF</label>
                                </div>
                                <div className="form-floating mb-3 col-md-6 col-xl-4">
                                    <input className="form-control" type="date" id="Nascimento" placeholder=" " value={Nascimento} onChange={(e) => setNascimento(e.target.value)}/>
                                    <label for="txtDataNascimento" className="d-inline d-sm-none d-md-inline d-lg-none">Data
                                        Nascimento</label>
                                    <label for="Nascimento" className="d-none d-sm-inline d-md-none d-lg-inline">Data
                                        de Nascimento</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Contatos</legend>
                                <div className="form-floating mb-3 col-md-8">
                                    <input className="form-control" type="email" id="txtEmail" placeholder=" " value={Email} onChange={(e) => setEmail(e.target.value)}/>
                                    <label for="txtEmail">E-mail</label>
                                </div>
                                <div className="form-floating mb-3 col-md-6">
                                    <input className="form-control" placeholder=" " type="text" id="txtTelefone" value={Telefone} onChange={(e) => setTelefone(e.target.value)}/>
                                    <label for="txtTelefone">Telefone</label>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <fieldset className="row gx-3">
                                <legend>Endereço</legend>
                                <div className="form-floating mb-3 col-md-6 col-lg-4">
                                    <input className="form-control" type="text" id="CEP" placeholder=" " value={CEP} onChange={(e) => setCEP(e.target.value)}/>
                                    <label for="CEP">CEP</label>
                                </div>
                                <div className="mb-3 col-md-6 col-lg-8 align-self-end">
                                    <textarea className="form-control text-muted bg-light"
                                        disabled>Digite o CEP para buscarmos o endereço.</textarea>
                                </div>
                                <div className="clearfix"></div>
                                <div className="form-floating mb-3 col-md-4">
                                    <input className="form-control" type="text" id="Numero" placeholder=" " value={Numero} onChange={(e) => setNumero(e.target.value)}/>
                                    <label for="Numero">Número</label>
                                </div>
                                <div className="form-floating mb-3 col-md-8">
                                    <input className="form-control" type="text" id="Complemento" placeholder=" " value={Complemento} onChange={(e) => setComplemento(e.target.value)}/>
                                    <label for="Complemento">Complemento</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" type="text" id="Referencia" placeholder=" " value={Referencia} onChange={(e) => setReferencia(e.target.value)}/>
                                    <label for="Referencia">Referência</label>
                                </div>
                            </fieldset>
                            <fieldset className="row gx-3">
                                <legend>Senha de Acesso</legend>
                                <div className="form-floating mb-3 col-lg-6">
                                    <input className="form-control" type="password" id="Senha" placeholder=" " value={Senha} onChange={(e) => setSenha(e.target.value)}/>
                                    <label for="Senha">Senha</label>
                                </div>
                                <div className="form-floating mb-3 col-lg-6">
                                    <input className="form-control" id="ConfirmacaoSenha" placeholder=" " value={ConfirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)}/>
                                    <label className="form-label" for="ConfirmacaoSenha">Confirmação da Senha</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="CheckBox"/>
                        <label className="form-check-label" for="CheckBox">
                            Desejo receber informações sobre promoções.
                        </label>
                    </div>
                    <div className="mb-3 text-left">
                        <Link className="btn btn-lg btn-light btn-outline-danger" to="/">Cancelar</Link>
                        <input type="button" value="Criar meu cadastro" className="btn btn-lg btn-info"
                            onclick="window.location.to='/confirmarcadastro.html'" />
                    </div>
                    <button></button>
                </form>
            </div>
        </main>

        <Footer />
        </div>
        </div>
);
}

export default Cadastro;