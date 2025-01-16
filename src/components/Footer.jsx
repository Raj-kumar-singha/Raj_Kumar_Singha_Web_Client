import React from 'react';
import { BsChevronDoubleUp, BsCupStraw, BsFacebook, BsGit, BsGithub, BsInstagram, BsTwitterX, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className=" py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="flex flex-col items-center md:items-start">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current mb-3">
                        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847" />
                    </svg>
                    <p className="text-center md:text-left text-gray-400">
                        Raj Kumar Singha
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center">
                    <b className="text-lg mb-4 FooterHeaderText">Follow Me</b>
                    <div className="flex flex-col gap-3">
                        <Link to="/" className="flex items-center gap-2 hover:text-gray-700">
                            <BsGithub size={24} /> Github
                        </Link>
                        <Link to="/" className="flex items-center gap-2 hover:text-blue-400">
                            <BsTwitterX size={24} /> Twitter
                        </Link>
                        <Link to="/" className="flex items-center gap-2 hover:text-red-500">
                            <BsYoutube size={24} /> YouTube
                        </Link>
                        <Link to="/" className="flex items-center gap-2 hover:text-blue-500">
                            <BsFacebook size={24} /> Facebook
                        </Link>
                        <Link to="/" className="flex items-center gap-2 hover:text-pink-500">
                            <BsInstagram size={24} /> Instagram
                        </Link>
                        <Link to="/" className="flex items-center gap-2 hover:text-green-500">
                            <BsWhatsapp size={24} /> WhatsApp
                        </Link>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="text-center md:text-left">
                    <b className="text-lg mb-2 FooterHeaderText">Newsletter</b>
                    <p className="mb-4 text-gray-400">Enter your email to get updates.</p>
                    <div className="flex join">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-2 rounded-l-md input input-bordered text-black w-full focus:outline-none join-item"
                        />
                        <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 join-item">
                            Subscribe
                        </button>
                    </div>
                    <div className="mt-4 flex justify-center md:justify-start">
                        <Link to="/buy-me-a-coffee" className="w-full md:w-auto">
                            <button className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 w-full md:w-auto justify-center">
                                <BsCupStraw size={20} /> Buy Me a Coffee
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Back to Top Button */}
            <div onClick={scrollToTop} className="mt-10 flex justify-center cursor-pointer">
                <div className="flex flex-col items-center gap-1 hover:text-blue-500">
                    <BsChevronDoubleUp size={30} />
                    <b>Back To Top</b>
                </div>
            </div>

            <hr className="my-2 border-gray-700" />

            <p className="text-center mt-5 text-gray-500 text-sm">
                © {new Date().getFullYear()} Raj All rights reserved.<br /> Developed by{" "}
                <Link
                    to="/about"
                    className="border-b border-dotted border-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors duration-300 ease-in-out"
                >
                    Raj Kumar Singha
                </Link>
            </p>
        </footer>
    );
};

export default Footer;







// <footer className="footer footer-center p-10">
//     <div onClick={scrollToTop} className="flex justify-center items-center">
//         <Link to="/" className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-500">
//             <BsChevronDoubleUp size={24} />
//             <b>Back To Top</b>
//         </Link>
//     </div>
//     <aside>
//         <svg
//             width="50"
//             height="50"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             fillRule="evenodd"
//             clipRule="evenodd"
//             className="inline-block fill-current">
//             <path
//                 d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//         </svg>
//         <p className="font-bold">
//             ACME Industries Ltd.
//             <br />
//             Providing reliable tech since 1992
//         </p>
//         <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
//     </aside>
//     <nav>
//         <div className="grid grid-flow-col gap-4">
//             <Link>
//                 <BsFacebook size={24} />
//             </Link>
//             <Link>
//                 <BsInstagram size={24} />
//             </Link>
//             <Link>
//                 <BsTwitterX size={24} />
//             </Link>
//             <Link>
//                 <BsYoutube size={24} />
//             </Link>
//             <Link>
//                 <BsWhatsapp size={24} />
//             </Link>
//         </div>
//     </nav>
// </footer>