import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import { BsHouseDoor, BsTelephone } from "react-icons/bs";

const ContactMePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({});

    // Form validation
    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.message) errors.message = "Message is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form data (e.g., API call)
            console.log("Form Submitted", formData);
        }
    };

    const BannerData = {
        heading: "Contact Me",
        backgroundUrl: "/contact-banner.jpg",
        breadcrumbs: [
            {
                link: "/",
                linkText: "Home",
                icon: BsHouseDoor,
            },
            {
                link: "/contact-me",
                linkText: "Contact Me",
                icon: BsTelephone,

            },
        ],
    }

    return (
        <div className="appbody">
            {/* Banner Section */}
            < PageBanner BannerData={BannerData} />
            <div className="container mx-auto px-4 py-8">

                {/* Contact Form Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/Contactme.jpg" // Replace with your actual image
                            alt="Contact Image"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>

                    {/* Right Form */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={`input input-bordered w-full ${formErrors.name ? "border-red-500" : ""}`}
                                />
                                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone Number"
                                    className={`input input-bordered w-full ${formErrors.phone ? "border-red-500" : ""}`}
                                />
                                {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className={`input input-bordered w-full ${formErrors.email ? "border-red-500" : ""}`}
                                />
                                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className={`textarea textarea-bordered w-full ${formErrors.message ? "border-red-500" : ""}`}
                                    rows="4"
                                ></textarea>
                                {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-blue w-full mt-4 hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="my-12">
                    <h2 className="text-center text-2xl font-semibold mb-4">Find Me</h2>
                    <div className="text-center text-gray-600">
                        <p>Our Address: 1234 Main Street, City, State, Zip</p>
                    </div>
                    <div className="relative w-full h-72 mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29563.10647888023!2d87.5988833!3d22.14928625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02cbaf199e8019%3A0xa09be04d4cb645a1!2sBhua%2C%20West%20Bengal%20721144!5e0!3m2!1sen!2sin!4v1737015376843!5m2!1sen!2sin"
                            className="w-full h-full rounded-lg shadow-lg"
                            title="Google Map"
                            loading="lazy"

                            referrerPolicy="no-referrer"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMePage;
