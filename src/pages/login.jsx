import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function Login() {
    return(
        <div class="d-flex flex-column wrapper">
        <NavBar />
        <main class="flex-fill mt-5">
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <form class="col-sm-10 col-md-8 col-lg-6">
                        <h1>Identifique-se, por favor</h1>

                        <div class="form-floating mb-3">
                            <input type="email" id="txtEmail" class="form-control" placeholder=" " autofocus/>
                            <label for="txtEmail">E-mail</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" id="txtSenha" class="form-control" placeholder=" "/>
                            <label for="txtSenha">Senha</label>
                        </div>

                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input" value="" id="chkLembrar"/>
                            <label for="chkLembrar" class="form-check-label">Lembrar de mim</label>
                        </div>

                        <button type="button" onclick="window.location.href='/cliente_pedidos.html'"
                            class="btn btn-lg btn-danger">Entrar</button>

                        <p class="mt-3">
                            Ainda não é cadastrado? <Link to="/cadastro" class="text-decoration-none text-danger">Clique aqui</Link> para se cadastrar.
                        </p>

                        <p class="mt-3">
                            Esqueceu sua senha? <Link to="/recuperasenha" class="text-decoration-none text-danger">Clique aqui</Link> para recuperá-la.
                        </p>
                    </form>
                </div>
            </div>
        </main>

        <Footer />
    </div>
    );
}

export default Login