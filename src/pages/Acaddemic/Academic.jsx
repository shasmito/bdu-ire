import React from 'react'
import { Outlet } from 'react-router-dom'

const Academic = () => {

    const lectureData = [
        {
            "Lecture": 1,
            "Lecture Topics": "Design Process and basic calculations (design calculations - report format precision and rounding of quantities).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO1"
        },
        {
            "Lecture": 2,
            "Lecture Topics": "Design Process and basic calculations (free-body diagrams, equations for linear and angular motion).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO1, CO2"
        },
        {
            "Lecture": 3,
            "Lecture Topics": "Friction Clutch Design (function, classification, friction materials).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO3"
        },
        {
            "Lecture": 4,
            "Lecture Topics": "Friction Clutch Design (plate clutch design - design parameters and equations).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO2"
        },
        {
            "Lecture": 5,
            "Lecture Topics": "Brake Design 1 (function, classification).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO2"
        },
        {
            "Lecture": 6,
            "Lecture Topics": "Brake Design 1 (band brake design - design parameters and equations).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO2, CO3"
        },
        {
            "Lecture": 7,
            "Lecture Topics": "Flat Belt Drives 1 (geometry and belt construction, design parameters and equations).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO2"
        },
        {
            "Lecture": 8,
            "Lecture Topics": "V Belt & Chain Drives (geometry and construction, nomenclature, design parameters and catalogue selection).",
            "Teaching Learning Strategy(-ies)": "Lectures, Tutorials, assignments",
            "Assessment Strategy (-ies)": "Written exams, Assignment; quiz; class test; Presentation",
            "Corresponding CO(s)": "CO2, CO3"
        }
    ]

    return (
        <div className='bg-white pb-10'>
            <div className='relative flex flex-col items-center justify-center h-full'>

                <div className='md:h-[60vh] w-[90vw] md:w-full flex items-center pt-[6%]  flex-col gap-4 md:gap-10 bg-light relative pb-6 md:pb-0' >
                    <h1 className="text-2xl md:text-4xl font-semibold text-black z-10 text-center">Curriculum for IoT and Robotics Engineering (IRE)                    </h1>
                    <p className="text-center z-10 md:w-[70vw]">
                    The Department of Internet of Things and Robotics Engineering (IRE) at Bangabandhu Sheikh Mujibur Rahman Digital University offers a comprehensive and dynamic curriculum designed to equip students with the knowledge and skills necessary to excel in the rapidly evolving fields of IoT and robotics. Our curriculum combines theoretical coursework, hands-on laboratory sessions, and real-world projects to provide a well-rounded educational experience
                    </p>
                    <img src='/assets/home/bg/wave.png' className='object-contain w-3/4 -left-36 absolute -bottom-36'/>
                </div>

                <div className='translate-y-0 md:-translate-y-40 bottom-0 w-[90%] md:w-[70%] shadow-md  bg-white flex flex-col gap-4 px-4 md:px-20 py-10 text-sm text-black rounded-md'>
                    <div className='flex flex-col items-center gap-4'>
                        <h1 className='text-2xl font-semibold text-black '>Objective</h1>
                        <p className='text-center'>"IRE is dedicated to developing technological expertise among students by equipping them with advanced knowledge in IoT and robotics. This includes fostering proficiency in programming, embedded systems, artificial intelligence, and control systems. Emphasizing hands-on learning, the curriculum integrates practical experience through laboratory sessions and real-world projects, encouraging innovation and problem-solving skills. The department prepares students for careers in rapidly evolving tech industries by providing exposure to industry standards, tools, and practices through internships and collaborations. Additionally, the IRE department promotes research and development by engaging students in cutting-edge projects and encouraging continuous learning to stay updated with the latest technological advancements.                         "         </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold text-black '>Outcome:</h1>
                        <ul className='text-left'>
                            <li>CO1: Use a systems approach to design problems;                            </li>
                            <li>CO2: Identify and analyze a number of sub-systems commonly used in mechanical design;                            </li>
                            <li>CO3: Design such sub-systems using both first principles and according to standard processes;
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-center gap-4'>
                        <h1 className='text-2xl font-semibold text-black '>Contents</h1>
                        <p className='text-center'>"The curriculum of the IRE department is designed to provide a comprehensive education in IoT and robotics engineering, encompassing core and specialized courses along with hands-on laboratory sessions."
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-[90%] md:w-[80vw] mb-10 mx-auto mt-10'>

                <div className="md:p-10 bg-white shadow-md mb-16 rounded-md">
                    <h2 className="text-2xl font-semibold mb-4 text-black pb-6">Course Outcomes:</h2>
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-black">
                        <thead>
                            <tr className=''>
                                <th className="px-4 py-2 border border-l-transparent border-t-transparent">#</th>
                                <th className="px-4 py-2 border border-t-transparent">CO Statement</th>
                                <th className="px-4 py-2 border border-t-transparent">Corresponding PO(s)</th>
                                <th className="px-4 py-2 border border-t-transparent">Domains and Taxonomy Level(s)</th>
                                <th className="px-4 py-2 border border-t-transparent">Delivery Method(s) and Activity(-ies)</th>
                                <th className="px-4 py-2 border border-t-transparent border-r-transparent">Assessment Tool(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td className="px-4 py-2  border border-l-transparent">1</td>
                                <td className="px-4 py-2 border ">CO1: Use a systems approach to design problems.</td>
                                <td className="px-4 py-2 border ">PO3</td>
                                <td className="px-4 py-2 border ">C5</td>
                                <td className="px-4 py-2 border ">Lectures, Tutorials, assignments, Discussions</td>
                                <td className="px-4 py-2 border border-r-transparent">Written exams, presentation; assignment</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-l-transparent">2</td>
                                <td className="px-4 py-2 border ">CO2: Identify and analyze a number of sub-systems commonly used in mechanical design.</td>
                                <td className="px-4 py-2 border ">PO1, PO2</td>
                                <td className="px-4 py-2 border ">C4</td>
                                <td className="px-4 py-2 border ">Lectures, Tutorials, assignments</td>
                                <td className="px-4 py-2 border border-r-transparent">Written exams, presentation; assignment</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-l-transparent">3</td>
                                <td className="px-4 py-2 border ">CO3: Design such sub-systems using both first principles and according to standard processes.</td>
                                <td className="px-4 py-2 border ">PO3</td>
                                <td className="px-4 py-2 border ">C3, C5</td>
                                <td className="px-4 py-2 border ">Lectures, Tutorials, assignments</td>
                                <td className="px-4 py-2 border border-r-transparent">Written exams, presentation; assignment</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="md:p-10 bg-white my-16 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-black pb-6">Mapping of Knowledge Profile, Complex Engineering Problem Solving and Complex Engineering Activities:</h2>
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-black">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border ">COs</th>
                                {Array.from({ length: 8 }, (_, i) => (
                                    <th key={i} className="px-4 py-2 border ">{`K${i + 1}`}</th>
                                ))}
                                {Array.from({ length: 7 }, (_, i) => (
                                    <th key={i + 8} className="px-4 py-2 border ">{`P${i + 1}`}</th>
                                ))}
                                {Array.from({ length: 5 }, (_, i) => (
                                    <th key={i + 15} className="px-4 py-2 border ">{`A${i + 1}`}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border ">CO-1</td>
                                {['', '', '', '✓', '', '', '', '', '', '', '✓', '', '', '', '', '', '✓', '', '', ''].map((mark, index) => (
                                    <td key={index} className="px-4 py-2 border  text-center">{mark}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border ">CO-2</td>
                                {['', '✓', '', '', '', '✓', '', '', '', '✓', '', '', '', '', '', '', '', '', '✓', ''].map((mark, index) => (
                                    <td key={index} className="px-4 py-2 border  text-center">{mark}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border ">CO-3</td>
                                {['', '', '', '', '', '', '', '', '✓', '', '', '', '', '', '', '', '✓', '', '', ''].map((mark, index) => (
                                    <td key={index} className="px-4 py-2 border  text-center">{mark}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="p-10 bg-white my-16 rounded-md shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-black pb-6">Lecture Plan:</h2>
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white  text-black">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border ">Lecture</th>
                                <th className="px-4 py-2 border ">Lecture Topics</th>
                                <th className="px-4 py-2 border ">Teaching Learning Strategy(-ies)</th>
                                <th className="px-4 py-2 border ">Assessment Strategy (-ies)</th>
                                <th className="px-4 py-2 border ">Corresponding CO(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lectureData.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border ">{item.Lecture}</td>
                                    <td className="px-4 py-2 border ">{item["Lecture Topics"]}</td>
                                    <td className="px-4 py-2 border ">{item["Teaching Learning Strategy(-ies)"]}</td>
                                    <td className="px-4 py-2 border ">{item["Assessment Strategy (-ies)"]}</td>
                                    <td className="px-4 py-2 border ">{item["Corresponding CO(s)"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className='shadow-md p-10 md:mx-16 text-black flex flex-col gap-6 rounded-md'>
                    <div className='flex flex-col items-center justify-end'>
                        <h1 className='text-2xl'>Text Book</h1>
                        <p>1.13.1 Shigley’s Mechanical Engineering Design (10th SI edition) by Budynas R.G. and Nisbett J.K., McGraw Hill, 2014</p>
                    </div>
                    <div className='flex flex-col items-center justify-end'>
                        <h1 className='text-2xl'>Reference Book:</h1>
                        <p>1.14.1 Wickert, J. (2015), An Introduction to Mechanical Engineering, Thomson </p>
                        <p>1.14.2 Litchfield D.R. Technical Drawing Handbook</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Academic