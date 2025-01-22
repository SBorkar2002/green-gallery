import React from 'react';
import { NavLink } from 'react-router-dom';
import './Shop.css';

export const Shop = () => {
    return (
       
                <div className='Shop-page'>
              <section className="shop-section">
                <div className="shop-menu-bar">
                    <h1>Categories</h1>
                    <ul>
                        <li><NavLink to="/Indoor"><button>Indoor</button></NavLink></li>
                        <li><NavLink to="/Medicinal"><button>Medicinal</button></NavLink></li>
                        <li><NavLink to="/Flowers"><button>Flowers</button></NavLink></li>
                        <li><NavLink to="/Cactus"><button>Cactus</button></NavLink></li>
                    </ul>
                </div>
                <div id="shop-content">
                    <div className="shop-products">
                        <NavLink to="/Indoor">
                            <div className="shop-img">
                                <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/10/60f9b569fc253600181fe27f.webp" alt="Aloe" />
                            </div>
                            <div className="shop-content">
                                <h4>Aloe</h4>
                            </div>
                        </NavLink>
                    </div>
                    <div className="shop-products">
                        <NavLink to="/Medicinal">
                            <div className="shop-img">
                                <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/61mtXfRXL3L._SL1024_480x480.jpg?v=1601034788" alt="Tulsi" />
                            </div>
                            <div className="shop-content">
                                <h4>Tulsi</h4>
                            </div>
                        </NavLink>
                    </div>
                    <div className="shop-products">
                        <NavLink to="/Flowers">
                            <div className="shop-img">
                                <img src="https://www.flaberry.com/uploads/2023/07/red-rose.webp" alt="Rose" />
                            </div>
                            <div className="shop-content">
                                <h4>Rose</h4>
                            </div>
                        </NavLink>
                    </div>
                    <div className="shop-products">
                        <NavLink to="/Cactus">
                            <div className="shop-img">
                                <img src="https://8billiontrees.com/wp-content/uploads/2023/02/Star-Cactus-Astrophytum-asterias-Pixabay-Screenshot.webp" alt="Melocactus" />
                            </div>
                            <div className="shop-content">
                                <h4>Melocactus</h4>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
            </div>
       
    );
};
