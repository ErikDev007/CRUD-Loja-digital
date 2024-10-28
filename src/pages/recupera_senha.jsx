import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function RecuperaSenha() {
return(
    <div classNameName="RecuperaSenha">
<div className="d-flex flex-column wrapper">

<NavBar />

<main class="flex-fill mt-5">
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <form class="col-sm-10 col-md-8 col-lg-6">
                        <h1>Recuperação de Senha</h1>

                        <div class="form-floating mb-3">
                            <input type="email" id="txtEmail" class="form-control" placeholder=" " autofocus/>
                            <label for="txtEmail">E-mail</label>
                        </div>

                        <button type="button" onclick="window.location.href='/confirmrecupsenha.html'"
                            class="btn btn-lg btn-danger">Recuperar Senha</button>

                        <p class="mt-3">
                            Ainda não é cadastrado? <Link to="/cadastro">Clique aqui</Link> para se cadastrar.
                        </p>
                    </form>
                </div>
            </div>
        </main>

    <Footer />
    </div>
    </div>
);
}

export default RecuperaSenha;