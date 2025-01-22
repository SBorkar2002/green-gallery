import React from 'react';
import { NavLink } from 'react-router-dom';
import './Indoor.css'; 

export const Indoor = () => {
    return (
        <div className="indoor-page">
              <section className="indoor-section">
             
        <div class="indoor-menu-bar">
            <h1>Categories</h1>
            <ul>
                <NavLink to ="/Indoor"><button><li>Indoor</li></button></NavLink>
                <NavLink to ="/Medicinal"><button><li>Medicinal</li></button></NavLink>
                <NavLink to="/Flowers"><button><li>Flowers</li></button></NavLink>
                <NavLink to="/Cactus"><button><li>Cactus</li></button></NavLink>
            </ul>
        </div>
        <div id="indoor-shop-content">
            <div class="indoor-products">
                <NavLink to="/Snakeplant">
                    <div class="indoor-img">
                        <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/10/sansevieria-pot-white-background-home-min.jpg"/>
                    </div>
                    <div class="indoor-content">
                        <h4><NavLink to ="/Snakeplant"> Snake Plant </NavLink></h4>
                        <p>The snake plant—with its upright, sword-like leaves—is nearly indestructible a- Water Only when the top inch of soil is dry.
                           </p>
                    </div>
                </NavLink>
            </div>
           
            <div class="indoor-products">
                <NavLink to ="/Aloe">
                    <div class="indoor-img">
                        <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/10/60f9b569fc253600181fe27f.webp"/>
                    </div>
                    <div class="indoor-content">
                        <h4><NavLink to ="/Aloe">aloe vera plant</NavLink></h4>
                        <p>The Aloe Vera is the perfect plant for the neglectful gardener. This succulent thrives on neglect. You really only need to water it when the top few inches of soil are dry.</p>
                    </div>
                </NavLink>
            </div>

            <div class="indoor-products">
                <NavLink to ="/Spider">
                    <div class="indoor-img">
                        <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/10/chlorophytum-comosum-spider-plant-white-hanging-pot-basket-air-purifying-plants-home-indoor-houseplant-min.jpg"/>
                    </div>
                    <div class="indoor-content">
                        <h4><NavLink to ="/Spider">Spider Plant</NavLink></h4>
                        <p>The spider plant is one of the easiest houseplants to care for.Place your spider plant in a spot with indirect sunlight, like a few feet from an east-facing window. Too much direct sun can burn the tips of the leaves.</p>
                    </div>
                </NavLink>
            </div>
            <div class="indoor-products">
                <NavLink to ="/Pothos">
                    <div class="indoor-img">
                        <img src="https://media.istockphoto.com/id/1320269359/photo/tropical-epipremnum-aureum-marble-queen-pothos-houseplant-in-flower-pot.jpg?s=612x612&w=0&k=20&c=Rc4J3wkUQgd9vN_O7c7wRnbqCy1UUafqRSYLE2KGv_c="/>
                    </div>
                    <div class="indoor-content">
                        <h4><NavLink to ="/Pothos">Pothos (Epipremnum aureum)</NavLink></h4>
                        <p>This classic houseplant is almost indestructible. Pothos only needs moderate light and water to thrive. Place it in a spot with indirect sunlight from an east- or west-facing window.  </p>
                    </div>
                </NavLink>
            </div>
        </div>
    </section>
            
        </div>
    );
}

export default Indoor;
