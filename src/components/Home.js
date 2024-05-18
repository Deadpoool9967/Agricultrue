import React from 'react'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import fe1 from './images/fe1.webp'
import fe2 from './images/fe2.jpeg'
import fe3 from './images/fe3.webp'
import fe4 from './images/fe4.jpeg'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  return (
    <>
    <div><div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={img1} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
         <b> <h1>How to use Calcium Fertilizers?</h1></b>
          <p>Click below to know more</p>
          <button onClick={()=>navigate('calcium')} type="button" class="btn btn-primary">Learn More</button>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={img2} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <b><h1>How to plant Tomato</h1></b>
          <p>Click below to know more</p>
          <button onClick={()=>navigate('tomato')} type="button" class="btn btn-primary">Learn More</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src={img3} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
         <b><h1>Which Micronutrient are important for plants?</h1></b> 
          <p>Click below to know more</p>
          <button onClick={()=>navigate('nitrogenin')} type="button" class="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  <br/>



<div className='container'>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-success">Fertilizer</strong>
          <h3 class="mb-0">Nitrogen fertilizers</h3>
      
          <p class="card-text mb-auto">The main products are nitrate-based fertilizers such as ammonium nitrate (AN) and calcium ammonium nitrate (CAN), which are well suited to most European soils and climatic conditions, which are widely used in other parts of the world.</p>
          <button onClick={()=>navigate('nitrogen')} type="button" class="btn btn-success">Learn More</button>
        </div>
        <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src={fe1}  alt="..."/>

        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Fertilizer</strong>
          <h3 class="mb-0">Nitrogen fertilizers with inhibitors</h3>
        
          <p class="mb-auto">Certain weather and soil conditions can lead to nitrogen immobilisation, denitrification, volatilization or leaching, all reducing fertilizer efficiency.</p>
          <button onClick={()=>navigate('nitrogenin')} type="button" class="btn btn-success">Learn More</button>
        </div>
        <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src={fe2}  alt="..."/>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div className='container'>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-success">Fertilizer</strong>
          <h3 class="mb-0">Potassium fertilizers</h3>
          
          <p class="card-text mb-auto">Potassium is also available in a range of fertilizers which contain potassium only or two or more nutrients and include Potassium chloride (KCl), Potassium sulphate (K2SO4) or sulphate of potash (SOP), Potassium nitrate (KNO3), known as KN.</p>
          <button onClick={()=>navigate('potassium')} type="button" class="btn btn-success">Learn More</button>
        </div>
        <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src={fe3}  alt="..."/>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-success">Fertilizer</strong>
          <h3 class="mb-0">Phosphorus fertilizers</h3>
       
          <p class="mb-auto">The most common phosphate fertilizers are single superphosphate (SSP), triple superphosphate (TSP), monoammonium phosphate (MAP), di-ammonium phosphate (DSP) and ammonium polyphosphate liquid.</p>
          <button onClick={()=>navigate('phorpus')} type="button" class="btn btn-success">Learn More</button>
        </div>
        <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src={fe4}  alt="..."/>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Home