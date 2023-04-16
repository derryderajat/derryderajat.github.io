import React from 'react';
import Image from 'next/image';
import Ben from '../../public/ben.jpeg';
import Banner from '../../public/banner.jpg';
function LeftCard() {
  return (
    <div className='border-t-2 border-l-2 border-b-2 border-card flex flex-col sm:mt-0 mt-32 w-[300px] sm:h-[450px] md:w-80 lg:w-[400px] rounded-tl-lg rounded-bl-lg sm:rounded-lg rounded-tr-lg sm:rounded-tr-lg bg-card'>
      {/* INSIDE CARD */}
      {/* Upper*/}

      <div className='relative  sm:h-1/3 h-[200px] '>
        {/* Banner */}
        <Image
          src={Banner}
          alt='Banner'
          className='h-full w-full object-cover rounded-tl-lg rounded-tr-lg sm:rounded-tr-lg '
        />

        {/* Profile */}
        <div className='absolute bottom-[-10px] transform left-1/2 -translate-x-1/2'>
          <div className=' bg-card border-2 border-gold h-[70px] w-[70px] rounded-full flex justify-center items-center'>
            <div className='bg-blue-500 h-16 w-16 border-2 border-gold rounded-full'>
              <Image
                src={Ben}
                alt='Profile Picture'
                width={72}
                height={72}
                className='h-full w-full object-cover object-center rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Below */}
      <div className='h-2/3 flex items-center flex-col mt-4'>
        <h1 className='text-black font-semibold'>Derry</h1>
        {/* Interest */}
        <div className='flex flex-col mt-4'>
          <div className='bg-interest1 h-6 md:w-[310px] sm:w-[250px] w-[250px] mb-2 flex justify-between items-center '>
            <h1 className='text-light font-semibold ml-2'>Web Developer</h1>
            <h2 className='text-light font-semibold mr-2'>9</h2>
          </div>
          <div className='bg-interest2 h-6 md:w-[310px] sm:w-[250px] w-[250px] mb-2 flex justify-between items-center '>
            <h1 className='text-light font-semibold ml-2'>Software QA</h1>
            <h2 className='text-light font-semibold mr-2'>8</h2>
          </div>
        </div>
        {/* Signature */}
        <div className='border-interest2 border-2 h-32 md:w-[310px] sm:w-[250px] w-[250px] text-base m-1'>
          <p className='ml-2 mt-2'>Signature</p>
        </div>
      </div>
    </div>
  );
}

export default LeftCard;
