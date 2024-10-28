import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
    return(
        <div className="container pt-1">
            <div id="carouselMain" className="carousel slide carousel-dark py-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner" style={{marginRight: 30 + 'em'}}>
                    <div className="carousel-item active" data-bs-interval="3000" style={{height: 364}}>
                        <img src="https://media.istockphoto.com/id/1385970223/pt/foto/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=1024x1024&w=is&k=20&c=VfMcUJ5CIsh0_v_B3WlinZd6svDoU64zLmq8Yz0ccDU=" className="d-block w-100 shadow" alt="" style={{height: 532}}/>
                        <img src="https://media.istockphoto.com/id/1385970223/pt/foto/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=1024x1024&w=is&k=20&c=VfMcUJ5CIsh0_v_B3WlinZd6svDoU64zLmq8Yz0ccDU=" className="d-block d-md-none  w-100" alt=""/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000" style={{height: 364}}>
                        <img src="https://cdn.pixabay.com/photo/2016/11/18/21/37/laptop-1836990_1280.jpg" className="d-block w-100 shadow" alt="" style={{height: 532}}/>
                        <img src="https://cdn.pixabay.com/photo/2016/11/18/21/37/laptop-1836990_1280.jpg" className="d-block d-md-none  w-100" alt=""/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000" style={{height: 364}}>
                        <img src="https://cdn.pixabay.com/photo/2022/06/18/18/58/headphones-7270502_960_720.jpg" className="d-none d-md-block w-100" alt="" style={{height: 532}}/>
                        <img src="https://cdn.pixabay.com/photo/2022/06/18/18/58/headphones-7270502_960_720.jpg" className="d-block d-md-none  w-100" alt=""/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
            <hr className="mt-3"/>
        </div>
    );
}

export default Carousel;