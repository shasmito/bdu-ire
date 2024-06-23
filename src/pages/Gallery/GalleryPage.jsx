import React from 'react'
import Gallery from '../../components/Gallery/Gallery'

const GalleryPage = () => {
    return (
        <div className='w-[90%] md:w-[80vw] mb-10 mx-auto '>
            <div className="py-4 md:my-16 flex  flex-col items-center justify-center">

                <h1 className="heading text-center">Gallery</h1>
                <p className="text-sm md:text-xl md:w-[60vw] mx-auto text-center">Welcome to the Building Gallery of Bangabandhu Sheikh Mujibur Rahman Digital University (BDU). Our campus is designed to foster an environment of innovation, collaboration, and learning.   </p>
            </div>

            <Gallery />
        </div>
    )
}

export default GalleryPage