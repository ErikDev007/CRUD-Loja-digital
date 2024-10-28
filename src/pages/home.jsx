import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Caroulsel from "../components/carousel.jsx";


function Home() {
  return (
    <div className="Home">
       <div className="d-flex flex-column wrapper">
        <NavBar />

        <Caroulsel />
      </div>

      <main className="flex-fill">
      <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="Digite aqui o que procura"/>
                                <button className="btn btn-danger">Buscar</button>
                            </div>
                        </form>
                    </div>
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
                </div>
              
                <hr mt-3/>

                <div className="row g-1">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart icon-css" ></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://img.freepik.com/vetores-gratis/t-shirt-masculina-em-diferentes-pontos-de-vista-com-estilo-realista_23-2147820110.jpg?ga=GA1.1.1802699551.1728265965&semt=ais_hybrid" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://img.freepik.com/fotos-gratis/chapeu-de-caminhoneiro-criativo-ainda-vida_23-2149504625.jpg?ga=GA1.1.1802699551.1728265965&semt=ais_hybrid" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://img.freepik.com/vetores-gratis/modelo-minimalista-cv_23-2148899951.jpg?ga=GA1.1.1802699551.1728265965&semt=ais_hybrid" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 4,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Curriculo Basico</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-light disabled mt-2 d-block">
                                    <small>Reabastecendo Estoque</small>
                                </a>
                                <small className="text-danger">
                                    <b>Produto Esgotado</b>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart-fill"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart-fill"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="carrinho.html" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </a>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="card text-center bg-light">
                            <a href="#" className="position-absolute end-0 p-2 text-danger">
                                <i className="bi-suit-heart"></i>
                            </a>
                            <Link to="/produto">
                                <img src="https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_640.jpg" className="card-img-top"/>
                            </Link>
                            <div className="card-header">
                                R$ 9,99
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">produto</h5>
                                <p className="card-text truncar-3l">
                                    descrição do produto.
                                </p>
                            </div>
                            <div className="card-footer">
                                <Link to="/carrinho" className="btn btn-danger mt-2 d-block">
                                    Adicionar ao Carrinho
                                </Link>
                                <small className="text-success">00 unidades disponiveis</small>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mt-3"/>

                <div className="row pb-3">
                    <div className="col-12">
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
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                </div>
      </main>
            
      <Footer />

  </div>
  );
}



export default Home;
