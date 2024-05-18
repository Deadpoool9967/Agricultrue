import React from 'react'
import { Link } from 'react-router-dom';

const Nanve = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">AgriCraftHub</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/buy">Buy Fertilizers</Link>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              
Fertilizer Info
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link class="dropdown-item" to="/nitrogen">Nitrogen Fertilizer</Link></li>
              <li><Link class="dropdown-item" to="/nitrogenin">Nitrogen Fertilizer with Inhibitors</Link></li>
              <li><Link class="dropdown-item" to="/phorpus">Phosphorus Fertilizer</Link></li>
              <li><Link class="dropdown-item" to="/potassium">Potassium Fertilizer</Link></li>
              <li><Link class="dropdown-item" to="/calcium">Calcium, Magnesium and Sulpher Fertilizer </Link></li>
              <li><Link class="dropdown-item" to="/nitrogenin">Inhibitors</Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              
            Fruits Trees
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link class="dropdown-item" to="/apple">Apple</Link></li>
              <li><Link class="dropdown-item" to="/mango">Mango</Link></li>
              <li><Link class="dropdown-item" to="/banana">Banana</Link></li>
              <li><Link class="dropdown-item" to="/oranges">Orange</Link></li>
              <li><Link class="dropdown-item" to="/grapes">Grapes</Link></li>
              <li><Link class="dropdown-item" to="/watermelon">Watermelon</Link></li>
              <li><Link class="dropdown-item" to="/papaya">Papaya</Link></li>
              <li><Link class="dropdown-item" to="/kiwi">Kiwi</Link></li>
              <li><Link class="dropdown-item" to="/cherry">Cherry</Link></li>
              <li><Link class="dropdown-item" to="/dragonfruit">Dragon Fruit</Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              
            Vegetable
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link class="dropdown-item" to="/potato">Potato</Link></li>
              <li><Link class="dropdown-item" to="/peas">Pees</Link></li>
              <li><Link class="dropdown-item" to="/carrot">Carrot</Link></li>
              <li><Link class="dropdown-item" to="/bringle">Bringle</Link></li>
              <li><Link class="dropdown-item" to="/tomato">Tomato</Link></li>
              <li><Link class="dropdown-item" to="/onion">Onion</Link></li>
              <li><Link class="dropdown-item" to="/garlic">Garlic</Link></li>
              <li><Link class="dropdown-item" to="/beetroot">Beetroot</Link></li>
              <li><Link class="dropdown-item" to="/cabbage">Cabbage</Link></li>
              <li><Link class="dropdown-item" to="/radish">Radish</Link></li>
              <li><Link class="dropdown-item" to="/corn">Corn</Link></li>
              <li><Link class="dropdown-item" to="/pumpkin">Pumpkin</Link></li>
              <li><Link class="dropdown-item" to="/lemon">Lemon</Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           More
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link class="dropdown-item" to="/about">About us</Link></li>
              <li><Link class="dropdown-item"to="/contact">Contact us</Link></li>
             
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Nanve