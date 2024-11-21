import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear()

function Footer() {
    return (
        <footer className="border-top text-muted bg-light">
            <div className="container">
                <div className="row py-3">
                    <div className="col-12 col-md-4 text-center">
                        &copy; {currentYear} - Grafica E.E Ltda ME
                        <br/>
                        Fortaleza/CE
                        <br/>
                        CPNJ 99.999.999/0000-00
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <a href="/privacidade.html" className="text-decoration-none text-dark">
                            Política de Privacidade
                        </a>
                        <br/>
                        <a href="/termos.html" className="text-decoration-none text-dark">
                            Termos de Uso
                        </a>
                        <br/>
                        <a href="/quemsomos.html" className="text-decoration-none text-dark">
                            Quem Somos
                        </a>
                        <br/>
                        <Link to="/trocas" className="text-decoration-none text-dark">
                            Trocas e Devoluções
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <Link to="/contato" className="text-decoration-none text-dark">
                            Contato pelo Site
                        </Link>
                        <br/>
                        E-mail: <a href="Eriklima832@gmail.com" className="text-decoration-none text-dark">
                            Eriklima832@gmail.com
                        </a>
                        <br/>
                        Telefone: <a href="phone:85999999999" className="text-decoration-none text-dark">
                            (85) 99999-9999
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
