import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const researchAreas = [
    {
        title: 'Smart Vehicle Accident Prevention and Road Safety System with Real Time Data Acquisition in International Journal of Engineering and Manufacturing (IJEM); Publisher: MECS ,Volume 14 , Issue 3,2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-blue-500',
        link: 'https://www.mecs-press.org/ijem/ijem-v14-n3/v14n3-2.html'
    },
    {
        title: 'A review of 2.45 GHz microstrip patch antennas for wireless applications in International Journal of Advances in Applied Sciences (IJAAS) ,Volume 13 , Issue 2,2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-orange-500',
        link: 'https://www.researchgate.net/publication/379600261_A_review_of_245_GHz_microstrip_patch_antennas_for_wireless_applications'
    },
    {
        title: 'A Machine Learning Approach for Emotion Classification in Bengali Speech.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://thesai.org/Downloads/Volume14No10/Paper_93-A_Machine_Learning_Approach_for_Emotion_Classific'
    },
    {
        title: 'Prediction of Breast Cancer using Traditional and Ensemble Technique: A Machine Learning Approach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://thesai.org/Publications/ViewPaper?Volume=14&Issue=6&Code=IJACSA&SerialNo=92'
    },
    {
        title: 'A fine tune robust transfer learning based approach for brain tumor detection using VGG-16',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-blue-500',
        link: 'https://beei.org/index.php/EEI/article/view/5646'
    },
    {
        title: 'Algorithmic Approach to Minimize the Transportation Cost by Double Average Method in 20th International Mathematics Conference, 2017',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://www.researchgate.net/publication/360073728_Algorithmic_Approach_to_Minimize_the_Transportation_Cost_by_Double_Average_Method'
    },
    {
        title: 'Mutual Information based feature selection for nurse care activity recognition in 2020 Joint 9th International Conference on Informatics, Electronics & Vision (ICIEV)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://ieeexplore.ieee.org/abstract/document/9306645'
    },
    {
        title: 'Nurse care activity recognition: a GRU-based approach with attention mechanism in Adjunct Proceedings of the 2019 ACM International Joint Conference on Pervasive and Ubiquitous Computing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://dl.acm.org/doi/abs/10.1145/3341162.3344848'
    },
    {
        title: 'A Comparative Study of Different Embedding Methods for Context-based Bengali Next Word Prediction in Dhaka University Journal of Applied Science and Engineering ,Volume 7 , Issue 2,2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://www.banglajol.info/index.php/DUJASE/article/view/65088'
    },
    {
        title: 'A Segmentation and Labeling Tool for Constructing a Dataset for Bangla Optical Character Recognition in Jagannath University Journal of Science ,Volume 9 , Issue 1,2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://www.researchgate.net/publication/373489506_A_Segmentation_and_Labeling_Tool_for_Constructing_a_Dataset_for_Bangla_Optical_Character_Recognition'
    },
    {
        title: 'A Novel Method for Diagnosing Alzheimer’s Disease from MRI Scans using the ResNet50 Feature Extractor and the SVM Classifier in International Journal of Advanced Computer Science and Applications(IJACSA) ,Volume 14 , Issue 4,2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://thesai.org/Publications/ViewPaper?Volume=14&Issue=6&Code=IJACSA&SerialNo=131'
    },
    {
        title: 'Prediction of Death Counts Based on Short-term Mortality Fluctuations Data Series using Multi-output Regression Models in International Journal of Advanced Computer Science and Applications ,Volume 14 , Issue 5,2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://thesai.org/Publications/ViewPaper?Volume=14&Issue=5&Code=IJACSA&SerialNo=120'
    },
    {
        title: 'Iot based low-cost posture and bluetooth controlled robot for disabled and virus affected people in International Journal of Advanced Computer Science and Applications ,Volume 13 , Issue 8,2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://thesai.org/Publications/ViewPaper?Volume=13&Issue=8&Code=IJACSA&SerialNo=79'
    },
    {
        title: 'Clinically Adaptable Machine Learning Model To Identify Early Appreciable Features of Diabetes In Bangladesh in Intelligent Medicine ,2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://www.sciencedirect.com/science/article/pii/S2667102623000049'
    },
    {
        title: 'Prediction of Heart Disease Using Multi-Layer Perceptron Neural Network and Support Vector Machine in 4th International Conference on Electrical Information and Communication Technology (EICT), 2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://ieeexplore.ieee.org/document/9068755'
    },
    {
        title: 'A Review on Parkinson’s Disease Detection Methods: Traditional Machine Learning Models vs. Deep Learning Models in European Journal of Information Technologies and Computer Science ,Volume 2 , Issue 3,2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/assets/home/icon1.png',
        bgColor: 'bg-green-500',
        link: 'https://www.ej-compute.org/index.php/compute/article/view/67'
    }
];

const Research = () => {
    const [researchPosts, setResearchPosts] = useState([]);
    useEffect(() => {
        const fetchResearchPosts = async () => {
            try {
                const response = await axios.get('https://bdu-swe-dept.vercel.app/all-research');
                setResearchPosts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching research posts:', error);
            }
        };
        fetchResearchPosts()
    }, [])

    console.log(researchPosts)
    return (
        <div>
            <div className="flex items-center justify-center py-10 md:py-16 bg-blue-600 text-white relative overflow-hidden min-h-[40vh]">
                <img src='/assets/home/bg/wave.png' className='object-contain  absolute  w-3/4 opacity-50' />

                <div className="absolute inset-0 bg-blue-700 opacity-50 z-0"></div>
                <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                    <h1 className="text-2xl md:text-4xl font-semibold text-white z-10">Research and Publication Areas                </h1>
                    <p className="text-sm md:text-base text-center px-6 z-10 md:w-[70vw]">
                        The Department of Internet of Things and Robotics Engineering (IRE) at Bangabandhu Sheikh Mujibur Rahman Digital University is committed to advancing research and fostering innovation in various domains of IoT and robotics. Our faculty and students actively engage in cutting-edge research projects and contribute to the body of knowledge through publications in reputed journals and conferences.

                    </p>
                </div>
            </div>

            <div className="w-[90%] md:w-[80vw] mb-10 mx-auto  px-4 py-16">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-black pb-10 text-center">The Department of IoT and Robotics Engineering (IRE) facilitates environments for the following research and publication areas:                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                    {researchPosts.map((area, index) => (
                        <Link to={area.description} target='_blank' key={index} className="flex items-start p-4 bg-white shadow rounded-lg text-black">

                            <img src="/assets/home/icon1.png" alt={`${area.title} icon`} className="w-10 h-10 md:w-12 md:h-12" />

                            <div className="ml-4">
                                <h3 className="md:text-lg ">{area.title}</h3>
                                {/* <p className="mt-2 text-gray-600">{area.description}</p> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Research