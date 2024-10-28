import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function Carrinho() {
    return(
        <div class="d-flex flex-column wrapper">
        <NavBar />

        <main class="flex-fill" style={{paddingTop: "100px"}}>
            <div class="container">
                <h1>Carrinho de Compras</h1>
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
                                    <b><Link to="#" class="text-decoration-none text-info">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível.
                                </h5>
                            </div>
                            <div
                                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                                <div class="input-group">
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-down"></i>
                                    </button>
                                    <input type="text" class="form-control text-center border-dark" value="4"/>
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-up"></i>
                                    </button>
                                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                                        <i class="bi-trash"></i>
                                    </button>
                                </div>
                                <div class="text-end mt-2">
                                    <small class="text-secondary">Valor: R$ 9,99</small><br/>
                                    <span class="text-dark">Valor Item: R$ 9,99</span>
                                </div>
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
                                    <b><Link to="#" class="text-decoration-none text-info">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível.
                                </h5>
                            </div>
                            <div
                                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                                <div class="input-group">
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-down"></i>
                                    </button>
                                    <input type="text" class="form-control text-center border-dark" value="4"/>
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-up"></i>
                                    </button>
                                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                                        <i class="bi-trash"></i>
                                    </button>
                                </div>
                                <div class="text-end mt-2">
                                    <small class="text-secondary">Valor: R$ 9,99</small><br/>
                                    <span class="text-dark">Valor Item: R$ 9,99</span>
                                </div>
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
                                    <b><Link to="#" class="text-decoration-none text-info">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível.
                                </h5>
                            </div>
                            <div
                                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                                <div class="input-group">
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-down"></i>
                                    </button>
                                    <input type="text" class="form-control text-center border-dark" value="4"/>
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-up"></i>
                                    </button>
                                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                                        <i class="bi-trash"></i>
                                    </button>
                                </div>
                                <div class="text-end mt-2">
                                    <small class="text-secondary">Valor: R$ 9,99</small><br/>
                                    <span class="text-dark">Valor Item: R$ 9,99</span>
                                </div>
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
                                    <b><Link to="#" class="text-decoration-none text-info">
                                            Produto</Link></b>
                                </h4>
                                <h5>
                                    Produto da melhor qualidade possível.
                                </h5>
                            </div>
                            <div
                                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                                <div class="input-group">
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-down"></i>
                                    </button>
                                    <input type="text" class="form-control text-center border-dark" value="4"/>
                                    <button class="btn btn-outline-dark btn-sm" type="button">
                                        <i class="bi-caret-up"></i>
                                    </button>
                                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                                        <i class="bi-trash"></i>
                                    </button>
                                </div>
                                <div class="text-end mt-2">
                                    <small class="text-secondary">Valor: R$ 9,99</small><br/>
                                    <span class="text-dark">Valor Item: R$ 9,99</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3">
                        <div class="text-end">
                            <h4 class="text-dark mb-3">
                                Valor Total: R$ 63,84
                            </h4>
                            <Link to="/" class="btn btn-outline-success btn-lg">
                                Continuar Comprando                            
                            </Link>
                            <Link to="/fechamentoitens" class="btn btn-info btn-lg ms-2 mt-xs-3">Fechar Compra</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </main>

        <Footer />
    </div>
    );
}

export default Carrinho