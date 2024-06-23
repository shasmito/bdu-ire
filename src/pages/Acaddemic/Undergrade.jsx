import React from 'react'

const Undergrade = () => {

  const levelTermData = {
    'Level 1': {
      'Term 1': [
        { courseNumber: 'PROG 101', courseTitle: 'Structured Programming Language + Sessional' },
        { courseNumber: 'IRE 103', courseTitle: 'Electrical Circuits and Devices' },
        { courseNumber: 'IRE 105', courseTitle: 'Electronics Devices and Applications + Sessional' },
        { courseNumber: 'DS 107', courseTitle: 'Probability and Statistics' },
        { courseNumber: 'HIS 109', courseTitle: 'History of the Emergence of Independent Bangladesh' },
      ],
      'Term 2': [
        { courseNumber: 'PROG 111', courseTitle: 'Object Oriented Programming Language + Sessional' },
        { courseNumber: 'CSE 113', courseTitle: 'Data Structure and Algorithms + Sessional' },
        { courseNumber: 'CSE 115', courseTitle: 'Discrete Mathematics and Graph Theory' },
        { courseNumber: 'SEC 105', courseTitle: 'Basic Principles of Cyber Security' },
        { courseNumber: 'IRE 117', courseTitle: 'Engineering Mechanics and Materials' },
        { courseNumber: 'IRE 118', courseTitle: 'Engineering Drawing' },
      ],
    },
    'Level 2': {
      'Term 1': [
        { courseNumber: 'CSE 201', courseTitle: 'Database Management System + Sessional' },
        { courseNumber: 'IRE 203', courseTitle: 'Introduction to IoT and Robotics' },
        { courseNumber: 'IRE 205', courseTitle: 'Microprocessor and microcontroller System Design + Sessional' },
        { courseNumber: 'NEM 481', courseTitle: 'Computer Networking + Sessional' },
        { courseNumber: 'MATH 209', courseTitle: 'Engineering Mathematics' },
      ],
      'Term 2': [
        { courseNumber: 'IRE 211', courseTitle: 'IoT Architecture and Technologies + Sessional' },
        { courseNumber: 'PROG 301', courseTitle: 'Advanced Programming with Python and Scripting + Sessional' },
        { courseNumber: 'IRE 215', courseTitle: 'Sensor Technology + Sessional' },
        { courseNumber: 'MATH 217', courseTitle: 'Advanced Mathematics' },
        { courseNumber: 'CSE 219', courseTitle: 'Industrial Revolutions and Emerging Technologies' },
      ],
    },
    'Level 3': {
      'Term 1': [
        { courseNumber: 'IRE 300', courseTitle: 'Capstone Project' },
        { courseNumber: 'CSE 203', courseTitle: 'Operating System and Unix Programming + Sessional' },
        { courseNumber: 'IRE 303', courseTitle: 'Signals and Systems' },
        { courseNumber: 'IRE 305', courseTitle: 'Robotics Dynamics and Kinematics' },
        { courseNumber: 'IRE 307', courseTitle: 'System Design, Engineering, and Testing' },
      ],
      'Term 2': [
        { courseNumber: 'IRE 300', courseTitle: 'Capstone Project' },
        { courseNumber: 'CC 483', courseTitle: 'Cloud Computing + Sessional' },
        { courseNumber: 'IRE 313', courseTitle: 'Modelling and Simulation of Robotic System + Sessional' },
        { courseNumber: 'IRE 315', courseTitle: 'Embedded Systems + Sessional' },
        { courseNumber: 'IRE 317', courseTitle: 'Control System Engineering' },
      ],
    },
    'Level 4': {
      'Term 1': [
        { courseNumber: 'IRE 400', courseTitle: 'Undergraduate Thesis' },
        { courseNumber: 'IRE 403', courseTitle: 'Computer Graphics and Animation + Sessional' },
        { courseNumber: 'AI 483', courseTitle: 'Artificial Intelligence and Machine Learning + Sessional' },
        { courseNumber: 'Optional', courseTitle: '+ Sessional' },
        { courseNumber: 'ENG 407', courseTitle: 'Technical and Academic Writing + Sessional' },
      ],
      'Term 2': [
        { courseNumber: 'IRE 400', courseTitle: 'Undergraduate Thesis' },
        { courseNumber: 'IRE 413', courseTitle: 'Human Machine Interaction + Sessional' },
        { courseNumber: 'IRE 415', courseTitle: 'Computer Vision + Sessional' },
        { courseNumber: 'CYB 485', courseTitle: 'Cybernetics' },
        { courseNumber: 'Optional', courseTitle: '+ Sessional' },
      ],
    },
  };

  const data = {
    'Level-1': {
      'Term-1': [
        { courseNumber: 'PROG 101', courseTitle: 'Structured Programming Language', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'PROG 102', courseTitle: 'Structured Programming Language Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'IRE 103', courseTitle: 'Electrical Circuits and Devices', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'IRE 105', courseTitle: 'Electronics Devices and Applications', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'IRE 106', courseTitle: 'Electronics Devices and Applications Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'DS 107', courseTitle: 'Probability and Statistics', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'HIS 109', courseTitle: 'History of the Emergence of Independent Bangladesh', contactHours: '2 - 2', credit: 3, prerequisite: '' },
      ],
      'Term-2': [
        { courseNumber: 'PROG 111', courseTitle: 'Object Oriented Programming Language', contactHours: '2 - 2', credit: 3, prerequisite: 'PROG 101' },
        { courseNumber: 'PROG 112', courseTitle: 'Object Oriented Programming Language Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'CSE 113', courseTitle: 'Data Structure and Algorithms', contactHours: '2 - 2', credit: 3, prerequisite: 'PROG 101' },
        { courseNumber: 'CSE 114', courseTitle: 'Data Structure and Algorithms Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'CSE 115', courseTitle: 'Discrete Mathematics and Graph Theory', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'SEC 105', courseTitle: 'Basic Principles of Cyber Security', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'IRE 117', courseTitle: 'Engineering Mechanics and Materials', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'IRE 118', courseTitle: 'Engineering Drawing', contactHours: '0-2', credit: 1, prerequisite: '' },
      ],
    },
    'Level-2': {
      'Term-1': [
        { courseNumber: 'CSE 201', courseTitle: 'Database Management System', contactHours: '2 - 2', credit: 3, prerequisite: 'PROG 111' },
        { courseNumber: 'CSE 202', courseTitle: 'Database Management System Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'IRE 203', courseTitle: 'Introduction to IoT and Robotics', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'IRE 205', courseTitle: 'Microprocessor and microcontroller System Design', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'IRE 206', courseTitle: 'Microprocessor and microcontroller System Design Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'NEM 481', courseTitle: 'Computer Networking', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'NEM 482', courseTitle: 'Computer Networking Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'MATH 209', courseTitle: 'Engineering Mathematics', contactHours: '2 - 2', credit: 3, prerequisite: '' },
      ],
      'Term-2': [
        { courseNumber: 'IRE 211', courseTitle: 'IoT Architecture and Technologies', contactHours: '2 - 2', credit: 3, prerequisite: 'IRE 203' },
        { courseNumber: 'IRE 212', courseTitle: 'IoT Architecture and Technologies Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'PROG 301', courseTitle: 'Advanced Programming with Python and Scripting', contactHours: '2 - 2', credit: 3, prerequisite: 'PROG 111' },
        { courseNumber: 'PROG 302', courseTitle: 'Advanced Programming with Python and Scripting Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'IRE 215', courseTitle: 'Sensor Technology', contactHours: '2 - 2', credit: 3, prerequisite: '' },
        { courseNumber: 'IRE 216', courseTitle: 'Sensor Technology Sessional', contactHours: '0 - 2', credit: 1, prerequisite: '' },
        { courseNumber: 'Math 217', courseTitle: 'Advanced Mathematics', contactHours: '2 - 2', credit: 3, prerequisite: 'MATH 209' },
        { courseNumber: 'CSE 219', courseTitle: 'Industrial Revolutions and Emerging Technologies', contactHours: '2 - 2', credit: 3, prerequisite: '' },
      ],
    },
  };

  const commonCourses = {
    Mathematics: [
      { courseNumber: 'DS 107', courseTitle: 'Probability and Statistics', credits: 3 },
      { courseNumber: 'CSE 115', courseTitle: 'Discrete Mathematics and Graph Theory', credits: 3 },
      { courseNumber: 'MATH 209', courseTitle: 'Engineering Mathematics', credits: 3 },
      { courseNumber: 'MATH 217', courseTitle: 'Advanced Mathematics', credits: 3 },
    ],
    Programming: [
      { courseNumber: 'PROG 101, 102', courseTitle: 'Structured Programming Language + Sessional', credits: 4 },
      { courseNumber: 'PROG 111, 112', courseTitle: 'Object Oriented Programming Language + Sessional', credits: 4 },
      { courseNumber: 'CSE 113, 114', courseTitle: 'Data Structure and Algorithms + Sessional', credits: 4 },
      { courseNumber: 'CSE 201, 202', courseTitle: 'Database Management System + Sessional', credits: 4 },
      { courseNumber: 'PROG 301, 302', courseTitle: 'Advanced Programming with Python and Scripting + Sessional', credits: 4 },
    ],
    OtherCourses: [
      { courseNumber: 'SEC 105', courseTitle: 'Basic Principles of Cyber Security', credits: 3 },
      { courseNumber: 'HIS 109', courseTitle: 'History of the Emergence of Independent Bangladesh', credits: 3 },
      { courseNumber: 'CSE 203, 204', courseTitle: 'Operating System and Unix Programming + Sessional', credits: 4 },
      { courseNumber: 'CSE 219', courseTitle: 'Industrial Revolutions and Emerging Technologies', credits: 3 },
      { courseNumber: 'NEM 481, 482', courseTitle: 'Computer Networking + Sessional', credits: 4 },
      { courseNumber: 'CC 483, 484', courseTitle: 'Cloud Computing + Sessional', credits: 4 },
      { courseNumber: 'ENG 407, 408', courseTitle: 'Technical and Academic Writing + Sessional', credits: 4 },
    ],
  };

  const specialCourses = {
    'IoT and Robotics Engineering Special Courses': [
      { courseNumber: 'IRE 103', courseTitle: 'Electrical Circuits and Devices', credits: 3 },
      { courseNumber: 'IRE 105, 106', courseTitle: 'Electronics Devices and Applications + Sessional', credits: 4 },
      { courseNumber: 'IRE 117', courseTitle: 'Engineering Mechanics and Materials', credits: 3 },
      { courseNumber: 'IRE 118', courseTitle: 'Engineering Drawing Sessional', credits: 1 },
      { courseNumber: 'IRE 203', courseTitle: 'Introduction to IoT and Robotics', credits: 3 },
      { courseNumber: 'IRE 205, 206', courseTitle: 'Microprocessor and microcontroller System Design + Sessional', credits: 4 },
      { courseNumber: 'IRE 211, 212', courseTitle: 'IoT Architecture and Technologies + Sessional', credits: 4 },
      { courseNumber: 'IRE 215, 216', courseTitle: 'Sensor Technology + Sessional', credits: 4 },
      { courseNumber: 'IRE 303', courseTitle: 'Signals and Systems', credits: 3 },
      { courseNumber: 'IRE 305', courseTitle: 'Robotics Dynamics and Kinematics', credits: 3 },
      { courseNumber: 'IRE 307, 308', courseTitle: 'System Design, Engineering and Testing + Sessional', credits: 4 },
      { courseNumber: 'IRE 313, 314', courseTitle: 'Modeling and Simulation of Robotic System + Sessional', credits: 4 },
      { courseNumber: 'IRE 315, 316', courseTitle: 'Embedded Systems + Sessional', credits: 4 },
      { courseNumber: 'IRE 317', courseTitle: 'Control System Engineering', credits: 3 },
      { courseNumber: 'IRE 403, 404', courseTitle: 'Computer Graphics and Animation + Sessional', credits: 4 },
      { courseNumber: 'AI 483, 484', courseTitle: 'Artificial Intelligence and Machine Learning + Sessional', credits: 4 },
      { courseNumber: 'IRE 413, 414', courseTitle: 'Human Machine Interaction + Sessional', credits: 4 },
      { courseNumber: 'IRE 415, 416', courseTitle: 'Computer Vision + Sessional', credits: 4 },
      { courseNumber: 'CYB 485', courseTitle: 'Cybernetics', credits: 3 },
      { courseNumber: 'Option + Sessional', courseTitle: '', credits: 1 },
      { courseNumber: 'Option + Sessional', courseTitle: '', credits: 1 },
    ],
    'IoT and Robotics Engineering Optional Courses': [
      { courseNumber: 'IRE 451, 452', courseTitle: 'Industrial Robots + Sessional', credits: 4 },
      { courseNumber: 'IRE 455, 456', courseTitle: 'Industrial IoT and Automation + Sessional', credits: 4 },
      { courseNumber: 'IRE 459, 460', courseTitle: 'Mobile Platform for IoT Devices + Sessional', credits: 4 },
      { courseNumber: 'IRE 461, 462', courseTitle: 'Programming for Embedded Systems + Sessional', credits: 4 },
      { courseNumber: 'IRE 465, 466', courseTitle: 'Digital Signal Processing + Sessional', credits: 4 },
      { courseNumber: 'DS 483, 484', courseTitle: 'Data Science + Sessional', credits: 4 },
      { courseNumber: 'DS 313, 314', courseTitle: 'Big Data Acquisition and Analytics + Sessional', credits: 4 },
      { courseNumber: 'IRE 467, 468', courseTitle: 'Advanced Robotic Systems + Sessional', credits: 4 },
      { courseNumber: 'IRE 469, 470', courseTitle: 'IoT and Robotic Security and Privacy + Sessional', credits: 4 },
    ],
  };

  const totalCommonCredits = commonCourses.Mathematics.reduce((total, course) => total + course.credits, 0)
    + commonCourses.Programming.reduce((total, course) => total + course.credits, 0)
    + commonCourses.OtherCourses.reduce((total, course) => total + course.credits, 0);

  const totalSpecialCredits = specialCourses['IoT and Robotics Engineering Special Courses'].reduce((total, course) => total + course.credits, 0)
    + specialCourses['IoT and Robotics Engineering Optional Courses'].reduce((total, course) => total + course.credits, 0);

  const totalCredits = totalCommonCredits + totalSpecialCredits;

  return (
    <div>
      <div className=''>
        <div className='pt-10 bg-light relative text-black' >
          <h1 className='text-2xl md:text-4xl font-semibold text-center pb-5'>Undergraduates Studies</h1>

          <p className='text-center pb-10'>Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh</p>
          <img src='/assets/undergrad/hero.png' alt='' className='w-full z-10'></img>
        </div>


        <div className='w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-20 flex flex-col gap-10 rounded-xl shadow-md -translate-y-10 md:-translate-y-1/2 text-black'>
          <h1 className='text-3xl text-center'>Internet of Things and Robotics Engineering (IRE)          </h1>
          <p>The Bachelor of Science in IoT and Robotics Engineering program is a comprehensive four-level curriculum designed to equip students with the knowledge and skills needed to excel in the rapidly evolving fields of Internet of Things and robotics.  The program starts with a solid foundation in programming, mathematics, data structures, and computer systems, followed by specialized courses that delve into the core concepts of IoT and robotics. Students will gain expertise in electrical circuits, electronics, microcontrollers, sensor technology, robotics dynamics and kinematics, embedded systems, control systems, computer graphics, artificial intelligence, human-machine interaction, and computer vision. The curriculum is further enriched with optional courses, allowing students to tailor their learning to specific interests within the broader field. The program culminates in a capstone project and undergraduate thesis, providing students with hands-on experience and the opportunity to apply their knowledge to real-world challenges.
          </p>
          <p>In addition to the academic curriculum, the program emphasizes soft skills development to enhance students' overall employability. While not mandatory for graduation, students are encouraged to participate in industrial and professional training through audit courses. The program's well-structured and comprehensive approach ensures that graduates are well-prepared for successful careers in the exciting and innovative world of IoT and robotics engineering.
          </p>
        </div>

      </div>

      {/* Courses */}
      <div className="w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-10 flex flex-col gap-10 rounded-xl shadow-md text-black -translate-y-10">
        <h2 className="text-2xl font-semibold">Common Courses for B.Sc. Programs of the University</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Course Number</th>
                <th className="px-4 py-2 border">Course Title</th>
                <th className="px-4 py-2 border">Credits</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(commonCourses).map((category, categoryIndex) => (
                commonCourses[category].map((course, courseIndex) => (
                  <tr key={`${categoryIndex}-${courseIndex}`}>
                    {courseIndex === 0 && (
                      <td rowSpan={commonCourses[category].length} className="px-4 py-2 border">{category}</td>
                    )}
                    <td className="px-4 py-2 border">{course.courseNumber}</td>
                    <td className="px-4 py-2 border">{course.courseTitle}</td>
                    <td className="px-4 py-2 border">{course.credits}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right">
          <p className="font-semibold">Total Common Credits: {totalCommonCredits}</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10">IoT and Robotics Engineering Special Courses</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Course Number</th>
                <th className="px-4 py-2 border">Course Title</th>
                <th className="px-4 py-2 border">Credits</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(specialCourses).map((category, categoryIndex) => (
                specialCourses[category].map((course, courseIndex) => (
                  <tr key={`${categoryIndex}-${courseIndex}`}>
                    {courseIndex === 0 && (
                      <td rowSpan={specialCourses[category].length} className="px-4 py-2 border">{category}</td>
                    )}
                    <td className="px-4 py-2 border">{course.courseNumber}</td>
                    <td className="px-4 py-2 border">{course.courseTitle}</td>
                    <td className="px-4 py-2 border">{course.credits}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right">
          <p className="font-semibold">Total Special Credits: {totalSpecialCredits}</p>
        </div>
      </div>


      <div className="w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-10 flex flex-col gap-10 rounded-xl shadow-md text-black -translate-y-10 my-16">
        <p className="font-semibold">Level and Term-wise Course Distribution</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Term</th>
                <th className="px-4 py-2 border">Level 1</th>
                <th className="px-4 py-2 border">Level 2</th>
                <th className="px-4 py-2 border">Level 3</th>
                <th className="px-4 py-2 border">Level 4</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(levelTermData['Level 1']).map((term, termIndex) => (
                <tr key={termIndex}>
                  <td className="px-4 py-2 border">{term}</td>
                  {Object.keys(levelTermData).map((level, levelIndex) => (
                    <td key={levelIndex} className="px-4 py-2 border">
                      <ul>
                        {levelTermData[level][term].map((course, courseIndex) => (
                          <li key={courseIndex}>
                            {course.courseNumber}: {course.courseTitle}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-10 flex flex-col gap-10 rounded-xl shadow-md text-black -translate-y-10">

        {Object.keys(data).map(level => (
          <div key={level}>
            <h2 className="text-2xl font-bold mb-4">{level}</h2>
            {Object.keys(data[level]).map(term => (
              <div key={term} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{term}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">Course Number</th>
                        <th className="px-4 py-2 border">Course Title</th>
                        <th className="px-4 py-2 border">Contact Hours</th>
                        <th className="px-4 py-2 border">Credit</th>
                        <th className="px-4 py-2 border">Pre-requisite</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data[level][term].map((course, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="px-4 py-2 border">{course.courseNumber}</td>
                          <td className="px-4 py-2 border">{course.courseTitle}</td>
                          <td className="px-4 py-2 border">{course.contactHours}</td>
                          <td className="px-4 py-2 border">{course.credit}</td>
                          <td className="px-4 py-2 border">{course.prerequisite}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="2" className="px-4 py-2 border font-bold text-right">Total</td>
                        <td className="px-4 py-2 border">{data[level][term].reduce((total, course) => {
                          const [min, max] = course.contactHours.split(' - ').map(Number);
                          return [total[0] + min, total[1] + max];
                        }, [0, 0]).join(' - ')}</td>
                        <td className="px-4 py-2 border">{data[level][term].reduce((total, course) => total + course.credit, 0)}</td>
                        <td className="px-4 py-2 border"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>


    </div>
  );
};

export default Undergrade