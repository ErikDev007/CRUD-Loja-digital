import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

function ClienteEndereco() {
    return(
        <div className="ClienteEndereco">
            <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm mb-3 fixed-top">
        <div className="container">
        <Link className="navbar-brand" to="/"><img src="../src/assets/Logo.png" style={{width:"100px" , height:"48px"}}></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white fw-bolder fs-5" >Principal</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link text-white fw-bolder fs-5">Contato</Link>
                        </li>
                    </ul>
                    <div class="align-self-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/cliente_pedidos" class="nav-link text-white fw-bolder fs-5"><b>Cliente</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link text-white fw-bolder fs-5">Sair</Link>
                            </li>
                            <li className="nav-item">
                                <span className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0"
                                    title="0 produto(s) no carrinho"><small>0</small></span>
                                <Link to="/carrinho" className="nav-link text-white"><img className="bi-cart" style={{width:"32px" , height:"32px"}} src="https://img.icons8.com/?size=100&id=5esIoe7Rz8YD&format=png&color=000000"/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <br className="mt-5" />
        <main class="flex-fill mt-5">
            <div class="container">
                <h1>Selecione o Endereço de Entrega</h1>
                <h3 class="mb-4">
                    Selecione o endereço de entrega e clique em <b>Continuar</b> para prosseguir para a <b>seleção da
                        forma de pagamento</b>.
                </h3>
                <div class="d-flex justify-content-around flex-wrap border rounded-top pt-4 px-3">
                    <div class="mb-4 mx-2 flex-even">
                        <input type="radio" class="btn-check" name="endereco" 
                            autocomplete="off" id="end1"/>
                        <label class="btn btn-outline-danger p-4 h-100 w-100" for="end1">
                            <h3>
                                <b class="text-dark">Minha Casa</b>
                                <br/>
                                <hr/>
                                <b>nome</b>
                                <br/>
                                endereço, numero
                                <br/>
                                bairro
                                <br/>
                                cpf-numero
                            </h3>
                        </label>
                    </div>
                    <div class="mb-4 mx-2 flex-even">
                        <input type="radio" class="btn-check" name="endereco" 
                            autocomplete="off" id="end2"/>
                        <label class="btn btn-outline-danger p-4 h-100 w-100" for="end2">
                            <h3>
                                <b class="text-dark">Meu Trabalho</b>
                                <br/>
                                <hr/>
                                <b>nome</b>
                                <br/>
                                endereço, numero
                                <br/>
                                bairro
                                <br/>
                                cpf-numero
                            </h3>
                        </label>
                    </div>
                    <div class="mb-4 mx-2 flex-even">
                        <input type="radio" class="btn-check" name="endereco" 
                            autocomplete="off" id="end3"/>
                        <label class="btn btn-outline-danger p-4 h-100 w-100" for="end3">
                            <h3>
                                <b class="text-dark">Casa de Praia</b>
                                <br/>
                                <hr/>
                                <b>nome</b>
                                <br/>
                                endereço, numero
                                <br/>
                                bairro
                                <br/>
                                cpf-numero
                            </h3>
                        </label>
                    </div>
                </div>
                <div class="text-end border border-top-0 rounded-bottom p-4 pb-0">                    
                    <Link to="/fechamentoitens" class="btn btn-outline-success btn-lg mb-4">
                        Voltar aos Itens
                    </Link>
                    <Link to="/fechamentopagamento" class="btn btn-danger btn-lg ms-2 mb-4">Continuar</Link>
                </div>
            
            
            </div>
            
        </main>


        <Footer />
        </div>

        );

        }

        export default ClienteEndereco;