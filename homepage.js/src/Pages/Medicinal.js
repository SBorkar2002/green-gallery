
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Medicinal.css'; 

export const Medicinal = () => {
  return (
       <div className="Medicinal-page">
    <section className="Medicinal-section">
        <div class="Medicinal-menu-bar">
            <h1>Categories</h1>
            <ul>
                <NavLink to ="/Indoor"><button><li>Indoor</li></button></NavLink>
                <NavLink to ="/Medicinal"><button><li>Medicinal</li></button></NavLink>
                <NavLink to ="/Flowers"><button><li>Flowers</li></button></NavLink>
                <NavLink to ="/Cactus"><button><li>Cactus</li></button></NavLink>
            </ul>
        </div>
        <div id="Medicinal-shop-content">
            <div class="Medicinal-products">
                <NavLink to ="/Tulsi">
                    <div class="Medicinal-img">
                        <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/51iIZ1n-lJL_large.jpg?v=1598874255"/>
                    </div>
                    <div class="Medicinal-content">
                        <h4><NavLink to ="/Tulsi">Tulsi</NavLink></h4>
                        <p>For over the centuries Tulsi (the queen of herbs) has been known for its remarkable healing properties.Tulsi is taken as herbal tea.The oil extracted from the Karpoora Tulsi is mostly used in the herbal toiletry. Its oil is also used against insects and bacteria.</p>
                    </div>
                </NavLink>
            </div>
            <div class="Medicinal-products">
                <NavLink to ="/Thyme">
                    <div class="Medicinal-img">
                        <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-thime_large.jpg?v=1598874920"/>
                    </div>
                    <div class="Medicinal-content">
                        <h4><NavLink to="/Thyme">Thyme</NavLink></h4>
                        <p>It is mostly known for its strong antiseptic nature. It is wonderful when it comes to the treatment of:Congestion Stomach gas
							Coughs</p>
                    </div>
                </NavLink>
            </div>
            <div class="Medicinal-products">
                <NavLink to ="/Peppermint">
                    <div class="Medicinal-img">
                        <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/pl1000000202_480x480.jpg?v=1600862970"/>
                    </div>
                    <div class="Medicinal-content">
                        <h4><NavLink to ="/peppermint">Peppermint</NavLink></h4>
                        <p>Peppermint is sometimes regarded as ‘the world’s oldest medicine’, with archaeological evidence placing its use at least as far back as ten thousand years ago. Pepeprmint are naturally high in manganese, vitamin A and vitamin C. </p>
                    </div>
                </NavLink>
            </div>
            <div class="Medicinal-products">
                <NavLink to ="/Bryophyllum">
                    <div class="Medicinal-img">
                        <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/61mtXfRXL3L._SL1024_480x480.jpg?v=1601034788"/>
                    </div>
                    <div class="Medicinal-content">
                        <h4><NavLink to ="/Bryophyllum"> Bryophyllum, Panfuti</NavLink></h4>
                        <p>Bryophyllum calycinum, Bryophyllum pinnatum, also known as the Air Plant, Life Plant, Miracle Leaf, Goethe Plant and the Katakataka (Filipino)) is a succulent plant native to Madagascar.</p>
                    </div>
                </NavLink>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Medicinal;
