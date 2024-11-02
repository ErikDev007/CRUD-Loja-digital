import React from "react";
import { Link } from "react-router-dom";

function Search() {
    return(
        <div className="col-12 col-md-5">
                        <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="Digite aqui o que procura"/>
                                <button className="btn btn-danger">Buscar</button>
                            </div>
                        </form>
                    </div>
    );
}

export default Search;
