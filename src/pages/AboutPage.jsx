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
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {/* First Column */}
                    <div className="col-span-12 md:col-span-3 bg-orange-200 p-4">
                        raj111111111
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
