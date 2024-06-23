import axios from "axios";
import { useEffect, useState } from "react";

const notice = [
    {
        id: 1,
        title: 'Notice for online class extension due to heat wave',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "25 April",
        pdf: "./assets/all/1.pdf"
    },
    {
        id: 2,
        title: 'Examination Postponement Notice',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "28 May",
        pdf: "./assets/all/2.pdf"
    },
    {
        id: 3,
        title: '২০২৩-২৪ শিক্ষাবর্ষে প্রাথমিক ভর্তি নিশ্চিত সংক্রান্ত নোটিশ ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "28 May",
        pdf: "./assets/all/3.pdf"
    },
    {
        id: 4,
        title: 'Class Routine of Department of IRE 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "06 June",
        pdf: "./assets/all/4.pdf"
    },
    {
        id: 5,
        title: 'IRAB Education Expo 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "22 June",
        pdf: "./assets/all/4.pdf"
    },
    {
        id: 6,
        title: 'IoT Present Cultural Night',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "10 June",
        pdf: "./assets/all/4.pdf"
    },
    {
        id: 7,
        title: 'IoT Present Cultural Night',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "11 June",
        pdf: "./assets/all/2.pdf"
    },

    {
        id: 7,
        title: 'IoT Present Cultural Night',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "7 June",
        pdf: "./assets/all/3.pdf"
    }
];
function Notice() {
    const [notices, setNotices] = useState([]);
    const colors = ['bg-orange-400', 'bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400'];

    const RandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('https://bdu-swe-dept.vercel.app/all-notice');
                setNotices(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };
        fetchNotices();
    }, []);

    function getCurrentFormattedDate() {
        const date = new Date();

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const dayOfMonth = date.getDate();
        const month = monthNames[date.getMonth()];

        return `${dayOfMonth} ${month}`;
    }

    return (
        <>
            <div className="w-[86%] md:w-[80vw] mb-10 mx-auto ">
                <div className="py-4 md:my-10 flex flex-col items-center justify-center">
                    <h1 className="heading text-center">Notice</h1>
                    <p className="sub-heading text-xl ">
                        Welcome to the Department of Internet of Things and Robotics Engineering (IRE) at Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh. We are excited to announce important updates and upcoming activities for our undergraduate program.
                    </p>
                </div>
                <div>
                    <div className='pt-16 grid grid-cols-1 md:grid-cols-2 gap-4 pb-10'>
                        {notices.map((item) => (
                            <div className='flex flex-row gap-4 bg-white ' key={item._id}>
                                <div className='w-1/2 bg-[#C4C4C4] flex justify-center items-center relative'>
                                    <img src="./assets/logo/logo1.png" className='w-1/2 rounded-md' alt="Logo" />
                                    <div className={`${RandomColor()} w-20 h-20 absolute -right-5 bottom-0 flex items-center p-4`}>
                                        <p className='text-white text-center'>{getCurrentFormattedDate()}</p> {/* Call the function here */}
                                    </div>
                                </div>
                                <div className='w-1/2 p-3 md:p-5 flex flex-col gap-4 justify-between'>
                                    <h2 className='text-[#06040A] text-sm md:text-base'>{item.title}</h2>
                                    <div>
                                        <a href={item.description} download className="text-primary font-bold mt-10">Download</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notice;