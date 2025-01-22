import React from 'react';
import { NavLink } from 'react-router-dom';
import './Thankyou.css';
import certiImage from '../Images/CERTI.png'; 
import plant1 from '../Images/plant1.webp';

const Thankyou = () => {
    return (
        <div className='thankyou-page'>
            <div className="Tbg1">
                <img src={plant1}  width="1600px" alt="Background Plant" />
            </div>

            <div className="Tcontainer">
                <div className="Theader">
                    <h1>Thank You for Your Contribution!</h1>
                </div>

                <div className="Tcontent">
                    <div className="Tleft-content">
                        <p>"Your generous plant donation will support botanical gardens, aid local gardeners, and contribute to educational initiatives. Thank you for making a positive impact!"</p>
                        <br /><br /><br />
                        <p className="Tpreview-text">Here’s a preview of the certificate you’ll receive once we verify your generous donation!</p>
                    </div>

                    <div className="Tright-content">
                        <div>
                            <img src={certiImage} height="450px" alt="Certificate Preview" />
                        </div>
                    </div>
                </div>

                <button className="Tback-button">
                    <NavLink to="/">Back to Home</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Thankyou;
