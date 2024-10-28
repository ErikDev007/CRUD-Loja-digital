import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function ClientePedidos() {
    return(
        <div className="CLientePedidos">
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
                            <Link to="/" className="nav-link text-white fw-bolder fs-5" href="#">Principal</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link text-white fw-bolder fs-5">Contato</Link>
                        </li>
                    </ul>
                    <div class="align-self-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/clientepedidos.html" class="nav-link text-white fw-bolder fs-5">Cliente</Link>
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
                <h1>Minha Conta</h1>
                <div class="row gx-3">
                    <div class="col-4">
                        <div class="list-group">
                            <Link href="/clientedados.html" class="list-group-item list-group-item-action">
                                <i class="bi-person fs-6"></i> Dados Pessoais
                            </Link>
                            <Link href="/clientecontatos.html" class="list-group-item list-group-item-action">
                                <i class="bi-mailbox fs-6"></i> Contatos
                            </Link>
                            <Link href="/clienteendereco.html" class="list-group-item list-group-item-action">
                                <i class="bi-house-door fs-6"></i> Endereço
                            </Link>
                            <Link href="/clientepedidos.html"
                                class="list-group-item list-group-item-action bg-danger text-light">
                                <i class="bi-truck fs-6"></i> Pedidos
                            </Link>
                            <Link href="/clientefavoritos.html" class="list-group-item list-group-item-action">
                                <i class="bi-heart fs-6"></i> Favoritos
                            </Link>
                            <Link href="/clientesenha.html" class="list-group-item list-group-item-action">
                                <i class="bi-lock fs-6"></i> Alterar Senha
                            </Link>
                            <Link href="/index.html" class="list-group-item list-group-item-action">
                                <i class="bi-door-open fs-6"></i> Sair
                            </Link>
                        </div>
                    </div>
                    <div class="col-8">
                        <form class="row mb-3">
                            <div class="col-12 col-md-6 mb-3">
                                <div class="form-floating">
                                    <select class="form-select">
                                        <option value="30">Últimos 30 dias</option>
                                        <option value="60">Últimos 60 dias</option>
                                        <option value="90">Últimos 90 dias</option>
                                        <option value="180">Últimos 180 dias</option>
                                        <option value="360" selected>Últimos 360 dias</option>
                                        <option value="9999">Todo o período</option>
                                    </select>
                                    <label>Período</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating">
                                    <select class="form-select">
                                        <option value="1" selected>Mais novos primeiro</option>
                                        <option value="2">Mais antigos primeiro</option>
                                    </select>
                                    <label>Ordenação</label>
                                </div>
                            </div>
                        </form>
                        <div class="accordion" id="divPedidos">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#pedido000010">
                                        <b>Pedido 000010</b>
                                        <span class="mx-1">(realizado em 11/10/2020)</span>
                                    </button>
                                </h2>
                                <div id="pedido000010" class="accordion-collapse collapse" data-bs-parent="#divPedidos">
                                    <div class="accordion-body">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Produto</th>
                                                    <th class="text-end">R$ Unit.</th>
                                                    <th class="text-center">Qtde.</th>
                                                    <th class="text-end">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Abacate Manteiga</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Banana Prata</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Mamão Papaya</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor dos Produtos:</th>
                                                    <td class="text-end">26,91</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor do Frete:</th>
                                                    <td class="text-end">7,50</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor a Pagar:</th>
                                                    <td class="text-end">34,41</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Forma de Pagamento:</th>
                                                    <td class="text-end">Crédito VISA 1x</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#pedido000009">
                                        <b>Pedido 000009</b>
                                        <span class="mx-1">(realizado em 11/10/2020)</span>
                                    </button>
                                </h2>
                                <div id="pedido000009" class="accordion-collapse collapse" data-bs-parent="#divPedidos">
                                    <div class="accordion-body">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Produto</th>
                                                    <th class="text-end">R$ Unit.</th>
                                                    <th class="text-center">Qtde.</th>
                                                    <th class="text-end">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Abacate Manteiga</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Banana Prata</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Mamão Papaya</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor dos Produtos:</th>
                                                    <td class="text-end">26,91</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor do Frete:</th>
                                                    <td class="text-end">7,50</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor a Pagar:</th>
                                                    <td class="text-end">34,41</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Forma de Pagamento:</th>
                                                    <td class="text-end">Crédito VISA 1x</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#pedido000008">
                                        <b>Pedido 000008</b>
                                        <span class="mx-1">(realizado em 11/10/2020)</span>
                                    </button>
                                </h2>
                                <div id="pedido000008" class="accordion-collapse collapse" data-bs-parent="#divPedidos">
                                    <div class="accordion-body">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Produto</th>
                                                    <th class="text-end">R$ Unit.</th>
                                                    <th class="text-center">Qtde.</th>
                                                    <th class="text-end">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Abacate Manteiga</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Banana Prata</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Mamão Papaya</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor dos Produtos:</th>
                                                    <td class="text-end">26,91</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor do Frete:</th>
                                                    <td class="text-end">7,50</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor a Pagar:</th>
                                                    <td class="text-end">34,41</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Forma de Pagamento:</th>
                                                    <td class="text-end">Crédito VISA 1x</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#pedido000007">
                                        <b>Pedido 000007</b>
                                        <span class="mx-1">(realizado em 11/10/2020)</span>
                                    </button>
                                </h2>
                                <div id="pedido000007" class="accordion-collapse collapse" data-bs-parent="#divPedidos">
                                    <div class="accordion-body">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Produto</th>
                                                    <th class="text-end">R$ Unit.</th>
                                                    <th class="text-center">Qtde.</th>
                                                    <th class="text-end">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Abacate Manteiga</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Banana Prata</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Mamão Papaya</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor dos Produtos:</th>
                                                    <td class="text-end">26,91</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor do Frete:</th>
                                                    <td class="text-end">7,50</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor a Pagar:</th>
                                                    <td class="text-end">34,41</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Forma de Pagamento:</th>
                                                    <td class="text-end">Crédito VISA 1x</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#pedido000006">
                                        <b>Pedido 000006</b>
                                        <span class="mx-1">(realizado em 11/10/2020)</span>
                                    </button>
                                </h2>
                                <div id="pedido000006" class="accordion-collapse collapse" data-bs-parent="#divPedidos">
                                    <div class="accordion-body">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Produto</th>
                                                    <th class="text-end">R$ Unit.</th>
                                                    <th class="text-center">Qtde.</th>
                                                    <th class="text-end">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Abacate Manteiga</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Banana Prata</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                                <tr>
                                                    <td>Mamão Papaya</td>
                                                    <td class="text-end">2,99</td>
                                                    <td class="text-center">3</td>
                                                    <td class="text-end">8,97</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor dos Produtos:</th>
                                                    <td class="text-end">26,91</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor do Frete:</th>
                                                    <td class="text-end">7,50</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Valor a Pagar:</th>
                                                    <td class="text-end">34,41</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-end" colspan="3">Forma de Pagamento:</th>
                                                    <td class="text-end">Crédito VISA 1x</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>

        </div>

    );
}

export default ClientePedidos