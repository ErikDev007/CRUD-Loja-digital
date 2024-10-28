import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

function ClienteEndereco() {
    return(
        <div className="ClienteContatos">
            <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm mb-3 fixed-top">
        <div className="container">
                <Link className="navbar-brand" href="/"><img src="../src/Logo.png" style={{width:"100px" , height:"48px"}}></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white fw-bolder fs-5" href="#">Principal</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link text-white fw-bolder fs-5">Contato</Link>
                        </li>
                    </ul>
                    <div class="align-self-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/cliente_pedidos.html" class="nav-link text-white">Logado como <b>{Cliente.Name}</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link text-white">Sair</Link>
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
 
        <main class="flex-fill">
            <div class="container">
                <h1>Minha Conta</h1>
                <div class="row gx-3">
                    <div class="col-4">
                        <div class="list-group">
                            <Link to="/cliente_dados.html" class="list-group-item list-group-item-action">
                                <i class="bi-person fs-6"></i> Dados Pessoais
                            </Link>
                            <Link href="/cliente_contatos.html" class="list-group-item list-group-item-action bg-danger text-light">
                                <i class="bi-mailbox fs-6"></i> Contatos
                            </Link>
                            <Link href="/cliente_endereco.html" class="list-group-item list-group-item-action">
                                <i class="bi-house-door fs-6"></i> Endereço
                            </Link>
                            <Link href="/cliente_pedidos.html" class="list-group-item list-group-item-action">
                                <i class="bi-truck fs-6"></i> Pedidos
                            </Link>
                            <Link href="/cliente_favoritos.html" class="list-group-item list-group-item-action">
                                <i class="bi-heart fs-6"></i> Favoritos
                            </Link>
                            <Link href="/cliente_senha.html" class="list-group-item list-group-item-action">
                                <i class="bi-lock fs-6"></i> Alterar Senha
                            </Link>
                            <Link href="/index.html" class="list-group-item list-group-item-action">
                                <i class="bi-door-open fs-6"></i> Sair
                            </Link>
                        </div>
                    </div>
                    <div class="col-8">
                        <form action="">
                            <div class="form-floating mb-3 col-md-6 col-lg-4">
                                <input class="form-control" type="text" id="txtCEP" placeholder=" " autofocus />
                                <label for="txtCEP">CEP</label>
                            </div>
                            <div class="mb-3 col-md-6 col-lg-8">
                                <textarea class="form-control text-muted bg-light text" style="height: 58px; font-size: 14px;" 
                                    disabled>Digite o CEP para buscarmos o endereço.</textarea>
                            </div> 
                            <div class="form-floating mb-3 col-md-4">
                                <input class="form-control" type="text" id="txtNumero" placeholder=" " autofocus />
                                <label for="txtNumero">Número</label>
                            </div>
                            <div class="form-floating mb-3 col-md-8">
                                <input class="form-control" type="text" id="txtComplemento" placeholder=" " autofocus />
                                <label for="txtComplemento">Complemento</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" type="text" id="txtReferencia" placeholder=" " autofocus />
                                <label for="txtReferencia">Ponto de Referência</label>
                            </div>                           
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
        </div>
    );
}

export default ClienteEndereco;