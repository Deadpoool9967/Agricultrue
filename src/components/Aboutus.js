import React from 'react'
import about from './images/about.jpeg'
import dead from './images/dead.webp'
import farmer from './images/Farmer.webp'

const Aboutus = () => {
  return (
    <div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner"><div class="carousel-item active">
        <img src={about} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block"><h1>About Us</h1><p>By AgriCraftHub</p>
            </div></div></div></div>


            <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src={farmer} alt="" width="72" height="80"/>
                    <h1 class="display-5 fw-bold">Meet the Visionaries Behind AgriHub</h1><div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">At AgriHub, our journey began with a shared passion for transforming agriculture through technology and innovation. The founders, a dynamic duo of agricultural enthusiasts, envisioned a platform that would revolutionize the way farmers connect, learn, and thrive in a rapidly changing agricultural landscape.</p></div></div>


                        <div class="px-4 py-5 my-5 text-center">
                            <img class="d-block mx-auto mb-4" src={dead} alt="" width="72" height="80"/>
                            <h1 class="display-5 fw-bold">Sarah Greenfield - The Tech Maven</h1><div class="col-lg-6 mx-auto">
                                <p class="lead mb-4">As the co-founder and Chief Technology Officer (CTO) of AgriHub, Sarah Greenfield brings a wealth of experience in harnessing technology for the betterment of agriculture. With a background in computer science and a deep-rooted love for farming (thanks to her family's farming background), Sarah is the driving force behind AgriHub's robust digital infrastructure. Her visionary approach to incorporating cutting-edge technologies such as AI, IoT, and data analytics ensures that AgriHub remains at the forefront of agricultural innovation.</p></div></div>


    </div>
  )
}

export default Aboutus