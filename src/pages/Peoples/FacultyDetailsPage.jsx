import React from 'react';
import { useParams } from 'react-router-dom';

const facultyData = [
  {
    id: 1,
    image: '/assets/all/15.jpg',
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
  {
    id: 2,
    image: '/assets/all/16.jpg',
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
  {
    id: 3,
    image: '/assets/all/17.jpg',
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
    journalPublications: [
      { title: 'A Segmentation and Labeling Tool for Constructing a Dataset for Bangla Optical Character Recognition', publication: 'Jagannath University Journal of Science', volume: '9', issue: '1', year: '2022', link: '#' },
      { title: 'A Comparative Study of Different Embedding Methods for Context-based Bengali Next Word Prediction', publication: 'Dhaka University Journal of Applied Science and Engineering', volume: '7', issue: '2', year: '2022', link: '#' },
    ],
    conferencePublications: [
      { title: 'Nurse care activity recognition: a GRU-based approach with attention mechanism', publication: 'Adjunct Proceedings of the 2019 ACM International Joint Conference on Pervasive and Ubiquitous Computing', year: '2019', link: '#' },
      { title: 'Mutual Information based feature selection for nurse care activity recognition', publication: '2020 Joint 9th International Conference on Informatics, Electronics & Vision (ICIEV) and 2020 4th International Conference on Imaging, Vision & Pattern Recognition (icIVPR)', year: '2020', link: '#' },
    ],
    conferencePapers: [
      { title: 'Algorithmic Approach to Minimize the Transportation Cost by Double Average Method', publication: '20th International Mathematics Conference', year: '2017', link: '#' },
    ],
  },
];

const FacultyDetailsPage = () => {
  const { id } = useParams();
  const faculty = facultyData.find(faculty => faculty.id === parseInt(id));

  if (!faculty) {
    return <div>Faculty not found</div>;
  }

  return (
    <div className="mb-10 mx-auto bg-white">
      <div className='relative flex flex-col items-center justify-center h-full mt-10'>
        <div className='md:h-[50vh] w-full flex items-center pt-[3%] flex-col gap-4 bg-light relative'>
          <h1 className="text-2xl md:text-4xl font-semibold text-black z-10">Faculty Details</h1>
          <p className="text-center z-10 md:w-[70vw]">
          Hi! Have a good day! This is Samsuddin, a passionate learner and enthusiastic researcher. Currently, I am working as an Assistant Professor in the Department of Information and Communication Technology (ICT) at Bangabandhu Sheikh Mujibur Rahman Digital University (BDU), Gazipur, Bangladesh.

          </p>
          <img src='/assets/home/bg/wave.png' className='object-contain w-3/4 -left-36 absolute -bottom-36' />
        </div>

        <div className='md:-translate-y-40 bottom-0 w-[90vw] md:w-[70%] shadow-md bg-white grid grid-cols-1 md:grid-cols-2 text-black rounded-md'>
          <img src={faculty.image} className='w-full' />
          <div className='bg-[#544E5D] p-10 text-white md:pt-24 rounded-md'>
            <div>
              <h2 className="text-2xl font-semibold">{faculty.name}</h2>
              <p className="text-lg">{faculty.designation}</p>
              <p>Email: {faculty.email}</p>
              <p>Telephone: {faculty.telephone}</p>
              <p>Website: <a href={faculty.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{faculty.website}</a></p>
              <p>Research: {faculty.researchInterest}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[86%] md:w-[80vw] mb-10 mx-auto pb-16 text-black'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>{faculty.contact}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Research Area</h3>
            <p>{faculty.researchInterest}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Research Interest</h3>
            <p>{faculty.researchInterest}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Academic Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faculty.academicBackground.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
          ))}
        </div>

        {faculty.journalPublications && (
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-8">Journal Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faculty.journalPublications.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.publication}, Volume {item.volume}, Issue {item.issue}, {item.year}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">[Paper Link]</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {faculty.conferencePublications && (
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-8">Conference Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faculty.conferencePublications.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.publication}, {item.year}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">[Paper Link]</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {faculty.conferencePapers && (
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-8">Conference Papers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faculty.conferencePapers.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.publication}, {item.year}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">[Paper Link]</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyDetailsPage;
