import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

function FechamentoPedidos() {
    return(
        <div className="FechamentoPedidos">
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
                                <Link to="/clientepedidos" class="nav-link text-white fw-bolder fs-5"><b>Cliente</b></Link>
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
        <main class="flex-fill">
            <div class="container">
                <h1>Confira os Itens</h1>
                <h3>Confira os itens e clique em <b>Continuar</b> para prosseguir para a <b>seleção do endereço de entrega</b>.</h3>
                <ul class="list-group mb-3">
                    <li class="list-group-item py-3">
                        <div class="row g-3">
                            <div class="col-4 col-md-3 col-lg-2">
                                <Link to="#">
                                    <img src="/img/produtos/000008.jpg" class="img-thumbnail"/>
                                </Link>
                            </div>
                            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                <h4>
                                    <b><Link to="#" class="text-decoration-none text-danger">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível e muito fresco.
                                    
                                    <br/>
                                    <b>
                                        4 unidade(s) 
                                        <br/>
                                        R$ 15,96
                                    </b>
                                </h5>
                            </div>                            
                        </div>
                    </li>
                    <li class="list-group-item py-3">
                        <div class="row g-3">
                            <div class="col-4 col-md-3 col-lg-2">
                                <Link to="#">
                                    <img src="/img/produtos/000003.jpg" class="img-thumbnail"/>
                                </Link>
                            </div>
                            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                <h4>
                                    <b><Link to="#" class="text-decoration-none text-danger">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível e muito fresco. 
                                    <br/>
                                    <b>
                                        4 unidade(s) 
                                        <br/>
                                        R$ 15,96
                                    </b>
                                </h5>
                            </div>                            
                        </div>
                    </li>
                    <li class="list-group-item py-3">
                        <div class="row g-3">
                            <div class="col-4 col-md-3 col-lg-2">
                                <Link to="#">
                                    <img src="/img/produtos/000006.jpg" class="img-thumbnail"/>
                                </Link>
                            </div>
                            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                <h4>
                                    <b><Link to="#" class="text-decoration-none text-danger">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível e muito fresco. 
                                    <br/>
                                    <b>
                                        4 unidade(s) 
                                        <br/>
                                        R$ 15,96
                                    </b>
                                </h5>
                            </div>                    
                        </div>
                    </li>
                    <li class="list-group-item py-3">
                        <div class="row g-3">
                            <div class="col-4 col-md-3 col-lg-2">
                                <Link to="#">
                                    <img src="/img/produtos/000012.jpg" class="img-thumbnail"/>
                                </Link>
                            </div>
                            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                                <h4>
                                    <b><Link to="#" class="text-decoration-none text-danger">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível e muito fresco. 
                                    <br/>
                                    <b>
                                        4 unidade(s) 
                                        <br/>
                                        R$ 15,96
                                    </b>
                                </h5>
                            </div>                            
                        </div>
                    </li>
                    <li class="list-group-item pt-3 pb-0">
                        <div class="text-end">
                            <h4 class="text-dark mb-3">
                                Valor Total: R$ 63,84
                            </h4>
                            <Link to="/carrinho" class="btn btn-outline-success btn-lg mb-3">
                                Voltar ao Carrinho
                            </Link>
                            <Link to="/fechamentoendereco" class="btn btn-danger btn-lg ms-2 mb-3">Continuar</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </main>



        <Footer />
        </div>

        );

        }

        export default FechamentoPedidos;