import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home.jsx';
import Cadastro from './pages/cadastro.jsx';
import FechamentoEndereco from './pages/fechamento_endereço.jsx';
import FechamentoItens from './pages/fechamento_itens.jsx';
import FechamentoPagamento from './pages/fechamento_pagamento.jsx';
import FechamentoPedidos from './pages/fechamento_pedidos.jsx';
import RecuperaSenha from './pages/recupera_senha.jsx';
import Cliente from './pages/cliente.jsx';
import Carrinho from "./pages/carrinho.jsx";
import Login from "./pages/login.jsx"
import Contato from "./pages/contato.jsx"
import Trocas from "./pages/trocas.jsx";
import Produto from "./pages/produto.jsx";
import ClienteSenha from "./pages/cliente_senha.jsx";
import ClientePedidos from "./pages/cliente_pedidos.jsx";
import ConfirmaCadastro from "./pages/confirma_cadastro.jsx";
import ConfirmaCadastroSenha from "./pages/confirma_cadastro_senha.jsx";
import ClienteContatos from "./pages/cliente_contatos.jsx"
import ClienteDados from "./pages/cliente_dados.jsx";
import ClienteEndereco from "./pages/cliente_endereço.jsx";
import ClienteFavoritos from "./pages/cliente_favoritos.jsx";
import CadastraNovaSenha from "./pages/cadastra_nova_senha.jsx"

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fechamentoitens" element={<FechamentoItens />} />
        <Route path="/fechamentopagamento" element={<FechamentoPagamento />} />
        <Route path="/fechamentopedidos" element={<FechamentoPedidos />} />
        <Route path="/recuperasenha" element={<RecuperaSenha />} />
        <Route path="/fechamentoendereco" element={<FechamentoEndereco />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/confirmacadastrosenha" element={<ConfirmaCadastroSenha />} />
        <Route path="/clientefavoritos" element={<ClienteFavoritos />} />
        <Route path="/clienteendereco" element={<ClienteEndereco />} />
        <Route path="/cadastranovasenha" element={<CadastraNovaSenha />} />
        <Route path="/clientedados" element={<ClienteDados />} />
        <Route path="/clientecontatos" element={<ClienteContatos />} />
        <Route path="/confirmacadastro" element={<ConfirmaCadastro />} />
        <Route path="/clientepedidos" element={<ClientePedidos />} />
        <Route path="/clientesenha" element={<ClienteSenha />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/trocas" element={<Trocas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
