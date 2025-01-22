import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cactus.css'; 

export const Cactus = () => {
    return (
        <div className="Cactus-page">
            <section className="Cactus-section">
            <div class="Cactus-menu-bar">
            <h1>Categories</h1>
            <ul>
                <NavLink to ="/Indoor"><button><li>Indoor</li></button></NavLink>
                <NavLink to ="/Medicinal"><button><li>Medicinal</li></button></NavLink>
                <NavLink to ="/Flowers"><button><li>Flowers</li></button></NavLink>
                <NavLink to ="/Cactus"><button><li>Cactus</li></button></NavLink>
            </ul>
        </div>
        <div id="Cactus-content">
            <div class="Cactus-products">
                <NavLink to ="/BalloonCac">
                    <div class="Cactus-img">
                        <img src="https://8billiontrees.com/wp-content/uploads/2023/02/Balloon-Cactus-Parodia-magnifica-Pixabay-Screenshot.webp"/>
                    </div>
                    <div class="Cactus-content">
                        <h4><NavLink to ="/BalloonCac"> Balloon Cactus</NavLink></h4>
                        <p>As you can deduce from its scientific name, the Balloon Cactus is magnificent, thanks to its massive rounded shape and rib-like rows trailing down its length.</p>
                    </div>
                </NavLink>
            </div>
            <div class="Cactus-products">
                <NavLink to="/CrownCac">
                    <div class="Cactus-img">
                        <img src="https://8billiontrees.com/wp-content/uploads/2023/02/Crown-Cactus-Rebutia-fiebrigii-Pixabay-Screenshot.webp"/>
                    </div>
                    <div class="Cactus-content">
                        <h4><NavLink to="/CrownCac"> Crown Cactus</NavLink></h4>
                        <p>Another flowering cactus you will bump into is the beautiful Crown Cactus, a rounded succulent measuring 3 inches wide. It is covered in numerous bendable light-colored spines that give it its unique appearance.</p>
                    </div>
                </NavLink>
            </div>
            <div class="Cactus-products">
                <NavLink to="/OldCac">
                    <div class="Cactus-img">
                        <img src="https://8billiontrees.com/wp-content/uploads/2023/02/Old-Lady-Cactus-Mammillaria-Hahniana-Wikimedia.webp"/>
                    </div>
                    <div class="Cactus-content">
                        <h4><NavLink to="/OldCac"> Old Lady Cactus</NavLink></h4>
                        <p>The Old Lady is another option for those who love fuzzy cacti. It is rounded, covered in delicate spikes, and can reach 10 inches tall under proper care.</p>
                    </div>
                </NavLink>
            </div>
            <div class="Cactus-products">
                <NavLink to="/StatCac">
                    <div class="Cactus-img">
                        <img src="https://8billiontrees.com/wp-content/uploads/2023/02/Star-Cactus-Astrophytum-asterias-Pixabay-Screenshot.webp"/>
                    </div>
                    <div class="Cactus-content">
                        <h4><NavLink to="/StatCac">Star Cactus </NavLink></h4>
                        <p>The Star Cactus is a famous indoor plant explaining why experts have created it in many varieties coming in beautiful, unique shapes and patterns.</p>
                    </div>
                </NavLink>
            </div>
        </div>
            </section>
        </div>
        );
    }
    
    export default Cactus;