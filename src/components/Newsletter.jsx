import React from 'react'

const Newsletter = () => {
    return (
        <div className="flex items-center justify-center py-10 md:py-16 bg-blue-600 rounded-lg text-white relative overflow-hidden">
            <img src='/assets/home/bg/wave.png' className='object-contain  absolute  w-3/4 opacity-50' />

            <div className="absolute inset-0 bg-blue-700 opacity-50 z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="text-lg md:text-2xl font-semibold mb-4">
                    Don’t miss our weekly updates about academics information
                </h2>
                <div className="flex flex-col sm:flex-row items-center mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                        className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4  focus:outline-none border border-transparent border-b-2 border-b-light text-white w-full bg-transparent sm:w-auto"
                    />
                    <button className="px-6 py-2 bg-transparent text-white font-semibold rounded-md hover:bg-gray-200 focus:outline-none hover:ring-2 hover:ring-white">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter