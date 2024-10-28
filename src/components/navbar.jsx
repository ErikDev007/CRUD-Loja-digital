import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
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
                            <Link to="/" className="nav-link text-white fw-bolder fs-5">Principal</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link text-white fw-bolder fs-5">Contato</Link>
                        </li>
                    </ul>
                    <div className="align-self-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/cadastro" className="nav-link text-white fw-bolder fs-5">Cadastrar</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login" className="nav-link text-white fw-bolder fs-5">Entrar</Link>
                            </li>
                            <li className="nav-item">
                                <span className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0"
                                    title="0 produto(s) no carrinho"><small>0</small></span>
                                <Link to="/carrinho" className="nav-link text-white"><img className="bi-cart" style={{width:"32px" , height:"32px"}} src="https://img.icons8.com/?size=100&id=5esIoe7Rz8YD&format=png&color=000000"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
        }

export default NavBar