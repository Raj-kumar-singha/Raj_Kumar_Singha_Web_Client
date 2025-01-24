import React from 'react'
import PageBanner from '../components/PageBanner'
import { BsFacebook, BsGithub, BsHouseDoor, BsInstagram, BsLinkedin, BsPersonVcard, BsTwitterX, BsWhatsapp, BsYoutube } from 'react-icons/bs'
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
                            <div className="flex flex-col gap-6 text-center py-6 ">
                                <p className='text-2xl text-black-900'>About Me</p>
                                <p className='text-2xl text-black-900'>Experience</p>
                                <p className='text-2xl text-black-900'>Study</p>
                                <p className='text-2xl text-black-900'>Skills</p>
                            </div>
                        </div>
                        <p className='text-center text-2xl text-black-900 py-3'>Follow Me On:-</p>
                        <div className="flex flex-row gap-3 justify-center align-middle ">
                            <Link to="https://github.com/Raj-kumar-singha" target='_blank' className="flex items-center gap-2 hover:text-gray-700">
                                <BsGithub size={19} />
                            </Link>
                            <Link to="https://twitter.com/Rajkuma48617284" target='_blank' className="flex items-center gap-2 hover:text-blue-500">
                                <BsTwitterX size={18} />
                            </Link>
                            <Link to="https://in.linkedin.com/in/raj-kumar-singha-63a7b5169" target="_blank" className="flex items-center gap-2 hover:text-blue-700" >
                                <BsLinkedin size={17} />
                            </Link>
                            <Link to="https://www.youtube.com/@officialoneway" target='_blank' className="flex items-center gap-2 hover:text-red-500">
                                <BsYoutube size={18} />
                            </Link>
                            <Link to="https://www.facebook.com/Raj.Kumar.Singha.05" target='_blank' className="flex items-center gap-2 hover:text-blue-500">
                                <BsFacebook size={18} />
                            </Link>
                            <Link to="https://www.instagram.com/itj_raj.kumar" target="_blank" className="flex items-center gap-2 hover:text-pink-500">
                                <BsInstagram size={18} />
                            </Link>
                            <Link to="https://wa.me/919083960663?text=Hi Raj." target='_blank' className="flex items-center gap-2 hover:text-green-500">
                                <BsWhatsapp size={18} />
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
