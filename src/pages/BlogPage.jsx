import React from 'react'
import { BsHouseDoor, BsJournalText, BsPersonVcard } from 'react-icons/bs'
import PageBanner from '../components/PageBanner'

const BlogPage = () => {

    const BannerData = {
        heading: "Blogs",
        backgroundUrl: "/Blogs.webp",
        breadcrumbs: [
            {
                link: "/",
                linkText: "Home",
                icon: BsHouseDoor,
            },
            {
                link: "/blogs",
                linkText: "All Blogs",
                icon: BsJournalText,

            },
        ],
    }

    return (
        <div className='appbody'>
            <PageBanner BannerData={BannerData} />
            <div className="text-center text-xl text-gray-600 bg-gray-200 p-5">
                <p>Blogs will uploaded soon...</p>
            </div>
        </div>
    )
}

export default BlogPage
