import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function ConfirmaCadastro() {
    return(
        <div className="ConfirmaCadastro">
            <NavBar />

<main class="flex-fill">
    <div class="container">
        <h1>Cadastro Realizado com Sucesso!</h1>
        <hr/>
        <p>
            Caro <b>{Cliente.Name}</b>,
        </p>
        <p>
            Obrigado por se cadastrar em nossa loja virtual. Um e-mail de confirmação foi enviado para o <b>{Cliente.Email}</b>. Clique no link de confirmação presente no e-mail para concluirmos seu cadastro.
        </p>
        <p>
            Desde já, agradecemos pela confiança em nossos serviços.
        </p>
        <p>
            Cordialmente,
            <br/>
            Central de Relacionamento Grafica E.E
        </p>
        <p>
            <Link to="/" class="btn btn-lg btn-danger">Voltar à Página Principal</Link>
        </p>
    </div>
</main>

<Footer />

        </div>
    )
}

export default ConfirmaCadastro;