import React from 'react'
import PageBanner from '../components/PageBanner'
import { BsEnvelope, BsFacebook, BsGithub, BsHouseDoor, BsInstagram, BsLinkedin, BsPersonVcard, BsTelephoneOutbound, BsTwitterX, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AboutPage = () => {

    const BannerData = {
        heading: "About Me",
        backgroundUrl: "/about-me.webp",
        breadcrumbs: [
            {
                link: "/",
                linkText: "Home",
                icon: BsHouseDoor,
            },
            {
                link: "/about",
                linkText: "About Me",
                icon: BsPersonVcard,

            },
        ],
    }

    return (
        <div className='appbody'>
            <PageBanner BannerData={BannerData} />
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {/* First Column */}
                    <div className="col-span-12 md:col-span-3 bg-orange-200 p-4 py-32">
                        <div className=''>
                            <div className="flex justify-center align-middle mx-auto pb-4 w-52 h-52 border-8 border-solid border-red-900 rounded-full ">
                                <img
                                    src="/raj_kumar.jpg"
                                    alt="Coffee"
                                    className="w-48 h-48 rounded-full transform hover:scale-110 transition-transform"
                                />
                            </div>
                            <p className='text-center text-xl text-black-900 '>@Raj-kumar-singha</p>
                            <div className="flex flex-row gap-4 justify-center items-center pt-3">
                                {/* Email Link */}
                                <Link
                                    to="mailto:itsrajkumarsingha@gmail.com?subject=Write you Subject Here&body=Write Text Here...."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 border-b-2 border-dotted border-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <BsEnvelope className="hover:scale-110 transition-transform" />
                                    <span>Mail</span>
                                </Link>

                                {/* Phone Link */}
                                <Link
                                    to="tel:+919083960663"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 border-b-2 border-dotted border-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <BsTelephoneOutbound className="hover:scale-110 transition-transform" />
                                    <span>Call</span>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-6 text-center py-6 ">
                                <p className='text-2xl text-black-900'>About Me</p>
                                <p className='text-2xl text-black-900'>Experience</p>
                                <p className='text-2xl text-black-900'>Study</p>
                                <p className='text-2xl text-black-900'>Skills</p>
                            </div>
                        </div>
                        <p className='text-center text-2xl text-black-900 py-3'>Follow Me On:-</p>
                        <div className="flex flex-row gap-3 justify-center align-middle ">
                            <Link
                                to="https://github.com/Raj-kumar-singha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-gray-700"
                            >
                                <div className="tooltip" data-tip="GitHub">
                                    <BsGithub size={19} />
                                </div>
                            </Link>
                            <Link
                                to="https://twitter.com/Rajkuma48617284"
                                target='_blank'
                                className="flex items-center gap-2 hover:text-blue-500">
                                <div className="tooltip" data-tip="Twitter">
                                    <BsTwitterX size={18} />
                                </div>
                            </Link>
                            <Link
                                to="https://in.linkedin.com/in/raj-kumar-singha-63a7b5169"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-blue-700" >
                                <div className="tooltip" data-tip="Twitter">
                                    <BsLinkedin size={17} />
                                </div>
                            </Link>
                            <Link
                                to="https://www.youtube.com/@officialoneway"
                                target='_blank'
                                className="flex items-center gap-2 hover:text-red-500">
                                <div className="tooltip" data-tip="Youtube">
                                    <BsYoutube size={18} />
                                </div>
                            </Link>
                            <Link
                                to="https://www.facebook.com/Raj.Kumar.Singha.05"
                                target='_blank'
                                className="flex items-center gap-2 hover:text-blue-500">
                                <div className="tooltip" data-tip="Facebook">
                                    <BsFacebook size={18} />
                                </div>
                            </Link>
                            <Link
                                to="https://www.instagram.com/itj_raj.kumar"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-pink-500">
                                <div className="tooltip" data-tip="Instagram">
                                    <BsInstagram size={18} />
                                </div>
                            </Link>
                            <Link
                                to="https://wa.me/919083960663?text=Hi Raj."
                                target='_blank'
                                className="flex items-center gap-2 hover:text-green-500">
                                <div className="tooltip" data-tip="Whatsapp">
                                    <BsWhatsapp size={18} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Second Column */}
                    <div className="col-span-12 md:col-span-9 bg-orange-200 p-4">
                        raj222222222221
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
