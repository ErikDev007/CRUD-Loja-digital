import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function ClienteSenha() {
    return(
        <div className="ClienteSenha">
            <NavBar />

<main class="flex-fill">
    <div class="container">
        <div class="row justify-content-center">
            <form class="col-sm-10 col-md-8 col-lg-6">
                <h1>Digite sua nova senha</h1>

                <div class="form-floating mb-3">
                    <input type="password" id="Senha" class="form-control" placeholder=" " autofocus/>
                    <label for="Senha">Nova Senha</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="password" id="ConfSenha" class="form-control" placeholder=" "/>
                    <label for="ConfSenha">Confirme a Nova Senha</label>
                </div>

                <button type="button" onclick="window.location.to='/confirmacadastrosenha'"
                    class="btn btn-lg btn-danger">Cadastrar Nova Senha</button>
                
            </form>
        </div>
    </div>
</main>

<Footer />
        </div>
    );
}

export default ClienteSenha;