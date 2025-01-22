import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo2 from "../Images/logo2.png";
import logo1 from "../Images/logo1.png";
import plant1 from "../Images/plant1.webp";

export const Navbar = () => {
  const location = useLocation();
  const isThankyouPage = location.pathname === "/Thankyou";
  if (isThankyouPage) return null;

  return (
    <div className="Navbar-page">
      <header>
        <div className="navbar">
          <div className="title">
            <img src={logo2} alt="Logo" className="navbar-logo" />{" "}
            {/* Use the imported variable name 'logo' */}
            <NavLink to="/">Green Gallery</NavLink>
          </div>
          <nav>
            ā
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/handover">Handover</NavLink>
              </li>
              <li id="login">
                <NavLink to="/register">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* This content will only show if you're on the homepage */}
      {location.pathname === "/" && (
        <section className="Navbar-slide">
          <div className="imgslider">
            <div className="banner1">
              <img
                src="https://gardengram.in/cdn/shop/articles/10-Best-Indoor-Plants-Gear-Patrol-lead-full_1-122600_1024x1024_1ee81e70-ba88-4b7b-ad10-5cbe4cfb14d4_1024x1024.webp?v=1710419653"
                height="500"
              />
            </div>
            <div className="banner2">
              <img
                src="https://www.datocms-assets.com/33130/1630040538-15houseplantsbanner-2x.jpg?auto=format"
                height="500"
              />
            </div>
            <div className="banner3">
              <img
                src="https://media.istockphoto.com/id/1150625779/photo/tree-growing-in-nature-with-sunshine-concept-eco-earth-day.jpg?s=612x612&w=0&k=20&c=oNuy3BqzUaV97uipxYqKs31BYlEfFIthKv0LTebC2S8="
                height="500"
              />
            </div>
            <div className="banner4">
              <img
                src="https://media.istockphoto.com/id/2166497422/photo/the-transplanted-plant-sansevieria-trifoliate-stands-on-the-table-in-the-room-there-are-tools.jpg?s=612x612&w=0&k=20&c=75PCctmqAD1-BskDB7rgHhfUq0Nl_XGJMm9bMDs61jU="
                height="500"
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="Trending-title">
            <h3>KNOW MORE!</h3>
            <br />
          </div>
          <div className="Trending" align="center">
            <div className="products">
              <NavLink to="Indoor">
                <div className="img">
                  <img src="https://www.shutterstock.com/image-photo/small-plant-pot-succulents-cactus-600nw-1021990132.jpg" />
                </div>
                <div className="content">
                  <h4>
                    <NavLink to="Indoor">Aloe</NavLink>
                  </h4>
                </div>
              </NavLink>
            </div>
            <div className="products">
              <NavLink to="Medicinal">
                <div className="img">
                  <img src="https://rukminim2.flixcart.com/image/850/1000/k2dm7bk0/plant-sapling/w/d/q/1-1-jr-globle-original-imafhqs6hwggphgz.jpeg?q=90&crop=false" />
                </div>
                <div className="content">
                  <h4>
                    <NavLink to="Medicinal">Tulsi</NavLink>
                  </h4>
                </div>
              </NavLink>
            </div>
            <div className="products">
              <NavLink to="flowers">
                <div className="img">
                  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-sapling/s/k/f/no-perennial-yes-rose-plant-07-1-plastic-bag-biswas-garden-original-imagmxkkcaw7cj3u.jpeg?q=90&crop=false" />
                </div>
                <div className="content">
                  <h4>
                    <NavLink to="flowers">Rose</NavLink>
                  </h4>
                </div>
              </NavLink>
            </div>
            <div className="products">
              <NavLink to="cactus">
                <div className="img">
                  <img src="https://cdn.webshopapp.com/shops/107930/files/365282182/melocactus-guaricensis.jpg" />
                </div>
                <div className="content">
                  <h4>
                    <NavLink to="cactus">Melocactus</NavLink>
                  </h4>
                </div>
              </NavLink>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="cat-title">
            <b>CATEGORIES</b>
            <br />
          </div>
          <div className="Categories">
            <div className="card">
              <div className="img">
                <NavLink to="Indoor">
                  <img src="https://rolandcreations.com/wp-content/uploads/2023/11/Diverse-Indoor-Plants-with-Care-Labels-768x432.webp" />
                </NavLink>
              </div>
              <div className="content">
                <NavLink to="Indoor">Indoor</NavLink>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <NavLink to="Medicinal">
                  <img src="https://www.goanobserver.in/wp-content/uploads/2020/08/MGHM.jpg" />
                </NavLink>
              </div>
              <div className="content">
                <NavLink to="Medicinal">Medicinal</NavLink>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <NavLink to="Flowers">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/495px-Flower_poster_2.jpg" />
                </NavLink>
              </div>
              <div className="content">
                <NavLink to="Flowers">Flowers</NavLink>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <NavLink to="Cactus">
                  <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/6/1/shutterstock_643833592_socool23_cactus-container-garden.jpg.rend.hgtvcom.1280.720.suffix/1523049927299.jpeg" />
                </NavLink>
              </div>
              <div className="content">
                <NavLink to="Cactus">Cactus</NavLink>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="b1">
            <div className="container">
              <div className="left-column">
                <div className="logo">
                  <img src={logo1} alt="Green Gallery Logo" />
                  <div className="logo-text">
                    <h1>Green Gallery</h1>
                    <p>Grow a Greener Tomorrow, One Contribution at a Time.</p>
                  </div>
                </div>
                <div className="content">
                  <h2>Certificate of Contribution</h2>
                  <p>
                    Our platform celebrates individuals who make a positive
                    impact on society and nature. By contributing a plant,
                    you're helping foster a greener future. We recognize your
                    thoughtful action with an official certificate, reflecting
                    your commitment to nurturing the environment.
                  </p>
                </div>
                <div className="website-link">
                  <NavLink to="Handover">Click to Handover Now!</NavLink>
                </div>
              </div>
              <div className="right-column">
                <img src={plant1} alt="Green Garden Path" />
              </div>
            </div>
          </div>

          <div className="video">
            <p>A Video About How to Take Care of Plants!</p>
            <iframe
              src="https://www.youtube.com/embed/LZhnCxG5c6s"
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
          </div>
          <br />

          <footer className="footer-Name">
            <div className="BackToTop">
              <center>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  BACK TO TOP
                </button>
              </center>
            </div>
            <div className="main-content">
              <div className="left box">
                <h2>About us</h2>
                <div className="content">
                  <p>Sejal Girish Borkar - 1MS23MC091</p>
                  <p>Prathibha M - 1MS23MC073</p>
                  <p>RAMAIAH INSTITUTE OF TECHNOLOGY</p>
                  <p>Green Gallery - A Plants Nursery Website.</p>
                  <br />
                </div>
              </div>
            </div>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Navbar;
