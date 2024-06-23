import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const DetailsPage = () => {
    const location = useLocation();
    const { item } = location.state || {};
    if (!item) {
        return (
            <div className="mx-auto  w-[90vw] md:w-[80vw] pt-4">
                <FaArrowLeft />
                <Link to="/" className="text-blue-500 mb-4 block"> Back to Home</Link>
                <p className="text-center text-red-500">Item not found</p>
            </div>
        );
    }

    // Split the description into paragraphs
    const descriptionParagraphs = item.description.split('\n');

    return (
        <div className="mx-auto w-[90vw] md:w-[80vw] pt-4">
            <Link to="/" className="text-blue-500 mb-4 block">Back to Home</Link>
            <div className='mx-auto w-[90vw] md:w-[80vw] mt-10'>
                <div>
                    <img className="md:w-1/2 mx-auto rounded-md" src={item.image} alt={item.title} />
                </div>
                <div className="rounded-lg overflow-hidden">
                    <div className="mt-6">
                        <div className="text-gray-700 text-sm mb-6">
                            <p>{item.agenda}</p>
                        </div>
                        <h1 className="text-primary text-2xl md:text-3xl font-semibold mb-4">{item.title}</h1>
                        <div className="text-black mb-4">
                            {descriptionParagraphs.map((paragraph, index) => (
                                <p key={index} className="mb-2">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
