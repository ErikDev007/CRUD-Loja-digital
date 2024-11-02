import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
    return(
        <div className="col-12 col-md-7">
                        <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                            <form className="d-inline-block">
                                <select className="form-select form-select-sm">
                                    <option>Ordenar pelo nome</option>
                                    <option>Ordenar pelo menor preço</option>
                                    <option>Ordenar pelo maior preço</option>
                                </select>
                            </form>
                            <nav className="d-inline-block me-3">
                                <ul className="pagination pagination-sm my-0">
                                    <li className="page-item">
                                        <Link to="/" className="page-link" href="#">1</Link>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
    );
}

export default Pagination;