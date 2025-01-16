import React from 'react'
import { BsHouseDoor, BsImages } from 'react-icons/bs'
import PageBanner from '../components/PageBanner'

const GalleryPage = () => {

    const BannerData = {
        heading: "Gallery",
        backgroundUrl: "/contact-banner.jpg",
        breadcrumbs: [
            {
                link: "/",
                linkText: "Home",
                icon: BsHouseDoor,
            },
            {
                link: "/gallery",
                linkText: "My Gallery",
                icon: BsImages,

            },
        ],
    }

    return (
        <div className='appbody'>
            <PageBanner BannerData={BannerData} />
        </div>
    )
}

export default GalleryPage
