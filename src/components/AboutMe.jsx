// AboutMe.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsX } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import emailjs from '@emailjs/browser';
import { CONFIG } from '../utils/config';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

const AboutMe = ({ setActiveTab }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const appendToGoogleSheet = async (formData) => {
    try {
      const date = new Date().toLocaleString();
      const values = [[formData.name, formData.email, formData.phone, date]];

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.GOOGLE_SHEETS_ID}/values/Sheet1!A:D:append?valueInputOption=USER_ENTERED`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${CONFIG.GOOGLE_SHEETS_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: values
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to append to Google Sheets');
      }
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      throw error;
    }
  };

  const sendConfirmationEmail = async (formData) => {
    try {
      const templateParams = {
        to_name: formData.name,
        to_email: formData.email,
        message: 'Thank you for downloading my resume. I will get back to you soon!'
      };

      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   templateParams,
      //   'YOUR_PUBLIC_KEY'
      // );
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Save to Google Sheets
      await appendToGoogleSheet(values);

      // Send confirmation email
      await sendConfirmationEmail(values);

      // Trigger resume download
      const link = document.createElement("a");
      link.href = "/raj-kumar-singha-sde.pdf";
      link.download = "Raj_Kumar_Singha_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form and close modal
      resetForm();
      setIsModalOpen(false);

    } catch (error) {
      console.error('Error processing form:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
        About Me
      </h2>
      <div className="p-6 text-gray-800 flex flex-col items-center shadow-md justify-center min-h-[60vh]">
        <p className="text-lg leading-relaxed text-justify text-gray-700 max-w-3xl">
          I am a software engineer with over <strong>2+ years</strong> of
          experience in web application development. My expertise includes
          building scalable frontend applications using <strong>Next.js</strong>{" "}
          and implementing robust backend solutions with{" "}
          <strong>Node.js</strong>. I focus on creating efficient, maintainable
          solutions while continuously enhancing my skills in modern web
          technologies.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
          >
            Download My Resume
          </motion.button>
        </div>

        <dialog
          id="resumeDialog"
          className={`modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isModalOpen ? "modal-open" : ""}`}
          onClick={(e) => {
            if (e.target.id === "resumeDialog") setIsModalOpen(false);
          }}
        >
          <div className="modal-box relative p-6 rounded-lg bg-white w-full max-w-md">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-1 right-1 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              <BsX size={24} style={{ fontWeight: 900 }} />
            </button>

            <h3 className="text-lg font-bold text-center">Enter Your Details</h3>
            <p className="text-sm mb-4 text-center">
              Once you enter your details and submit, you will be able to download my resume.
            </p>

            <Formik
              initialValues={{ name: '', email: '', phone: '' }}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  <div className="form-group">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit & Download'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AboutMe;