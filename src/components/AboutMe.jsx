// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { BsX } from "react-icons/bs";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// // Initialize Toastify
// // toast.configure();

// const AboutMe = ({ setActiveTab }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Validation Schema with Yup
//   const validationSchema = Yup.object().shape({
//     name: Yup.string()
//       .matches(/^[A-Za-z ]+$/, "Name can only contain letters")
//       .min(3, "Name must be at least 3 characters")
//       .required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     phoneNumber: Yup.string()
//       .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
//       .required("Phone number is required"),
//   });

//   // Formik Hook for Form Handling
//   const formik = useFormik({
//     initialValues: { name: "", email: "", phoneNumber: "" },
//     validationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       setLoading(true);

//       try {
//         // Validate Email using ZeroBounce API
//         // const zeroBounceApiKey = "YOUR_ZERBOUNCE_API_KEY"; // Replace with your API key
//         // const validateEmail = await axios.get(
//         //   `https://api.zerobounce.net/v2/validate?api_key=${zeroBounceApiKey}&email=${values.email}`
//         // );

//         // if (validateEmail.data.status !== "valid") {
//         //   toast.error("Invalid email, please enter a valid email.");
//         //   setLoading(false);
//         //   return;
//         // }

//         // Submit form data to Node.js API
//         const response = await axios.post("/api/download-resume", values);

//         if (response.status === 201) {
//           toast.success("Resume Form Submitted Successfully!");
//           resetForm();
//           setIsModalOpen(false);

//           // Trigger resume download
//           const link = document.createElement("a");
//           link.href = "/raj-kumar-singha-sde.pdf";
//           link.download = "Raj_Kumar_Singha_Resume.pdf";
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//         } else {
//           throw new Error("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         toast.error(error.response?.data?.error || "An error occurred.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div>
//       <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
//         About Me
//       </h2>
//       <div className="p-6 text-gray-800 flex flex-col items-center shadow-md justify-center min-h-[60vh]">
//         <p className="text-lg leading-relaxed text-justify text-gray-700 max-w-3xl">
//           I am a software engineer with over <strong>2+ years</strong> of
//           experience in web application development. My expertise includes
//           building scalable frontend applications using <strong>Next.js</strong>{" "}
//           and implementing robust backend solutions with{" "}
//           <strong>Node.js</strong>. I focus on creating efficient, maintainable
//           solutions while continuously enhancing my skills in modern web
//           technologies.
//         </p>
//         <div className="mt-6 flex flex-col items-center gap-4">
//           {/* Animated Button to Trigger Modal */}
//           <motion.button
//             onClick={() => setIsModalOpen(true)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
//           >
//             Download My Resume
//           </motion.button>
//         </div>

//         {/* Modal for Form */}
//         <dialog
//           id="resumeDialog"
//           className={`modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isModalOpen ? "modal-open" : ""
//             }`}
//           onClick={(e) => {
//             if (e.target.id === "resumeDialog") setIsModalOpen(false);
//           }}
//         >
//           <div className="modal-box relative p-6 rounded-lg bg-white">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-1 right-1 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
//             >
//               <BsX size={24} style={{ fontWeight: 900 }} />
//             </button>
//             <h3 className="text-lg font-bold text-center">Enter Your Details</h3>
//             <p className="text-sm mb-4 text-center">
//               Once you enter your details and submit, you will be able to
//               download my resume.
//             </p>
//             <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
//               {/* Name Input */}
//               <input
//                 type="text"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Your Name"
//                 className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <span className="text-red-500 text-sm">{formik.errors.name}</span>
//               )}

//               {/* Email Input */}
//               <input
//                 type="email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Your Email"
//                 className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <span className="text-red-500 text-sm">{formik.errors.email}</span>
//               )}

//               {/* Phone Number Input */}
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formik.values.phoneNumber}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Your Phone Number"
//                 className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//                 <span className="text-red-500 text-sm">{formik.errors.phoneNumber}</span>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
//               >
//                 {loading ? "Submitting..." : "Submit & Download"}
//               </button>
//             </form>
//           </div>
//         </dialog>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;




import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsX } from "react-icons/bs";

const AboutMe = ({ setActiveTab }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", phone: "" });
    setIsModalOpen(false);

    // Trigger resume download
    const link = document.createElement("a");
    link.href = "/raj-kumar-singha-sde.pdf";
    link.download = "Raj_Kumar_Singha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2 className=" displa text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
        About Me
      </h2>
      <div className="p-6  text-gray-800 flex flex-col items-center shadow-md justify-center min-h-[60vh]">
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
          {/* Animated Button to Navigate to Experience
          <motion.button
            onClick={() => setActiveTab("experience")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Go to Experience
          </motion.button> */}

          {/* Animated Button to Trigger Modal */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
          >
            Download My Resume
          </motion.button>
        </div>

        {/* Modal for Form */}
        <dialog
          id="resumeDialog"
          className={`modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isModalOpen ? "modal-open" : ""}`}
        onClick={(e) => {
          if (e.target.id === "resumeDialog") setIsModalOpen(false);
        }}
        >
        <div className="modal-box relative p-6 rounded-lg bg-white">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-1 right-1 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <BsX size={24} style={{ fontWeight: 900 }} />
          </button>
          <h3 className="text-lg font-bold text-center">Enter Your Details</h3>
          <p className="text-sm mb-4 text-center">Once you enter your details and submit, you will be able to download my resume.</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Phone Number Input */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone Number"
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Submit & Download
            </button>
          </form>
        </div>
      </dialog>
    </div>
    </div>
  );
};

export default AboutMe;