import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Newsletter from '../../components/Newsletter';

function Contact() {

    const form = useRef();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    

    const sendEmail = (event) => {
        event.preventDefault();
        // Your logic for handling the form submission goes here
        setIsModalOpen(true);
        setModalMessage('Submission successful!');
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section>
                <main className=" w-[86%] md:w-[80vw] mb-10 mx-auto">
                    
                    <div className="pt-10 md:pt-20">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h1 className="heading">Lets talk with us </h1>
                            <p className="sub-heading ">{`Ready to transform your digital presence? Let's chat and explore how our tailored solutions  can elevate your brand and drive success in the digital landscape.`}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-10">
                            <div className="flex items-center gap-3">
                                <FaLocationDot size={26} className=" text-primary" />
                                <p className='text-sm md:text-base'>Kaliakair, Gazipur-1750,<br /> Bangladesh.</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt size={26} className=" text-primary" />
                                <p className='text-sm md:text-base'>09666775534</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdEmail size={26} className=" text-primary" />
                                <p className='text-sm md:text-base'>info@bdu.ac.bd</p>
                            </div>
                        </div>

                    </div>

                    {/* Map and Contact Form */}
                    <div id="#contact" className="mt-20 flex flex-col gap-y-10 md:relative border-2xl">

                        {/* map */}
                        <div className="w-full md:w-4/6 h-[60vh] md:h-[100vh]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14570.7863057594!2d90.2144023466673!3d24.076987410361014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e3cf1ea16e0b%3A0x4e0bfa8fd7c88324!2sBangabandhu%20Sheikh%20Mujibur%20Rahman%20Digital%20University!5e0!3m2!1sen!2sbd!4v1705511793298!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-full rounded-2xl"></iframe>
                        </div>

                        {/* contact form */}
                        <div className="w-full md:w-[640px] md:h-[640px] p-3 md:p-10 flex flex-col gap-16 shadow-lg md:absolute top-8 right-0 z-10 bg-white  rounded-2xl ">

                            <h1 className="text-2xl font-bold">Send us a message</h1>
                            <form ref={form} onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-10">

                                <div className="flex flex-row gap-5 justify-between text-sm md:text-base">

                                    <div>
                                        <label className="text-ash ">Full Name</label>
                                        <input
                                            name="fullName"
                                            type="text"
                                            {...register('fullName', { required: 'Full Name is required' })}
                                            className={`w-full bg-transparent border-b-2 ${errors.fullName ? 'border-red' : 'border-black'} outline-none `}
                                        />
                                        {errors.fullName && <p className="text-red">{errors.fullName.message}</p>}
                                    </div>

                                    <div>
                                        <label className="text-ash ">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, message: 'Enter a valid email address' } })}
                                            className={`w-full bg-transparent border-b-2 ${errors.email ? 'border-red' : 'border-black'} outline-none `}
                                        />
                                        {errors.email && <p className="text-red">{errors.email.message}</p>}
                                    </div>

                                </div>

                                <div className="flex flex-row gap-5 justify-between text-sm md:text-base">
                                    <div>
                                        <label className="text-ash ">Phone Number</label>
                                        <input
                                            email="phoneNumber"
                                            type="tel"
                                            {...register('phoneNumber', { required: 'Phone Number is required' })}
                                            className={`w-full bg-transparent border-b-2 ${errors.phoneNumber ? 'border-red' : 'border-black'} outline-none `}
                                        />
                                        {errors.phoneNumber && <p className="text-red">{errors.phoneNumber.message}</p>}
                                    </div>
                                    <div>
                                        <label className="text-ash ">Company/Individual</label>
                                        <input
                                            name="company"
                                            type="text"
                                            {...register('company', { required: 'Company/Individual is required' })}
                                            className={`w-full bg-transparent border-b-2 ${errors.company ? 'border-red' : 'border-black'} outline-none `}
                                        />
                                        {errors.company && <p className="text-red">{errors.company.message}</p>}
                                    </div>

                                </div>


                                <div className="flex flex-col gap-5 text-sm md:text-base">
                                    <label className="text-ash ">Message</label>
                                    <textarea
                                        name="message"
                                        {...register('message', { required: 'Message is required' })}
                                        className={`w-full bg-transparent border-b-2 ${errors.message ? 'border-red' : 'border-black'} outline-none `}
                                    />
                                    {errors.message && <p className="text-red">{errors.message.message}</p>}
                                </div>

                                <div className="flex flex-col md:flex-row gap-5 justify-between">
                                    <div className="flex flex-row items-center gap-3">
                                        <input type="checkbox" {...register('acceptTerms', { required: 'You must accept the terms and conditions' })} className="h-4 w-4" />
                                        <p className="text-ash">Accept terms & conditions</p>
                                        {errors.acceptTerms && <p className="text-red">{errors.acceptTerms.message}</p>}
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-primary hover:bg-secondary px-16 py-3 text-white rounded-md">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* Modal Message */}
                            <div className="flex justify-end">
                                {isModalOpen && (
                                    <div className={`w-full md:w-1/2 shadow-md p-5 rounded-md ${modalMessage === "Submission successful!" ? "bg-[#008000]" : "bg-red"} `}>
                                        <div className="flex flex-row items-center gap-3">
                                            <span className="text-2xl text-white hover:cursor-pointer" onClick={closeModal}>
                                                &times;
                                            </span>
                                            <p className="text-white">{modalMessage}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='my-16'>
                        <Newsletter/>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Contact;
