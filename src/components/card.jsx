import React from "react";
import { Link } from "react-router-dom";

function Card({img, link, id, price, title, description, quantity}) {
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <Link to={id} className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart icon-css" ></i>
                            </Link>
                            <Link to={link}>
                                <img  src={img} className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                <h6>{title}</h6>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">{price}</h6>
                                <p className="card-text truncar-3l">
                                    {description}.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">{quantity} unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
    );
}

export default Card;
