import React from 'react';
import { NavLink } from 'react-router-dom';
import './Flowers.css'; 

export const Flowers = () => {
    return (
        <div className="Flowers-page">
            <section className="Flowers-section">
        <div class="Flowers-menu-bar">
            <h1>Categories</h1>
            <ul>
                <NavLink to ="/Indoor"><button><li>Indoor</li></button></NavLink>
                <NavLink to="/Medicinal"><button><li>Medicinal</li></button></NavLink>
                <NavLink to="/Flowers"><button><li>Flowers</li></button></NavLink>
                <NavLink to="/Cactus"><button><li>Cactus</li></button></NavLink>
            </ul>
        </div>
        <div id="Flowers-shop-content">
            <div class="Flowers-products">
                <NavLink to ="/Jasmin">
                    <div class="Flowers-img">
                        <img src="https://www.flaberry.com/uploads/2023/07/jasmine.jpg"/>
                    </div>
                    <div class="Flowers-content">
                        <h4><NavLink to ="/Jasmin">Jasmine</NavLink></h4>
                        <p>The fragrant white flowers of Jasmine are used in making perfumes, essential oils, and incense sticks. Jasmine flowers are also used in Ayurvedic medicine to treat various ailments such as headaches, insomnia, anxiety, and depression.</p>
                    </div>
                </NavLink>
            </div>
            <div class="Flowers-products">
                <NavLink to ="/Marigold">
                    <div class="Flowers-img">
                        <img src="https://www.flaberry.com/uploads/2023/07/marigold-flowers-orange-pixabay_12708.webp"/>
                    </div>
                    <div class="Flowers-content">
                        <h4><NavLink to ="/Marigold"> Marigold</NavLink></h4>
                        <p>Marigold is used to make garlands, decorations, and natural dyes. It is also shown to have anti-inflammatory and antibacterial effects and is used to heal wounds. </p>
                    </div>
                </NavLink>
            </div>
            <div class="Flowers-products">
                <NavLink to ="/Rose">
                    <div class="Flowers-img">
                        <img src="https://www.flaberry.com/uploads/2023/07/red-rose.webp"/>
                    </div>
                    <div class="Flowers-content">
                        <h4><NavLink to ="/Rose">Rose</NavLink></h4>
                        <p>Rose is used for making perfumes, rose water, and various cosmetic products. Rose petals are also used to treat digestive problems, menstrual disorders, and skin problems.</p>
                    </div>
                </NavLink>
            </div>
            <div class="Flowers-products">
                <NavLink to ="/Sunflower">
                    <div class="Flowers-img">
                        <img src="https://www.flaberry.com/uploads/2023/07/sunflower-1627193_1920.jpg"/>
                    </div>
                    <div class="Flowers-content">
                        <h4><NavLink to ="/Sunflower  ">Sunflower</NavLink></h4>
                        <p>The large yellow flowers of sunflowers are used for decoration and also for extracting edible oil. Sunflower oil is rich in healthy fats and is used in cooking and various cosmetic products.</p>
                    </div>
                </NavLink>
            </div>
        </div>
    </section>

        </div>
);
}

export default Flowers;