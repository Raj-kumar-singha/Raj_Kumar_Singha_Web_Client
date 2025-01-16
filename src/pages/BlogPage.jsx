import React from 'react'
import { BsHouseDoor, BsJournalText, BsPersonVcard } from 'react-icons/bs'
import PageBanner from '../components/PageBanner'

const BlogPage = () => {

    const BannerData = {
            heading: "Blogs",
            backgroundUrl: "/contact-banner.jpg",
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
        </div>
    )
}

export default BlogPage
