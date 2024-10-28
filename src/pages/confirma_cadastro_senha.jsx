import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function ConfirmaCadastroSenha() {
    return (
        <div className="ConfirmaCadastroSenha">
        <NavBar />
        <main class="flex-fill">
            <div class="container">
                <h1>Nova Senha Cadastrada!</h1>
                <hr/>
                <p>
                    Caro {cliente.Nome},
                </p>
                <p>
                    Sua nova senha foi cadastrada com sucesso. Para entrar em sua área restrita agora mesmo, <Link href="/login">clique aqui</Link>.
                </p>
                <p>
                    Agradecemos pela confiança em nossos serviços.
                </p>
                <p>
                    Cordialmente,
                    <br/>
                    Central de Relacionamento Grafica E.E
                </p>
                <p>
                    <Link to="/" class="btn btn-lg btn-info">Voltar à Página Principal</Link>
                </p>
            </div>
        </main>
        <Footer />
    </div>
    )
    
}
export default ConfirmaCadastroSenha;
