import PeopleCard from '../../components/Peoples/PeopleCard';

const headOfDepartment = [
    {
        id: 1,
        image: './assets/all/15.jpg',
        name: 'Samsuddin Ahmed',
        designation: 'Head of Department',
        email: 'samsuddin0001@bdu.ac.bd',
        telephone: '01944897313',
        contact: 'Kaliakair, Gazipur-1750, Bangladesh.',
        website: 'https://samsuddin.bsmrdu.ac.bd/',
        researchInterest: 'Machine Learning, Information Security',
        academicBackground: [
            { degree: 'Masters in Computer Engineering, 2020', institution: 'Chosun University, Gwangju, South Korea' },
            { degree: 'Bachelor in Computer Science and Engineering, 2010', institution: 'University of Chittagong, Chattogram, Bangladesh' },
        ],
    },
];

const assistantProfessors = [
    {
        id: 2,
        image: './assets/all/16.jpg',
        name: 'Farzana Akter',
        designation: 'Assistant Professor',
        email: 'farzana0001@bdu.ac.bd',
        telephone: '01741582031',
        contact: 'Kaliakair, Gazipur-1750, Bangladesh.',
        researchInterest: 'Machine Learning, NLP, Data Analysis, IoT, Blockchain',
        academicBackground: [
            { degree: 'Master of Science (MSc.) in Computer Science and Engineering, 2014', institution: 'Jahangirnagar University, Bangladesh' },
            { degree: 'Bachelor of Science (BSc.) in Computer Science & Engineering, 2013', institution: 'Jahangirnagar University, Bangladesh' },
        ],
    },
    
];
const lecturers= [
    {
        id: 3,
        image: './assets/all/17.jpg',
        name: 'Suman Saha',
        designation: 'Lecturer',
        email: 'suman0001@bdu.ac.bd',
        telephone: '01912127578',
        contact: 'Kaliakair, Gazipur-1750, Bangladesh.',
        researchInterest: 'IoT, Deep Learning, Machine Learning, Computer Vision, Wireless Adhoc Networking',
        academicBackground: [
            { degree: 'Masters of Science (M.Sc.) in Computer Science & Engineering, 2019', institution: 'Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh' },
            { degree: 'Bachelor of Science (Engg.) in Computer Science and Engineering, 2014', institution: 'University of Chittagong, Chittagong, Bangladesh' },
        ],
    },
    {
    id: 4,
    image: '/assets/all/20.jpg',
    name: 'Mahir Mahbub',
    designation: 'Lecturer',
    email: 'mahbub0001@bdu.ac.bd',
    telephone: '01732687621',
    contact: 'Kaliakair, Gazipur-1750, Bangladesh.',
    researchInterest: 'Natural Language Processing, Artificial Intelligence & Machine Learning, Software Engineering, Information Security',
    academicBackground: [
      { degree: 'Junior School Certificate in General, 2008', institution: 'Board of Intermediate and Secondary Education Rajshahi, Rajshahi, Bangladesh' },
      { degree: 'Secondary School Certificate in Science, 2013', institution: 'Board of Intermediate and Secondary Education Rajshahi, Rajshahi, Bangladesh' },
      { degree: 'Higher Secondary Certificate in Science, 2015', institution: 'Board of Intermediate and Secondary Education Rajshahi, Rajshahi, Bangladesh' },
      { degree: 'B.Sc in Software Engineering in Software Engineering, 2019', institution: 'Institute of Information Technology, University of Dhaka, Dhaka, Bangladesh' },
      { degree: 'M.Sc. in Software Engineering in Software Engineering, 2021', institution: 'Institute of Information Technology, University of Dhaka, Dhaka, Bangladesh' },
    ],
    }
]
const Peoples = () => {
    return (
        <div className='bg-white pb-10'>
            <div className='relative flex flex-col items-center justify-center h-full'>
                <div className='h-[60vh] w-full flex items-center pt-[3%] flex-col gap-10 bg-light relative'>
                    <h1 className="text-2xl md:text-4xl font-semibold text-black z-10">Faculty</h1>
                    <p className="text-center z-10">
                        Active Faculty List: Department of Internet of Things and Robotics Engineering (IRE)
                    </p>
                    <img src='/assets/home/bg/wave.png' className='object-contain w-3/4 -left-36 absolute -bottom-36' />
                </div>

                <div className='-translate-y-40 bottom-0 w-[90vw] md:w-[70%] shadow-md  bg-white grid grid-cols-1 md:grid-cols-2  text-black rounded-md'>
                    <img src='/assets/peoples/dean.png' className='w-full object-contain self-center' />
                    <div className='bg-[#544E5D] p-4 md:p-10 text-white pt-10 md:pt-24'>
                        <h1 className='text-2xl font-semibold text-white pb-6'>Dean Name (Not Appointed)</h1>
                    </div>
                </div>
            </div>

            <div className='w-[86%] md:w-[80vw] mb-10 mx-auto'>
                <div>
                    <h1 className='text-2xl text-black font-semibold '>Head of the Department</h1>
                    <div className='flex gap-6 my-10'>
                        {
                            headOfDepartment.map((item, index) => (
                                <PeopleCard
                                    key={index}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    designation={item.designation}
                                    email={item.email}
                                />
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-black font-semibold '>Assistant Professors</h1>
                    <div className='flex gap-6 my-10 flex-wrap'>
                        {
                            assistantProfessors.map((item, index) => (
                                <PeopleCard
                                    key={index}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    designation={item.designation}
                                    email={item.email}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl text-black font-semibold '>Lecturers</h1>
                    <div className='flex gap-6 my-10 flex-wrap'>
                        {
                            lecturers.map((item, index) => (
                                <PeopleCard
                                    key={index}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    designation={item.designation}
                                    email={item.email}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Peoples;
