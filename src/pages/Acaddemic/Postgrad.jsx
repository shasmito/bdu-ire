import React from 'react'

const Postgrad = () => {
    const prerequisites = [
        'IRE 205: IoT Architecture and Technologies',
        'IRE 305: Robotics Dynamics and Kinematics',
        'IRE 307: System Engineering and Testing',
        'IRE 313: Sensor Technology',
        'IRE 317: Control System Engineering',
    ];

    const coreCourses = [
        'IRE 501: Systems Dynamics and Modelling',
        'IRE 502: Mechatronics System Design',
        'IRE 503: Natural Language Processing',
        'IRE 520: Microsystem Technology',
        'IRE 521: Sensor Based Systems and Design',
        'IRE 522: Multivariable Adaptive Control System',
        'IRE 523: Robot Manipulation and Mobility',
        'IRE 524: Robot Perception and Vision',
        'IRE 525: Physics of Living Systems',
        'IRE 560: Cognitive and Collaborative Robots',
        'IRE 561: Medical Robotics and Surgical Techniques',
        'IRE 564: Computational and Learning Social Robots',
        'IRE 565: Autonomous driving',
        'IRE 580: Brain Machine Interfaces',
        'IRE 581: Reinforcement Learning',
        'IRE 582: Optimal Control Theories and Applications',
        'IRE 583: Distributed Machine Learning',
        'IRE 584: Deep Reinforcement Learning',
        'IRE 585: Intelligent Networks for Machines',
        'IRE 586: Augmented and Virtual Reality',
        'IRE 587: Cognitive Neural Engineering',
    ];

    const degreeRequirements = [
        { degree: 'Master of Science (M.Sc.)', courses: 6, thesisCredits: 18, totalCredits: 36 },
        { degree: 'Master of Engineering (M.Eng.)', courses: 10, thesisCredits: 6, totalCredits: 36 },
        { degree: 'PhD in IoT and Robotics', courses: 3, thesisCredits: 45, totalCredits: 54 },
    ];

    return (
        <div className=" min-h-screen py-10 text-black">
            <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md">
                <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6">IoT and Robotics Courses</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
                    <ul className="list-disc list-inside">
                        {prerequisites.map((course, index) => (
                            <li key={index} className="mb-2">{course}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Core Courses</h2>
                    <ul className="list-disc list-inside">
                        {coreCourses.map((course, index) => (
                            <li key={index} className="mb-2">{course}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Degree Requirements</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-300 border border-gray-200 ">
                            <thead className="">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Courses</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thesis Credits</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Credits</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 ">
                                {degreeRequirements.map((degree, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4">{degree.degree}</td>
                                        <td className="px-6 py-4">{degree.courses}</td>
                                        <td className="px-6 py-4">{degree.thesisCredits}</td>
                                        <td className="px-6 py-4">{degree.totalCredits}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postgrad