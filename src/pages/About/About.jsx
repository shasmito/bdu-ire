import React from 'react'
import heroImage from '../../assets/about/hero.png'
import head from '../../assets/about/head.png'
// import achievement1 from '../../assets/home/achievement1.png'
import GradientCard from '../../components/GradientCard'
import Gallery from '../../components/Gallery/Gallery'

import { TiTick } from "react-icons/ti";
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function About() {

    const pathData = [
        {
            id: 1,
            title: "Advanced Programming Languages in IRE",
            description: "In the Department of Internet of Things and Robotics Engineering (IRE) at Bangabandhu Sheikh Mujibur Rahman Digital University, we offer an in-depth course on Advanced Programming Languages designed to equip students with the skills and knowledge needed to excel in the rapidly evolving tech industry.\n\nCourse Highlights:\n1. In-Depth Language Study:\nPython: Advanced topics such as machine learning libraries (TensorFlow, Keras), data analysis, and automation.\nC++: Focus on memory management, object-oriented programming, and real-time system development.\nJava: Concurrency, network programming, and enterprise-level application development.\nJavaScript: Advanced concepts in web development, including Node.js, React, and asynchronous programming.\n\n2. Specialized Programming Paradigms:\nFunctional Programming: Languages like Haskell and Scala, emphasizing immutable data and first-class functions.\nConcurrent and Parallel Programming: Techniques and tools for writing efficient, multi-threaded applications.\nScripting Languages: Using languages like Ruby and Perl for automation, rapid prototyping, and text processing.\n\n3. Practical Applications:\nEmbedded Systems Programming: Writing low-level code for microcontrollers and embedded devices.\nIoT Development: Creating robust and scalable applications for IoT ecosystems.\nRobotics Algorithms: Implementing complex algorithms for robot control, navigation, and perception.\n\n4. Tools and Frameworks:\nDevelopment Environments: Utilizing IDEs and tools like Visual Studio Code, Eclipse, and IntelliJ IDEA.\nVersion Control: Mastering Git for collaborative development and code management.\nTesting and Debugging: Advanced techniques for ensuring code quality and reliability.\n\nBy engaging with these advanced programming languages and techniques, students in the IRE department are prepared to tackle the challenges of modern technology development and drive innovation in IoT and robotics.",
            image: "./assets/about/image3.png",
            link: "/"
        },
        {
            id: 2,
            title: "Software and Machine Integration in IRE",
            description: "In the Department of Internet of Things and Robotics Engineering (IRE) at Bangabandhu Sheikh Mujibur Rahman Digital University, we emphasize the seamless integration of software and hardware to create sophisticated, intelligent systems. Our curriculum focuses on equipping students with the skills to design, develop, and implement solutions that harness the power of both software and machines.\n\nCourse Highlights:\n1. Embedded Systems Programming:\nMicrocontrollers and Microprocessors: Understanding the architecture and programming of devices such as Arduino, Raspberry Pi, and ARM-based systems.\nReal-Time Operating Systems (RTOS): Learning to develop and manage software that interacts with hardware in real-time.\n\n2. Robotics Software Development:\nRobot Operating System (ROS): Mastering ROS for developing robot applications, including sensor integration, control algorithms, and communication.\nSimulation Tools: Using Gazebo, V-REP, and other simulation environments to model, test, and refine robotic systems before deployment.\n\n3. Machine Learning and AI Integration:\nAI Algorithms: Implementing machine learning and artificial intelligence algorithms for tasks such as vision processing, decision making, and autonomous navigation.\nEdge Computing: Developing AI solutions that run on edge devices to provide real-time processing and reduce latency.\n\n4. Software Development for IoT:\nIoT Protocols: Understanding and implementing communication protocols such as MQTT, CoAP, and HTTP/2.\nCloud Integration: Connecting IoT devices to cloud services for data storage, processing, and analytics using platforms like AWS IoT, Google Cloud IoT, and Microsoft Azure IoT.\n\n5. Advanced Control Systems:\nFeedback Control: Designing and implementing PID controllers and advanced control algorithms for managing system behavior.\nAutomation Software: Using PLCs (Programmable Logic Controllers) and SCADA (Supervisory Control and Data Acquisition) systems for industrial automation.\n\n6. Tools and Frameworks:\nDevelopment Environments: Utilizing IDEs and tools such as MATLAB, Simulink, LabVIEW, and Eclipse for software development and system design.\nVersion Control and Collaboration: Mastering Git and collaborative platforms like GitHub and GitLab for efficient team-based development.\n\nBy integrating software and hardware education, students in the IRE department are prepared to create innovative solutions that leverage the strengths of both domains. This comprehensive approach ensures that graduates are capable of addressing complex challenges in IoT, robotics, and related fields, driving progress and innovation.",
            image: "./assets/all/10.png",
            link: "/"
        },
        {
            id: 3,
            title: "Training Courses in the IRE Department",
            description: "The Department of Internet of Things and Robotics Engineering (IRE) at Bangabandhu Sheikh Mujibur Rahman Digital University offers a variety of specialized training courses designed to enhance students' practical skills and theoretical knowledge in key areas of IoT and robotics. These courses provide hands-on experience and in-depth understanding, preparing students for careers in cutting-edge technology fields.\n\n1. Advanced Programming and Software Development:\nCourse Overview: This course covers advanced programming techniques in languages such as Python, C++, and Java, with a focus on developing efficient, scalable, and robust software solutions.\nKey Topics: Data structures, algorithms, software design patterns, concurrent programming, and software testing.\n\n2. Embedded Systems and Microcontroller Programming:\nCourse Overview: Focused on the design and programming of embedded systems using popular microcontrollers like Arduino and Raspberry Pi.\nKey Topics: Microcontroller architecture, interfacing sensors and actuators, real-time operating systems (RTOS), and embedded C programming.\n\n3. Internet of Things (IoT) Systems Design:\nCourse Overview: This course provides comprehensive training on building IoT systems, including device programming, network communication, and cloud integration.\nKey Topics: IoT protocols (MQTT, CoAP), edge computing, IoT security, and data analytics.\n\n4. Robotics and Automation:\nCourse Overview: Aimed at developing skills in designing, programming, and controlling robotic systems, including autonomous robots and industrial automation.\nKey Topics: Robot Operating System (ROS), robotic kinematics, sensor integration, control systems, and automation software (PLCs, SCADA).\n\n5. Machine Learning and Artificial Intelligence for Engineers:\nCourse Overview: This course introduces machine learning and AI techniques with practical applications in IoT and robotics.\nKey Topics: Supervised and unsupervised learning, neural networks, computer vision, natural language processing, and AI deployment on edge devices.\n\n6. Cybersecurity for IoT and Robotics:\nCourse Overview: Training on protecting IoT devices and robotic systems from cyber threats and ensuring data integrity and privacy.\nKey Topics: Cybersecurity principles, encryption techniques, secure communication protocols, and vulnerability assessment.\n\n7. Cloud Computing and Big Data Analytics:\nCourse Overview: Focused on leveraging cloud platforms for IoT data storage, processing, and analysis, as well as big data technologies.\nKey Topics: Cloud services (AWS, Azure, Google Cloud), big data frameworks (Hadoop, Spark), and data visualization.\n\n8. Control Systems Engineering:\nCourse Overview: Training on designing and implementing control systems for various engineering applications, emphasizing feedback and automation.\nKey Topics: PID controllers, state-space analysis, digital control systems, and real-time control applications.\n\n9. Communication Networks and Protocols:\nCourse Overview: Comprehensive training on networking concepts and protocols essential for IoT and robotic systems.\nKey Topics: Network architecture, wireless communication, TCP/IP, Bluetooth, Zigbee, and LoRaWAN.\n\n10. Professional Development and Soft Skills:\nCourse Overview: Enhancing students' professional skills, including project management, technical writing, and effective communication.\nKey Topics: Project planning, teamwork, leadership, presentation skills, and career development strategies.\n\nEach training course in the IRE department is designed to provide students with the knowledge and skills necessary to excel in the dynamic fields of IoT and robotics. Through a combination of theoretical instruction and practical experience, these courses ensure that students are well-prepared for the challenges and opportunities in their future careers.",
            image: "./assets/all/11.png",
            link: "/"
        }
    ];

    const addressData = [
        {
            title: "Campus Address :",
            details: "Kaliakair, Gazipur-1750, Bangladesh."
        },
        {
            title: "Guest Address :",
            details: "Kaliakair, Gazipur-1750, Bangladesh."
        },
        {
            title: "",
            details: "Campus Location Lotifpur, Kaliakoair, Gazipur."
        },
        {
            title: "",
            details: "Campus Admin Building in TNT Bazar, Kaliakair, Gazipur"
        },

    ]

    return (
        <>
            <div className='bg-white text-black'>
                <div className=''>
                    <div className='p-10 md:pt-16 bg-light relative' >
                        <div className=''>
                            <h1 className='text-2xl md:text-4xl font-semibold text-center pb-5'>Department of Internet of Things and Robotics Engineering in BDU                        </h1>

                            <p className='text-center pb-10 md:w-[50vw] mx-auto'>The department is dedicated to providing a dynamic learning environment that nurtures creativity, critical thinking, and problem-solving skills among our students.
                            </p>

                        </div>
                        <img src={heroImage} alt='' className='w-full rounded-xl z-10'></img>
                    </div>


                    <div className='w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-20 flex flex-col gap-10 rounded-xl shadow-md -translate-y-10 md:-translate-y-24'>
                        <h1 className='text-3xl text-center'>Mission and Vission</h1>
                        <p>Our mission is to provide a dynamic learning environment that cultivates creativity, critical thinking, and problem-solving skills among students. We aim to deliver a rigorous curriculum encompassing sensor networks, embedded systems, artificial intelligence, machine learning, control systems, and robotics algorithms. Through theoretical coursework, hands-on laboratory sessions, and real-world projects, we equip students with both theoretical knowledge and practical expertise in IoT and Robotics Engineering. We are committed to maintaining industry relevance through faculty expertise, collaboration with industry partners, and participation in national and international research collaborations. Our goal is to foster innovation, entrepreneurship, and lifelong learning among students, preparing them to contribute to global and national markets with sustainable technological advancements and solutions.                        "</p>
                        <p>To be a globally recognized leader in IoT and Robotics Engineering education and research, empowering students to innovate and solve complex challenges through interdisciplinary knowledge and cutting-edge technology. To become a leading center of excellence in IoT and Robotics Engineering, renowned for our world-class research, exceptional graduates, and transformative impact on industry and society. We envision a future where our graduates are at the forefront of technological innovation, leading the way in the development of intelligent and interconnected systems that enhance efficiency, sustainability, and quality of life.
                        </p>
                    </div>
                </div>

                {/*  */}
                <div className='w-[80vw] mx-auto flex flex-col md:flex-row justify-center  py-16 items-center'>
                    <div className='md:w-1/3 p-10'>
                        <img src={head}></img>
                    </div>
                    <div className='md:w-1/2 flex flex-col items-center md:items-start gap-8'>
                        <p className='text-primary text-xl font-bold'>Chairman’s Talk</p>
                        <h1 className='tetx-xl md:text-3xl font-bold w-4/5 text-center md:text-left'>Explore the Future of Technology with IRE at BDU                        </h1>
                        <p className='text-gray text-center md:text-left'>The department is trying to realize both the government's and this university's ambition for a "smart" Bangladesh. We want our graduates to be entrepreneurs as well as innovators who contribute to our communities and the economy. Cocurricular activities, programming competitions, software and hardware projects, workshops, training opportunities, industrial attachments, and research projects are all available to the department's students. We have experienced and well-qualified faculty in this field. For maintaining a cordial and healthy teacher-student relationship, a pleasant and competitive environment exists here. I invite you to look around and learn more about our department, undergraduate programs, faculty members, modern laboratories, and the numerous activities that take place in the IRE department. </p>
                        <div className=' '>
                            <p className='font-semibold'>Samsuddin Ahmed  </p>
                            <p>Assistant Professor and Chairman</p>
                            <p> Department of Internet of Things and Robotics Engineering (IRE)</p>
                            <p>Email: samsuddin0001@bdu.ac.bd </p>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='bg-light'>
                    <div className=' mx-auto w-[90vw] md:w-[80vw] pt-16 py-20'>
                        <h1 className='heading text-center mt-4' >What path will you take? </h1>

                        <p className='sub-heading mx-auto  text-center mt-6'>The Department of Internet of Things and Robotics Engineering (IRE) offers diverse paths tailored to your interests and career goals. </p>

                        <div className='pt-10 flex flex-col md:flex-row gap-5 my-10'>
                            {
                                pathData.map((item) => (
                                    <GradientCard key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>


                {/*  */}
                <div className='mx-auto w-[90vw] md:w-[80vw] pt-16 md:py-20 flex flex-col items-center'>
                    <h1 className='heading mt-4' >Building Gallery</h1>
                    <p className='sub-heading '>Welcome to the Building Gallery of Bangabandhu Sheikh Mujibur Rahman Digital University (BDU). Our campus is designed to foster an environment of innovation, collaboration, and learning.                    </p>
                    <Gallery />
                </div>

                {/* Bottom */}
                <div className=' mx-auto w-[80vw] pt-16 py-20 flex flex-col md:flex-row justify-between items-center text-black'>
                    <div>
                        <h1 className='heading mt-4 mb-10' >Our Locations</h1>
                        <ul>
                            {
                                addressData.map((item) => (
                                    <li className=' md:text-base flex items-center mb-4'> <TiTick size={32} className='text-primary ' /> {item.title}  {item.details}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-10 my-10">
                        <div className="flex items-center gap-3">
                            <div className='bg-primary p-3 rounded-full'>
                                <FaLocationDot size={26} className=" text-white" />

                            </div>
                            <p className='md:text-xl '>Kaliakair, Gazipur-1750,<br /> Bangladesh.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className='bg-primary p-3 rounded-full'>
                                <FaPhoneAlt size={26} className=" text-white" />
                            </div>
                            <p className='md:text-xl '>09666775534</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className='bg-primary p-3 rounded-full'>
                                <MdEmail size={26} className=" text-white" />
                            </div>
                            <p className='md:text-xl '>info@bdu.ac.bd</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About