
import hero from '../../assets/home/hero.png'
import MenuBar from '../shared/MenuBar'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { IoIosArrowRoundForward } from "react-icons/io";

import wave from '../../assets/home/bg/wave.png'

import icon1 from '../../assets/home/icon1.png'
import icon5 from '../../assets/home/icon5.png'
import achievement1 from '../../assets/home/achievement1.png'

import upcoming from '../../assets/home/upcoming1.png'

import logo2 from '../../assets/home/logo1.png'

import Header from '../shared/Header'
import GradientCard from '../../components/GradientCard';

const facaltyDetails = [
  {
    id: 1,
    title: 'Faculty',
    description: "To develop innovative technologies, products, and services that cater to the global market's needs and contribute to the growth of international businesses. "
  },
  {
    id: 2,
    title: 'Mission and Vision',
    description: "To contribute to the national market and government sector by driving advancements in diverse sectors while working towards the achievement of industry 4.0 and 5.0 goals through efficient, productive, and sustainable implementations. "
  },
  {
    id: 3,
    title: 'Office and Stuff',
    description: "To foster continuous research, innovation, and lifelong learning, pushing the boundaries of technology by engaging in cutting-edge research and staying updated with the latest advancements, tools, and methodologies to address emerging challenges. "
  },
  {
    id: 4,
    title: 'History',
    description: "To accelerate industry progress with IoT and Robotics integration for enhanced productivity and efficiency. "
  }
]

const academicDetails = [
  {
    id: 1,
    title: 'Undergraduates Studies',
    description: "The Faculty of Cyber Physical Systems of this University currently offers a four-year bachelor's (honors) degree under the Department of Internet of Things and Robotics Engineering. This faculty has been established with the aim of creating skilled human resources suitable for the Fourth Industrial Revolution.",
    link: "/undergrad"

  },
  {
    id: 2,
    title: 'Graduate Studies',
    description: "Embark on an advanced academic journey with our Graduate Studies in Cyber Physical Systems at BDU. Our program is designed to equip students with cutting-edge knowledge and practical skills in integrating cyber and physical components to address complex industry challenges. ",
    link: "/postgrad"
  },
  {
    id: 3,
    title: 'Training Programs',
    description: "Join us at BDU to advance your career and contribute to the future of Cyber Physical Systems. Apply now to be part of a dynamic and innovative community dedicated to pushing the boundaries of technology. ",
    link: "/training-programs"
  }
]

const achievementsData = [
  {
    id: 1,
    title: "BDU's Robo Pulse Competes in IEEE R10 Finals in Bangkok",
    description: "Students from Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) have successfully developed an advanced autonomous rover, EcoRover designed for environmental monitoring and management.\n\nThis innovative project showcases the technical expertise and forward-thinking mindset of BDU's IoT and Robotics Engineering Department. The EcoRover autonomously navigates diverse terrains, collects environmental data, and performs tasks crucial for conservation efforts.\n\nEquipped with cutting-edge sensors, artificial intelligence (AI), and machine learning (ML) algorithms, the rover ensures precise and reliable operations. The EcoRover features advanced navigation capabilities using LiDAR, GPS, and ultrasonic sensors for obstacle detection and path planning, enhanced by AI-driven algorithms for real-time decision-making.\n\nIt excels in environmental monitoring by measuring air and water quality, temperature, humidity, and other parameters, while also identifying pollutants in water bodies and providing remediation recommendations.\n\nIts robust all-terrain design allows it to operate in urban, rural, and remote areas, built with durable materials to withstand harsh conditions. For communication and control, the rover offers remote monitoring through wireless data transmission to a centralized system and includes a user-friendly interface for remote operation and data visualization.\n\nThe EcoRover has versatile applications in climate change mitigation, water management, disaster response, and agriculture, providing valuable data for climate research, environmental assessments, and agricultural productivity.\n\nDeveloped with support from Bangladesh’s leading electronics manufacturer Walton and in collaboration with industry experts and academic mentors from BDU, the EcoRover will be showcased at various national and international platforms. The development team plans to enhance its capabilities further, integrating more advanced AI features and expanding its environmental monitoring functions.\n\nThis project underscores BDU's commitment to fostering innovation, research, and practical problem-solving skills among its students, preparing them to tackle future challenges with cutting-edge technology.",
    image: './assets/all/3.jpg'
  },
  {
    id: 2,
    title: "BDU Students Develop Autonomous Rover",
    description: "Students from Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) have successfully developed an advanced autonomous rover, EcoRover, designed for environmental monitoring and management.\n\nThis innovative project showcases the technical expertise and forward-thinking mindset of BDU's IoT and Robotics Engineering Department. The EcoRover autonomously navigates diverse terrains, collects environmental data, and performs tasks crucial for conservation efforts.\n\nEquipped with cutting-edge sensors, artificial intelligence (AI), and machine learning (ML) algorithms, the rover ensures precise and reliable operations. The EcoRover features advanced navigation capabilities using LiDAR, GPS, and ultrasonic sensors for obstacle detection and path planning, enhanced by AI-driven algorithms for real-time decision-making.\n\nIt excels in environmental monitoring by measuring air and water quality, temperature, humidity, and other parameters, while also identifying pollutants in water bodies and providing remediation recommendations.\n\nIts robust all-terrain design allows it to operate in urban, rural, and remote areas, built with durable materials to withstand harsh conditions. For communication and control, the rover offers remote monitoring through wireless data transmission to a centralized system and includes a user-friendly interface for remote operation and data visualization.\n\nThe EcoRover has versatile applications in climate change mitigation, water management, disaster response, and agriculture, providing valuable data for climate research, environmental assessments, and agricultural productivity.\n\nDeveloped with support from Bangladesh’s leading electronics manufacturer Walton and in collaboration with industry experts and academic mentors from BDU, the EcoRover will be showcased at various national and international platforms. The development team plans to enhance its capabilities further, integrating more advanced AI features and expanding its environmental monitoring functions.\n\nThis project underscores BDU's commitment to fostering innovation, research, and practical problem-solving skills among its students, preparing them to tackle future challenges with cutting-edge technology.",
    image: './assets/all/2.jpg'
  },
  {
    id: 3,
    title: "1st Runner up Robo Tech Olympiad 2022",
    description: "In 2022, a team from Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) achieved the prestigious accolade of 1st Runner-Up in the Robo Tech Olympiad.\n\nThe competition, renowned for its rigorous challenges and innovation in robotics, saw BDU's team demonstrate exceptional technical skill and problem-solving abilities. Led by dedicated students from the IoT and Robotics Engineering Department, the team showcased their expertise in designing and programming robots to meet complex tasks and challenges presented during the Olympiad.\n\nTheir achievement not only highlights the high caliber of education and mentorship provided at BDU but also underscores the university's commitment to nurturing talent in emerging technologies.\n\nThe accolade further solidifies BDU's reputation as a leading institution fostering innovation and excellence in robotics and related fields, setting a benchmark for future competitions and inspiring students to continue pushing the boundaries of technological innovation.",
    image: './assets/home/achievement3.png'
  }
]
const upcomingActivity = [
  {
    id: 1,
    title: 'IRAB Education Expo 2024',
    description: 'Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) is excited to host the IRAB Education Expo 2024 from August 15-17, 2024, on the BDU campus. ',
    image: './assets/all/4.jpg',
    date: '22 June'
  }, {
    id: 2,
    title: 'IoT Present Cultural Night',
    description: 'Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) is thrilled to announce the upcoming IoT Present Cultural Night, a vibrant celebration of culture, technology, and community. ',
    image: './assets/all/5.jpg',
    date: '10 June'
  },
  {
    id: 3,
    title: ' IRE Fest  – 2024',
    description: 'Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) proudly presents IRE Fest 2024, an exciting and comprehensive festival celebrating innovation, research, and education.',
    image: './assets/all/6.png',
    date: '11 June'
  }, {
    id: 4,
    title: 'Robo Tech Olympiad 2024 ',
    description: 'Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) is excited to announce the Robo Tech Olympiad 2024, a premier robotics competition that brings together talented students.',
    image: './assets/all/7.jpg',
    date: '7 June'
  },
]

const latestNews = [
  {
    id: 1,
    title: 'মাননীয় প্রধানমন্ত্রীর শিক্ষা ও সংস্কৃতিবিষয়ক উপদেষ্টার সঙ্গে বিডিইউ উপাচার্যের সৌজন্য সাক্ষাৎ',
    description: "মাননীয় প্রধানমন্ত্রীর শিক্ষা ও সংস্কৃতিবিষয়ক উপদেষ্টার সঙ্গে বিডিইউ উপাচার্যের সৌজন্য সাক্ষাৎমাননীয় প্রধানমন্ত্রীর শিক্ষা ও সংস্কৃতিবিষয়ক উপদেষ্টা ড. কামাল আবদুল নাসের চৌধুরীর সঙ্গে সৌজন্য সাক্ষাৎ করেছেন বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি, বাংলাদেশ এর মাননীয় উপাচার্য অধ্যাপক ড.  মুহাম্মদ  মাহফুজুল ইসলাম, পিইঞ্জ।\n\nমঙ্গলবার  (২১ মে) মাননীয় প্রধানমন্ত্রীর শিক্ষা ও সংস্কৃতিবিষয়ক উপদেষ্টার কার্যালয়ে এ সৌজন্য সাক্ষাৎ  করেন তিনি। \n\nএ সময় বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি, বাংলাদেশ এর মাননীয় উপ-উপাচার্য অধ্যাপক ড. মো: মাহবুবুল আলম জোয়ার্দার ও মাননীয় ট্রেজারার অধ্যাপক ড. মো: আনোয়ার হোসেন উপস্থিত ছিলেন।\n\nএ সময় মাননীয় উপাচার্য অধ্যাপক ড.  মুহাম্মদ  মাহফুজুল ইসলাম, পিইঞ্জ বিশ্ববিদ্যালয়ের মাস্টার প্ল্যান,কারিকুলাম,একাডেমিক কার্যক্রমসহ সার্বিক বিষয়ে মাননীয় \n\nশিক্ষা ও সংস্কৃতিবিষয়ক উপদেষ্টা ড. কামাল আবদুল নাসের চৌধুরীরকে অবহিত করেন।\n\nমাননীয় উপদেষ্টা বিশ্ববিদ্যালয়ের সার্বিক অগ্রগতিতে সন্তোষ প্রকাশ করেন |",
    agenda: 'Event',
    image: './assets/all/8.jpg'
  }, {
    id: 2,
    title: 'New Course Offering: Software Engineering at BDU',
    description: "Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) is thrilled to announce the launch of a new course in Software Engineering, aimed at equipping students with comprehensive knowledge and practical skills essential for thriving in the fast-evolving field of software development.\n\nCourse Overview:\n1. Core Subjects:\nFundamentals of Software Engineering: Introduction to the principles and methodologies of software engineering, covering the entire software development lifecycle.\n\nProgramming Languages: In-depth study of popular programming languages such as Java, Python, and C++, focusing on writing efficient and effective code.\n\nSoftware Design and Architecture: Exploration of software design patterns, architectural styles, and best practices for building scalable and maintainable systems.\n\n2. Advanced Topics:\nSoftware Testing and Quality Assurance: Techniques and tools for ensuring the reliability and quality of software products through rigorous testing and validation processes.\n\nAgile Methodologies: Emphasis on Agile frameworks like Scrum and Kanban, promoting adaptive planning, iterative development, and continuous improvement.\n\nDevOps and Continuous Integration/Continuous Deployment (CI/CD): Understanding the integration of development and operations, automation of software delivery, and deployment pipelines.\n\n3. Practical Experience:\nHands-On Projects: Real-world projects and case studies that enable students to apply theoretical knowledge to practical scenarios, fostering critical thinking and problem-solving skills.\n\nInternships and Industry Collaborations: Opportunities for students to gain practical experience through internships with leading tech companies and collaborative projects with industry partners.\n\n4. Career Opportunities:\nJob Readiness: The course is designed to prepare students for successful careers in software development, systems analysis, software project management, and other related fields.\n\nNetworking and Mentorship: Access to a network of industry professionals, alumni, and mentors to guide students in their career paths and professional development.\n\nThe Software Engineering course at BDU aims to create proficient software engineers who are well-versed in the latest technologies and methodologies, ready to meet the demands of the global job market. Enrollment is now open, and we invite all aspiring software engineers to join this exciting new program and embark on a journey towards a successful career in software engineering.",
    agenda: 'New Course Open',
    image: './assets/home/latest2.png'
  },
  {
    id: 3,
    title: 'IRE Department Successfully Completes Annual Picnic',
    description: "The Internet of Things and Robotics Engineering (IRE) Department at Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) recently organized a successful annual picnic, creating a memorable experience for students, faculty, and staff. Held on June 15, 2024, at the picturesque Gazipur National Park, the event was a delightful blend of relaxation, team-building activities, and fun.\n\nParticipants enjoyed a day filled with various recreational activities, including outdoor games, a nature hike, and a boat ride. The picnic provided an excellent opportunity for everyone to unwind, socialize, and strengthen the sense of community within the department.\n\nThe event also featured a delicious buffet lunch with a variety of local and international cuisines, ensuring that everyone's taste preferences were catered to. The IRE Department's faculty members organized a series of team-building exercises that encouraged collaboration, problem-solving, and camaraderie among students and staff.\n\nThe success of the annual picnic highlights the department's commitment to fostering a balanced and supportive environment for both academic and extracurricular activities. The IRE Department at BDU continues to prioritize the well-being and holistic development of its community, ensuring that students and staff alike have opportunities to bond, relax, and create lasting memories.",
    agenda: 'Picnic',
    image: './assets/home/latest3.png'
  }
]

function Home() {

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate('/details', { state: { item } });
  };

  return (
    <>
      {/* Header */}
      {/* Hero Image */}
      <div className="relative h-[30vh] md:h-[80vh] bg-cover bg-center " style={{ backgroundImage: `url(${hero})` }} >
        <div className="absolute w-full md:w-1/2 h-1/2 md:h-full bottom-0 bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full md:w-1/2  md:top-1/2 md:-translate-y-1/2  md:left-[10vw] text-white md:font-bold md:text-2xl flex md:flex md:flex-col md:items-center md flex-col justify-center items-center ">
          <p className='md:self-start text-xl md:text-6xl font-bold mb-5 tracking-wide leading-snug text-center md:text-left'>
            Welcome to the  <br /> future  education  systems in IRE
          </p>

          <Link to="/about" className=' md:self-start text-sm  items-center bg-blue-800 p-1 rounded-md mb-2 inline-flex'>Learn More <IoIosArrowRoundForward size={26} /></Link>
        </div>
      </div>

      {/* End of the Header */}

      <main className='object-contain bg-white' style={{ backgroundImage: `url(${wave})` }}>

        {/*  */}
        <div className=' mission w-[90vw] md:w-[80vw]  mx-auto  flex flex-col md:flex-row gap-10 pt-10 md:pt-56 pb-20  items-center object-contain' style={{ backgroundImage: `url(${wave})` }}>
          <iframe src="https://www.youtube.com/embed/rXSWbpUVG3Q?si=yK6E7ARl5aLs9Rxr" title="YouTube video player" frameborder="0" allowfullscreen className='md:w-[40vw]  h-[30vh] md:h-[40vh]'></iframe>
          <div className=' md:w-1/2 flex flex-col gap-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-black'>BDU Cyber Physical Mission <br /> and Vision</h1>
            <p className='text-gray text-center md:text-left'>The mission of BDU Cyber Physical Systems is to advance the frontiers of technology by integrating cyber and physical systems to solve complex, real-world problems. We are dedicated to fostering innovation, enhancing security, and improving efficiency through cutting-edge research, interdisciplinary collaboration, and the development of highly skilled professionals. Our vision is to be a global leader in Cyber Physical Systems, driving technological innovation and shaping a future where seamlessly integrated cyber and physical systems enhance the quality of life, ensure sustainable development, and provide robust solutions to the challenges of tomorrow. </p>
          </div>
        </div>

        {/* Details of Software and machine */}
        <div className=' mx-auto  w-[90vw] md:w-[80vw] flex flex-col mb-10 md:my-20'>
          <h1 className='heading text-center pb-10'>The Scope of IoT and Robotics Engineering </h1>

          <div className='flex flex-row flex-wrap gap-5 '>
            {
              facaltyDetails.map((item) => (
                <Link to="/about" key={item.id} className='flex flex-row gap-5 md:w-[39vw] p-6 hover:shadow-md rounded-lg'>
                  <img src={icon1} className='w-12 h-12 md:w-16 md:h-16' />
                  <div className='flex flex-col gap-2'>
                    {/* <h2 className='text-lg'>{item.title}</h2> */}
                    <p className='text-gray text-sm md:text-base text-justify'>{item.description}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>

        {/* Upcoming Session */}
        <div className=' bg-light pt-16 pb-10'>
          <div className='mx-auto  w-[90vw] md:w-[80vw]'>
            <h2 className='text-center uppercase text-primary'>Upcoming Session 2023-2024</h2>
            <h1 className='heading text-center mt-4' >Academic Details</h1>
            <div className='flex flex-col md:flex-row gap-5 my-10'>
              {
                academicDetails.map((item, index) => (
                  <div key={index} className='flex flex-col gap-5 md:w-1/3 p-6 bg-white hover:shadow-2xl rounded-lg shadow-md'>
                    <div className='flex flex-row gap-5 items-center'>
                      <img src={icon5} className='w-16 h-16' />
                      <h2 className='text-xl md:text-2xl font-semibold text-wrap'>{item.title}</h2>
                    </div>
                    <div>
                      <p className='text-gray'>{item.description}</p>
                    </div>
                    <Link to={item.link} className='text-primary'>{`Learn more >>>`}</Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className=' mx-auto w-[90vw] md:w-[80vw]  pt-16'>
          <h1 className='heading text-center mt-4' >Achievements</h1>

          <p className='sub-heading mx-auto  text-center mt-6'>Our latest Achievement 2024</p>
          <div className='flex flex-col md:flex-row gap-5 my-10'>
            {
              achievementsData.map((item) => (
                <GradientCard key={item.id} item={item} title={item.title} description={item.description} image={item.image} link={item.link} />
              ))
            }
          </div>
        </div>

        {/* Upcoming  Activity*/}
        <div className='mx-auto  w-[90vw] md:w-[80vw] pt-16'>
          <h1 className='heading mt-4' >Upcoming Activity</h1>
          <div className='flex flex-row items-center justify-between'>
            <p className=' mt-6'>Upcoming Activities at Bangabandhu Sheikh Mujibur Rahman Digital University (BDU)  </p>
            <Link to="/notice" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white'>Learn More</Link>
          </div>

          <div className=' pt-16 flex flex-col md:flex-row gap-x-2 gap-y-10 flex-wrap'>
            {
              upcomingActivity.map((item) => (
                <Link to="/notice">
                  <div className='md:w-[38vw] flex flex-col md:flex-row gap-2'>
                    <div className='md:w-1/2  relative'>
                      <img src={item.image} className='w-full rounded-md'></img>
                      <div className='bg-primary w-20 h-20 absolute -right-5 bottom-0 flex items-center p-4'>
                        <p className='text-white text-center'>{item.date}</p>
                      </div>
                    </div>
                    <div className='md:w-1/2 p-5 flex flex-col gap-2'>
                      <h2 className='title text-[#06040A]'>{item.title}</h2>
                      <p className='text-black text-sm'>{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>

        {/* Latest News */}
        <div className='mx-auto  w-[90vw] md:w-[80vw] pt-16'>
          <h1 className='heading mt-4' >Latest News</h1>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-sm text-black mt-6'>Latest News at Bangabandhu Sheikh Mujibur Rahman Digital University            </p>
            {/* <NavLink to="/" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white text-sm md:text-ba'>Learn More</NavLink> */}
          </div>

          <div className='pt-16 flex flex-col md:flex-row gap-6  flex-wrap'>
            {
              latestNews.map((item, index) => (
                <div
                  key={index}
                  className='md:w-[25vw] flex flex-col gap-2'
                  onClick={() => handleNavigate(item)}
                >
                  <div className='w-26 h-[250px] overflow-hidden rounded-md flex items-center justify-center'>
                    <img src={item.image} className='max-w-full max-h-full object-contain rounded-md' />
                  </div>

                  <div className='md:p-5 flex flex-col gap-2'>
                    <p className='text-primary text-sm'>{item.agenda}</p>

                    <h2 className='font-semibold text-xl md:text2xl text-[#06040A]'>{item.title}</h2>
                    <p className='text-black text-sm'>{item.description.slice(0, 130) + "..."}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/*  */}
        <div className='mx-auto  w-[90vw] md:w-[80vw] pt-16'>
          <h1 className='heading text-center mt-4' >Industry Collaboration</h1>

          <p className='sub-heading mx-auto  text-center mt-6'>BDU's IRE Department fosters robust industry collaborations to enhance learning, promote innovation, and provide valuable opportunities for students and faculty.
          </p>
          <div className='flex flex-row justify-between gap-5 my-10 py-10 bg-[#081f51] overflow-x-auto px-4'>
            <img src="/assets/home/logo2.png" className='h-16'></img>
            <img src="assets/home/logo1.png" className='h-16'></img>
            <img src="assets/home/logo3.png" className='h-16'></img>
            <img src="assets/home/logo4.png" className='h-16'></img>
            <img src="assets/home/logo5.png" className='h-16'></img>
          </div>
        </div>

      </main>
    </>
  )
}

export default Home