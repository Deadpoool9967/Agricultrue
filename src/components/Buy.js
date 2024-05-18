import React from 'react'
import nit from './images/organic.jpg';
import nit1 from './images/calcium.webp';
import nit2 from './images/nitro33.webp';
import four from './images/4.jpg';
import five from './images/5.jpg'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const navigate = useNavigate()
  return (
    <div>
    <div class="container marketing">
    <div class="row mb-1">
    <div class="col-md-12">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
    <img src={nit} width="200" height="250"/>
    </div><div class="col p-4 d-flex flex-column position-static">
    <strong class="d-inline-block mb-2 text-success">BioHarvest VitalTech Solutions</strong>
    <h3 class="mb-0">Bioorganic fertilizer</h3>
    <p class="card-text mb-auto">BioHarvest VitalTech Solutions focuses on bioorganic fertilizers enriched with essential micronutrients. Our products stimulate soil biodiversity, fostering a nutrient-rich environment that contributes to sustainable and thriving agriculture.</p><h6>50 KG Bag</h6><h6>4.9/5 rating</h6><img src={five} width="100" height="22"/>
    <h5>Prize 200/KG</h5>
    <h6>All tax included</h6>
    <button type="button" value="Buy"className="btn btn-primary" onClick={() => window.location.href = 'https://buy.stripe.com/test_28ocNbgUDgcadkQbIJ'}>Buy Now</button>
    </div>
    </div>
    </div>
    </div>
    <div class="row mb-1"><div class="col-md-12">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
    <img src={nit1} width="200" height="250"/>
    </div>
    <div class="col p-4 d-flex flex-column position-static">
    <strong class="d-inline-block mb-2 text-success">NanoGrove Elemental Fusion</strong>
    <h3 class="mb-0">Nitrogen,Potassium and Phosphorus fertilizers</h3>
    <p class="card-text mb-auto">NanoGrove Elemental Fusion pioneers nano-technology-infused fertilizers, offering a precise blend of essential elements like nitrogen, phosphorus, and potassium. This innovative approach maximizes nutrient utilization, leading to improved plant health and increased productivity.</p>
    <h5>50 KG Bag</h5><h6>3.9/5 rating</h6>
    <img src={four} width="100" height="25"/>
    <h5>Prize 150/KG</h5>
    <h6>All tax included</h6>
    <button type="button" value="Buy"className="btn btn-primary" onClick={() => window.location.href = 'https://buy.stripe.com/test_28ocNbgUDgcadkQbIJ'}>Buy Now</button>
    </div>
    </div>
    </div>
    </div>
    <div class="row mb-1"><div class="col-md-12">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
    <img src={nit2} width="200" height="250"/>
    </div>
    <div class="col p-4 d-flex flex-column position-static">
    <strong class="d-inline-block mb-2 text-success">NitroGuard Technologies Inc</strong>
    <h3 class="mb-0">Nitrogen fertilizers with inhibitors</h3>
    <p class="card-text mb-auto">NitroGuard Technologies is a leader in nitrogen fertilizers with advanced inhibitors. Our products maximize nitrogen use efficiency, reducing environmental impact and optimizing plant uptake for improved crop yields.</p>
    <h5>50 KG Bag</h5>
    <h6>4.7/5 rating</h6>
    <img src={five} width="100" height="22"/>
    <h5>Prize 250/KG</h5>
    <h6>All tax included</h6>
    <button type="button" value="Buy"className="btn btn-primary" onClick={() => window.location.href = 'https://buy.stripe.com/test_28ocNbgUDgcadkQbIJ'}>Buy Now</button>
    </div>
    </div>
    </div>
    </div>
   </div>
   </div>
  )
}

export default Buy