import React from 'react';
import { NavLink } from 'react-router-dom';
import './Aloe.css';
import aloe from '../Images/aloe-vera.jpg';

const Aloe = () => {
    return (
        <div className='Aplant-care-page'>
            <h2>Aloevera Plant Care Tips</h2>
            <div className='Aplant-care-container'>
                <img src={aloe} alt="aloe Plant" className='Aplant-image'/>
                <div className='Aplant-info'>
                    <ul>
                        <li><strong>Watering:</strong> Water sparingly. Allow the soil to dry out completely between waterings. Overwatering can lead to root rot.</li>
                        <li><strong>Light:</strong> Prefers indirect, bright light but can tolerate low light conditions. Avoid direct sunlight, which can scorch the leaves.</li>
                        <li><strong>Nutrition:</strong> Feed with a balanced, diluted fertilizer once a month during spring and summer.</li>
                        <li><strong>Pruning:</strong> Trim damaged or dead leaves at the base. Pruning is generally not necessary unless you want to control size.</li>
                        <li><strong>Monitoring:</strong> Monitor for pests like spider mites. Check the leaves regularly for signs of damage or disease.</li>
                    </ul>
                </div>
            </div>
            <NavLink to="/indoor" className='Aback-link'>Back to Plant List</NavLink>
        </div>
    );
};

export default Aloe;
