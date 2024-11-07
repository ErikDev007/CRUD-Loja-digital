import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Caroulsel from "../components/carousel.jsx";
import Card from "../components/card.jsx";
import Search from "../components/search.jsx";
import Pagination from "../components/Pagination.jsx";
import InfoCards from "./json/db.json"


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

                <Search />
                    
                <Pagination />
                    
                    
                </div>
              
                <hr mt-3/>

                <div className="row g-1">

                    {InfoCards.map((InfoCard) => <Card  img={InfoCard.img} title={InfoCard.title} id={InfoCard.id} price={InfoCard.price} description={InfoCard.description} quantity={InfoCard.quantity} key={InfoCard} />)}

                </div>

                <hr className="mt-3"/>

                <div className="row pb-3">

                    <div className="col-12">

                        <Pagination />

                    </div>
                </div>
                </div>
      </main>
            
      <Footer />

  </div>
  );
}



export default Home;
