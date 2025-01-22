import React from 'react';
import { NavLink } from 'react-router-dom';
import './Marigold.css';
import snakeplant from '../Images/mariglod.jfif';

const Marigold = () => {
    return (
        <div className='Mplant-care-page'>
            <h2>Mariglod Plant Care Tips</h2>
            <div className='Mplant-care-container'>
                <img src={snakeplant} alt="Snake Plant" className='Mplant-image'/>
                <div className='Mplant-info'>
                    <ul>
                        <li><strong>Watering:</strong> Frequency: Water sparingly, usually every 2-4 weeks. Adjust the watering schedule based on the plant's environment, watering less in cooler months and more frequently during the growing season (spring and summer).</li>
                        <li><strong>Light:</strong> Prefers indirect, bright light but can tolerate low light conditions. Avoid direct sunlight, which can scorch the leaves.</li>
                        <li><strong>Nutrition:</strong> Fertilizer Type: Use a balanced liquid fertilizer, diluted to half-strength. A 10-10-10 or 20-20-20 formula works well.
                        Frequency: Feed the plant once a month during the active growing season (spring and summer). Avoid fertilizing in fall and winter when the plant’s growth slows down. </li>
                        <li><strong>Pruning:</strong> Technique: Use clean, sharp scissors or pruning shears to cut leaves at the base of the plant. Avoid tearing or pulling leaves, as this can harm the plant.
                        When to Prune: Prune in the spring or summer when the plant is actively growing. Avoid heavy pruning in the winter.</li>
                        <li><strong>Monitoring:</strong> Monitor for pests like spider mites. Check the leaves regularly for signs of damage or disease.</li>
                    </ul>
                </div>
            </div>
            <NavLink to="/Flowers" className='Mback-link'>Back to Plant List</NavLink>
        </div>
    );
};

export default Marigold;
