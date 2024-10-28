import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function Contato() {
    return(
        <div class="d-flex flex-column wrapper">
        <NavBar />
 
        <main class="flex-fill mt-5">
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <form class="col-sm-10 col-md-8 col-lg-6">
                        <h1>Entre em Contato</h1>

                        <div class="form-floating mb-3">
                            <input type="text" id="NomeCompleto" class="form-control" placeholder=" " autofocus/>
                            <label for="NomeCompleto">Nome Completo</label>
                        </div>
                        
                        <div class="form-floating mb-3">
                            <input type="email" id="Email" class="form-control" placeholder=" "/>
                            <label for="Email">E-mail</label>
                        </div>

                        <div class="form-floating mb-3">
                            <textarea id="Mensagem" class="form-control" placeholder=" "></textarea>
                            <label for="Mensagem">Mensagem</label>
                        </div>

                        <button type="button" onclick="window.location.to='/confirmacontato'" class="btn btn-lg btn-danger">Enviar Mensagem</button>

                        <p class="mt-3">
                            Faremos nosso melhor para responder sua mensagem em até 2 dias úteis.
                        </p>

                        <p class="mt-3">
                            Atenciosamente,<br/>
                            Central de Relacionamento Grafica E.E
                        </p>
                    </form>
                </div>
            </div>
        </main>

        <Footer />
    </div>
    )
}

export default Contato