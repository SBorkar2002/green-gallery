import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Handover.css'; 

const Handover = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        type: 'Indoor',
        size: '1',
        state: '',
        district: '',
        add: '',
    });

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        mobile: '',
    });

    const [districtOptions, setDistrictOptions] = useState([]);

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!/^[a-zA-Z]+$/i.test(formData.firstname)) {
            errors.firstname = "Only characters are allowed";
            valid = false;
        }
        if (!/^[a-zA-Z]+$/i.test(formData.lastname)) {
            errors.lastname = "Only characters are allowed";
            valid = false;
        }
        if (isNaN(formData.mobile) || formData.mobile.length !== 10) {
            errors.mobile = "Please enter a valid phone number";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'state') {
            updateDistrictOptions(value);
        }
    };

    const updateDistrictOptions = (state) => {
        let options = [];

        switch (state) {
            case 'Maharashtra':
                options = ["Mumbai", "Thane", "Pune", "Nagpur", "Nashik", "Solapur"];
                break;
            case 'Karnataka':
                options = ["Uttar Kannada", "Udupi", "Dharwad", "Dakshina Kannada", "Raichur", "Bidar"];
                break;
            case 'Delhi':
                options = ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"];
                break;
            case 'Telangana':
                options = ["Hyderabad", "Warangal", "Karimnagar", "Siddipet", "Nizambad"];
                break;
            case 'Gujarat':
                options = ["Ahmedabad", "Gandhinagar", "Surat", "Rajkot", "Valsad"];
                break;
            case 'Punjab':
                options = ["Amritsar", "Bathinda", "Jalandhar", "Patiala"];
                break;
            default:
                options = ["First Select the State"];
        }

        setDistrictOptions(options);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Proceed with form submission (you can add form submission logic here)
            console.log("Form data:", formData);
            window.location.href = "thankyou"; // Redirect to thankyou.html
        }
    };

    return (
        <div className="Handover">
            <div className="text">Handover Form</div>
            <form onSubmit={handleSubmit}>
                <center><h2>Personal Details</h2></center>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" placeholder="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required />
                        {errors.firstname && <div id="error_message1">{errors.firstname}</div>}
                    </div>
                    <div className="input-data">
                        <input type="text" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} required />
                        {errors.lastname && <div id="error_message2">{errors.lastname}</div>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-data">
                        <input type="text" placeholder="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} required />
                        {errors.mobile && <div id="error_message3">{errors.mobile}</div>}
                    </div>
                </div>
                <center><h2>Plant's Details</h2></center>
                <div className="form-row">
                    <div className="input-data">
                        <label>Plants Type:</label>
                        <select name="type" value={formData.type} onChange={handleChange} required>
                            <option value="Indoor">Indoor</option>
                            <option value="Medicinal">Medicinal</option>
                            <option value="Bonsai">Bonsai</option>
                            <option value="Flowers">Flowers</option>
                        </select>
                    </div>
                    <div className="input-data">
                        <label>Plants Size:</label>
                        <select name="size" value={formData.size} onChange={handleChange} required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <center><h2>Address</h2></center>
                <div className="form-row">
                    <div className="input-data">
                        <label>State:</label>
                        <select name="state" value={formData.state} onChange={handleChange} required>
                            <option value="" disabled>Select A State</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Punjab">Punjab</option>
                        </select>
                    </div>
                    <div className="input-data">
                        <label>District:</label>
                        <select name="district" value={formData.district} onChange={handleChange} required>
                            <option disabled>First Select the State</option>
                            {districtOptions.map((district, index) => (
                                <option key={index} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" name="add" placeholder="Address - City, Street, House No, Pincode." value={formData.add} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row submit-btn">
                    <div className="input-data">
                        <input type="submit" value="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Handover;
