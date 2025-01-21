import React, { useState } from 'react';
import { BsHouseDoor, BsImages, BsX, BsZoomIn } from 'react-icons/bs';
import PageBanner from '../components/PageBanner';
import Modal from 'react-modal';
import InfiniteScroll from 'react-infinite-scroll-component';

Modal.setAppElement("#root");

const GalleryPage = () => {
    const initialData = [
        {
            id: 1,
            url: "https://pagedone.io/asset/uploads/1688025668.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 2,
            url: "https://pagedone.io/asset/uploads/1688029344.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 3,
            url: "https://pagedone.io/asset/uploads/1688029370.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 4,
            url: "https://pagedone.io/asset/uploads/1688029384.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 5,
            url: "https://pagedone.io/asset/uploads/1688029394.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 6,
            url: "https://pagedone.io/asset/uploads/1688029434.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 7,
            url: "https://pagedone.io/asset/uploads/1688029424.jpg ",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 8,
            url: "https://pagedone.io/asset/uploads/1688029447.jpg",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 9,
            url: "https://pagedone.io/asset/uploads/1688029408.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 10,
            url: "https://pagedone.io/asset/uploads/1688029384.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 11,
            url: "https://pagedone.io/asset/uploads/1688025668.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 12,
            url: "https://pagedone.io/asset/uploads/1688029344.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 13,
            url: "https://pagedone.io/asset/uploads/1688029370.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 14,
            url: "https://pagedone.io/asset/uploads/1688029384.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 15,
            url: "https://pagedone.io/asset/uploads/1688029394.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 16,
            url: "https://pagedone.io/asset/uploads/1688029434.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 17,
            url: "https://pagedone.io/asset/uploads/1688029424.jpg ",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 18,
            url: "https://pagedone.io/asset/uploads/1688029447.jpg",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 19,
            url: "https://pagedone.io/asset/uploads/1688029408.png",
            location: "kolkata",
            date: "25-01-2025"
        },
        {
            id: 20,
            url: "https://pagedone.io/asset/uploads/1688029384.png",
            location: "kolkata",
            date: "25-01-2025"
        },
    ]
    const [galleryData, setGalleryData] = useState(initialData);
    const [modalImage, setModalImage] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const closeModal = () => {
        setModalImage(null);
    }

    const openModal = (imageUrl) => {
        setModalImage(imageUrl);
    }

    const loadMoreImages = () => {
        if (galleryData.length >= 8) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setGalleryData((prev) => [
                ...prev,
                ...initialData.map((item) => ({ ...item, id: item.id + prev.length })),
            ]);
        }, 2000);
    };
    const BannerData = {
        heading: 'Gallery',
        backgroundUrl: '/gallery.webp',
        breadcrumbs: [
            {
                link: '/',
                linkText: 'Home',
                icon: BsHouseDoor,
            },
            {
                link: '/gallery',
                linkText: 'My Gallery',
                icon: BsImages,
            },
        ],
    };

    return (
        <div className="appbody">
            {/* Page Banner */}
            <PageBanner BannerData={BannerData} />

            {/* Gallery Section */}
            <div className="container mx-auto py-10 px-4">
                <InfiniteScroll
                    dataLength={galleryData.length}
                    next={loadMoreImages}
                    hasMore={hasMore}
                    loader={<div className="flex justify-center my-5">
                        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    </div>}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryData.map((image) => (
                            <div
                                key={image.id}
                                className="relative group overflow-hidden rounded-lg shadow-lg"
                            >
                                {/* Image */}
                                <img
                                    src={image.url}
                                    alt={`Gallery ${image.id}`}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Hover Details */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div
                                        className="p-3 bg-white rounded-full cursor-pointer"
                                        onClick={() => openModal(image.url)}
                                    >
                                        <BsZoomIn size={24} />
                                    </div>
                                    <p className="text-white mt-3">{image.location}</p>
                                    <p className="text-white">{image.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>

            {/* Image Modal */}
            <Modal
                isOpen={!!modalImage}
                className="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-75"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 "
                contentLabel="Modal onRequestClose Example"
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
            >
                <div className="relative">
                    <img src={modalImage} alt="Enlarged" className="max-w-full max-h-full" />
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                    >
                        <BsX size={24} />
                    </button>
                </div>
            </Modal >
        </div >
    );
};

export default GalleryPage;