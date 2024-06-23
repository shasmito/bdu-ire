import { Link } from 'react-router-dom'
import logo1 from '../../assets/logo/logo1.png'

function Footer() {
  return (
    <div className='w-[80vw] mx-auto'>
      <div className='w-full flex flex-col md:flex-row justify-between py-10 gap-y-10'>
        <div className='w-full md:w-1/3 pr-20 flex flex-col gap-4'>
          <img src={logo1} className='w-1/2'></img>
          <p className='text-sm '>Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh is the first specialized government digital university in Bangladesh.</p>
        </div>

        <div className='w-full md:w-2/3 flex flex-row flex-wrap md:flex-row md:flex-nowrap  justify-between gap-y-10 md:gap-16'>
          <div className=' flex flex-col gap-4'>
            <h1 className='font-bold text-lg'>BDU</h1>
            <Link to="/" className='text-sm text-gray hover:text-primary'>Why BDU</Link>
            <Link className='text-sm text-gray hover:text-primary'>Programs</Link>
            <Link className='text-sm text-gray hover:text-primary'>Student Story</Link>
            <Link className='text-sm text-gray hover:text-primary'>Student Story</Link>
            <Link className='text-sm text-gray hover:text-primary'>Tuition & Fees</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-lg'>Resources</h1>
            <Link className='text-sm text-gray hover:text-primary'>Why BDU</Link>
            <Link className='text-sm text-gray hover:text-primary'>Programs</Link>
            <Link className='text-sm text-gray hover:text-primary'>Student Story</Link>
            <Link className='text-sm text-gray hover:text-primary'>Student Story</Link>
            <Link className='text-sm text-gray hover:text-primary'>Tuition &  Fees</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-lg'>Community</h1>
            <Link className='text-sm text-gray hover:text-primary'>Why BDU</Link>
            <Link className='text-sm text-gray hover:text-primary'>Programs</Link>
            <Link className='text-sm text-gray hover:text-primary'>Student Story</Link>
            <Link className='text-sm text-gray hover:text-primary'>Student Story</Link>
            <Link className='text-sm text-gray hover:text-primary'>Tuition &  Fees</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-sm md:text-lg'>Get in Touch with Us</h1>
            <div >
              <p className='text-gray'>
                Kaliakair, Gazipur, Bangladesh
                Flat: A-6, House: 2/3, Block:A,Iqbal
                Road, Mohammadpur, Dhaka</p>
            </div>
            <div >
              <p className='text-gray'>09666775534</p>
            </div>
            <div >
              <p className='text-gray'>info@bdu.ac.bd</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col  md:flex-row text-center md:justify-between text-sm'>
        <p>Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh  </p>
        <p> -   © 2023 All Rights Reserved</p>
        <p> Made with Mahir Mahbub and Pallab Sarkar</p>
      </div>
    </div>

  )
}

export default Footer