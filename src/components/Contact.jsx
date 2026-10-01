import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...FormData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        navigate('/');
    };

    return(
        <main>
        <h1>Contact Me</h1>

        <p>Email: rsunil2@my.centennialcollege.com</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>

            <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required 
            />

            <input
             type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.firstName}
            onChange={handleChange}
            required 
            />

            <input
             type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            required 
            />

            <input
             type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required 
            />

            <textarea
            name="Message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required 
            />

            <button type="submit">
                Send Message
            </button>

        </form>
    </main> 
    )
}

export default Contact;
