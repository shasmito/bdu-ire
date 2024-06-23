import { IoMdArrowDropright } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const PeopleCard = ({ id, image, name, designation, email }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/faculty-details/${id}`);
    };

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 md:w-[38vw] rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={handleNavigate}
        >
            <div className='flex items-center justify-center w-full h-full overflow-hidden'>
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="bg-[#544E5D] p-6 text-white flex flex-col rounded-md">
                <div>
                    <h1 className="text-xl font-semibold text-white pb-4">{name}</h1>
                    <p className="text-lg">{designation}</p>
                    <p className="text-sm">Email: {email}</p>
                </div>
                <div className="flex items-center mt-10 bg-[#F2F2F2] bg-opacity-10 p-2 rounded-md ">
                    <span className="text-sm">Continue Reading</span>
                    <IoMdArrowDropright size={24} className="ml-2" />
                </div>
            </div>
        </div>
    );
};

export default PeopleCard;
