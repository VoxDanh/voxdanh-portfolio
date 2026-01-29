import React, { useState } from 'react';
import { forwardRef } from 'react';
import './Contact.css';
const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        purpose: 'collaboration',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send via API or email service)
        console.log('Form submitted:', formData);
        alert('Thank you for contacting me! I will respond as soon as possible.');
        setFormData({
            name: '',
            email: '',
            purpose: 'collaboration',
            message: ''
        });
    };

    return (
        <>
            <div className="contact-container" ref={ref}>
                <h1 className="contact-title">Contact Me</h1>

                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p className="contact-desc">
                            I am always open to discussing new opportunities, collaborations, or tech topics.
                            Feel free to leave me a message!
                        </p>

                        <div className="info-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Can Tho, Vietnam</span>
                        </div>
                        <div className="info-item">
                            <i className="fa-solid fa-phone"></i>
                            <span>0964114741</span>
                        </div>
                        <div className="info-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>vcongdanh8686@gmail.com</span>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/VoxDanh" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>&nbsp;
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/voxdanh" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i> &nbsp;
                                LinkedIn
                            </a>
                            <a href="https://www.facebook.com/VoxDanh" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>&nbsp;
                                Facebook
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="purpose">Purpose of Contact</label>
                                <select
                                    id="purpose"
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleChange}
                                >
                                    <option value="collaboration">Collaboration</option>
                                    <option value="hiring">Job Opportunity / Hiring</option>
                                    <option value="project_interest">Interested in my projects</option>
                                    <option value="feedback">Feedback / Suggestions</option>
                                    <option value="networking">Networking / Making Friends</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Contact;
