import React from 'react'
import PageBanner from '../components/PageBanner'
import { BsHouseDoor, BsPersonVcard } from 'react-icons/bs'

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
        </div>
    )
}

export default AboutPage
