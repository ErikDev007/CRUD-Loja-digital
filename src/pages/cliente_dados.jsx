import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

function ClienteDados() {
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
                                <Link to="/clientepedidos" class="nav-link text-white">Logado como <b>{Cliente.Name}</b></Link>
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
                            <Link href="/clientedados" class="list-group-item list-group-item-action bg-danger text-light">
                                <i class="bi-person fs-6"></i> Dados Pessoais
                            </Link>
                            <Link href="/clientecontatos" class="list-group-item list-group-item-action">
                                <i class="bi-mailbox fs-6"></i> Contatos
                            </Link>
                            <Link href="/clienteendereco" class="list-group-item list-group-item-action">
                                <i class="bi-house-door fs-6"></i> Endereço
                            </Link>
                            <Link href="/clientepedidos" class="list-group-item list-group-item-action">
                                <i class="bi-truck fs-6"></i> Pedidos
                            </Link>
                            <Link href="/clientefavoritos" class="list-group-item list-group-item-action">
                                <i class="bi-heart fs-6"></i> Favoritos
                            </Link>
                            <Link href="/clientesenha" class="list-group-item list-group-item-action">
                                <i class="bi-lock fs-6"></i> Alterar Senha
                            </Link>
                            <Link href="/index" class="list-group-item list-group-item-action">
                                <i class="bi-door-open fs-6"></i> Sair
                            </Link>
                        </div>
                    </div>
                    <div class="col-8">
                        <form action="">
                            <div class="form-floating mb-3">
                                <input class="form-control" type="text" id="txtNome" placeholder=" " autofocus />
                                <label for="txtNome">Nome</label>
                            </div>
                            <div class="form-floating mb-3 col-md-6 col-xl-4">
                                <input class="form-control" type="text" id="txtCPF" placeholder=" " />
                                <label for="txtCPF">CPF</label>
                            </div>
                            <div class="form-floating mb-3 col-md-6 col-xl-4">
                                <input class="form-control" type="date" id="txtDataNascimento" placeholder=" " />
                                <label for="txtDataNascimento">Data de Nascimento</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
        </div>

    )
}

export default ClienteDados;