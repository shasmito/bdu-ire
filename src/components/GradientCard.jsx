import { Link, useNavigate } from 'react-router-dom'

function GradientCard({ item}) {
    const navigate = useNavigate();

    const handleNavigate = (item) => {
      navigate('/details', { state: { item } });
    };
  
    return (
        <div onClick={() => handleNavigate(item)}  className='h-72 md:w-1/3 relative rounded-xl overflow-hidden'>
            <img src={ item.image} className='w-full h-full object-cover opacity-70 rounded-xl' />
            <div className='p-5 flex flex-col gap-2 md:gap-3 justify-center bg-gradient-to-b from-transparent to-[#0B108A] absolute bottom-0  md:top-1/2 '>

                <h2 className='text-xl font-semibold text-[#06040A]'>{ item.title}</h2>
                <p className='text-white text-sm'>{ item.description.slice(0,130)+"..."}</p>

            </div>
        </div >

    )
}

export default GradientCard