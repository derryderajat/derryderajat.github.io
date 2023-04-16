import { Inter } from 'next/font/google';
import LeftCard from '../../components/LeftCard';
import Head from 'next/head';

import { useState, useCallback } from 'react';
import RightCard from '../../components/RightCard';
import arrowLeft from '../../public/arrowLeft.svg';
import arrowRight from '../../public/arrowRight.svg';
import Certificates from '../../components/Certificates';
import MainPage from '../../components/MainPage.js';
import { motion } from 'framer-motion';
import Image from 'next/image';
import linkedIcon from '../../public/linkedinIcon.svg';
import githubIcon from '../../public/github.svg';
import projectIcon from '../../public/project.svg';
import JsIcon from '../../public/js.png';
import certificateIMG from '../../public/certificate.jpg';
import ImageViewer from 'react-simple-image-viewer';
import Ben from '../../public/ben.jpeg';
import Banner from '../../public/banner.jpg';
import Link from 'next/link';
import { Tooltip, Button } from '@material-tailwind/react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = [
    'https://i.ibb.co/8K3pxrR/dbiz-nexus.png',
    'https://i.ibb.co/MVJFJGh/figma.png',
    'https://i.ibb.co/8PxQXvk/python-ds-untuk-pemula.png',
    'https://i.ibb.co/KqgfrVK/ml.png',
    'https://i.ibb.co/HY37z4n/1631491994909.jpg',
  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const Data = {
    nama: 'Derry Derajat',
    image_profile: 'https://i.ibb.co/Qr3KZfn/image.png',
    interests: [
      {
        name: 'Web Developer',
        level: 9,
      },
      {
        name: 'Software QA',
        level: 9,
      },
    ],
    signature: 'Person who love to explore for web dev and QA',
    social_media: [
      {
        name: 'Linkedin',
        img_link: '../public/linkedinIcon.svg',
        url: 'https://www.linkedin.com/in/derryderajat/',
      },
      {
        name: 'Github',
        img_link: './public/github.svg',
        url: 'https://github.com/derryderajat',
      },
    ],
    projects: [
      {
        name: 'Company Profile PT. UPT PLN Cilegon',
        url: 'https://plnuptcilegon.vercel.app/',
        img_link: 'https://i.ibb.co/djr8Sf3/company-Prof.png',
      },
      {
        name: 'Cimporong PT. UPT PLN Cilegon',
        url: 'https://cimporong.vercel.app/',
        img_link: 'https://i.ibb.co/DwNKBc3/cimporong.png',
      },
      {
        name: 'Pollingin Aja',
        url: 'https://play.google.com/store/apps/details?id=com.votingapp.pollinginaja',
        img_link: 'https://i.ibb.co/m9vYMW3/polingin.png',
      },
      {
        name: 'Secondhand Bug Reporting',
        url: 'https://docs.google.com/document/d/1_XLqKfLHt9BX3kIRG5hEp7bhmgCmBQaGyMVOuhjmP0I/edit?usp=sharing',
        img_link: 'https://i.ibb.co/ZV1cdBD/image.png',
      },
      {
        name: 'Secondhand Test Case & Scenario',
        url: 'https://docs.google.com/spreadsheets/d/1rPNDuBh6bbCPTgjmi5yokvVkddTaDBe9MPsMXd22r_Q/edit?usp=sharing',
        img_link: 'https://i.ibb.co/hD7XS4G/image.png',
      },
    ],
    certifications: [
      {
        name: '1',
        url: './public/certificate.jpg',
      },
    ],
  };
  const [isMainPage, setIsMainPage] = useState(true);
  const handleButtonClick = () => {
    setIsMainPage(!isMainPage);
  };
  return (
    <>
      <Head>
        <title>Derry</title>
        <link rel='icon' href='https://i.ibb.co/4JfLgtm/logobg.jpg' />
      </Head>
      <main className='bg-gradient-to-b  from-vg1 via-vg2 to-vg3 via-vg4    flex justify-center items-center w-full'>
        <section className='flex flex-col md:flex-row items-center justify-center mt-4 sm:mt-0 sm:min-h-screen'>
          {/* LEFT Card */}
          <div className=' flex-1'>
            <div className='border-t-2 border-l-2 border-b-2 border-card flex flex-col  w-[300px] sm:h-[450px] md:w-80 lg:w-[400px] rounded-tl-lg rounded-bl-lg sm:rounded-lg rounded-tr-lg sm:rounded-tr-lg bg-card'>
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
                        src={Data.image_profile}
                        alt='Profile Picture'
                        width={72}
                        height={72}
                        className='h-full w-full object-contain object-cover rounded-full'
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Below */}
              <div className='h-2/3 flex items-center flex-col mt-4'>
                <h1 className='text-black font-semibold'>{Data.nama}</h1>
                {/* Interest */}
                <div className='flex flex-col mt-4'>
                  <div className='bg-interest1 h-6 md:w-[310px] sm:w-[250px] w-[250px] mb-2 flex justify-between items-center '>
                    <h1 className='text-light font-semibold ml-2'>
                      {Data.interests.at(0).name}
                    </h1>
                    <h2 className='text-light font-semibold mr-2'>
                      {Data.interests.at(0).level}
                    </h2>
                  </div>
                  <div className='bg-interest2 h-6 md:w-[310px] sm:w-[250px] w-[250px] mb-2 flex justify-between items-center '>
                    <h1 className='text-light font-semibold ml-2'>
                      {Data.interests.at(1).name}
                    </h1>
                    <h2 className='text-light font-semibold mr-2'>
                      {Data.interests.at(1).level}
                    </h2>
                  </div>
                </div>
                {/* Signature */}
                <div className='border-interest2 border-2 h-32 md:w-[310px] sm:w-[250px] w-[250px] text-base m-1'>
                  <p className='ml-2 mt-2'>{Data.signature}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Card */}
          <div className='bg-card mt-4 sm:mt-0  flex-1 w-[300px] sm:h-[450px] md:w-80 lg:w-[400px] rounded-lg border-2 border-l-base '>
            {/* Button Menu - START*/}
            <div className='mt-4 flex flex-row  mb-10 w-full h-fit bg-inherit'>
              {/* LEFT arrow */}
              <div className='h-8 w-8'>
                <Image
                  src={arrowLeft}
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              {/* Menu || Certificate */}
              <div className='mx-auto flex justify-center items-center'>
                <div className='bg-base2 h-8 w-[250px] rounded-xl flex flex-row justify-between items-center'>
                  <h1
                    onClick={handleButtonClick}
                    className={`${
                      isMainPage ? 'text-base z-10' : 'text-light'
                    }  text-bold  cursor-pointer ml-3`}
                  >
                    Main Page
                  </h1>
                  <h1
                    onClick={handleButtonClick}
                    className={`${
                      !isMainPage ? 'text-base z-10' : 'text-light'
                    }  text-bold  cursor-pointer mr-3`}
                  >
                    Certificates
                  </h1>
                  <motion.div
                    onClick={handleButtonClick}
                    className={`${
                      isMainPage ? 'bg-light' : 'bg-light'
                    } w-[100px] h-6 px-2 rounded-xl cursor-pointer  absolute `}
                    initial={{ x: 5 }}
                    animate={{
                      x: isMainPage ? 5 : 147,
                    }}
                    transition={{ duration: 0.187 }}
                  >
                    {/* <h1 className='text-base text-bold'>Main Page</h1> */}
                  </motion.div>
                </div>
              </div>
              {/* RIGHT arrow */}
              <div className='left-0 h-8 w-8'>
                <Image
                  src={arrowRight}
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
            {/* Button Menu - END */}
            {isMainPage ? (
              <div className=' h-fit w-full'>
                {/* MAINPAGE - Start */}
                <div className='bg-base2 h-1 w-52 mx-auto' />
                <div className='h-fit w-full flex flex-row items-start  justify-around gap-4 my-4'>
                  <Tooltip content='Linkedin'>
                    <Link href='https://www.linkedin.com/in/derryderajat/'>
                      <Image src={linkedIcon} alt='' width={52} height={52} />
                    </Link>
                  </Tooltip>
                  <Tooltip content='Github'>
                    <Link href='https://github.com/derryderajat'>
                      <Image src={githubIcon} alt='' width={52} height={52} />
                    </Link>
                  </Tooltip>
                </div>
                {/* Showcase Div */}
                <div className=' h-fit w-full'>
                  <h1 className='text-base text-xl font-semibold left-12 relative'>
                    Showcase Projects
                  </h1>
                  <div className='bg-base2 h-1 w-52 mx-auto mb-6 mt-4' />
                  {/* Showcase */}
                  <div className='w-full h-fit grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3  gap-4 place-items-center justify-items-center '>
                    {/* Project */}
                    {Data.projects.map((project, i) => (
                      <div key={i} className=''>
                        <div className='flex flex-col mt-4'>
                          <div className=' h-16  hover:cursor-pointer hover:max-h-24 w-16  relative'>
                            <Link href={project.url}>
                              <Image
                                src={project.img_link}
                                alt=''
                                width={300}
                                height={300}
                                className='h-full w-full object-contain -mt-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-[22px]'
                              />
                              <p className='bg-card h-fit absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-black  opacity-0 hover:opacity-100 text-center text-sm'>
                                {project.name}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className='h-fit w-full'>
                {/* Certificates */}
                <div className='bg-base2 h-1 w-52 mx-auto' />
                <div className='mt-12 mx-auto w-full h-fit grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center justify-items-center'>
                  {/* ITEM Certificate */}
                  {images.map((src, i) => (
                    <div key={i} className='bg-blue-200 w-[120px] h-[72px]'>
                      <Image
                        src={src}
                        onClick={() => openImageViewer(i)}
                        key={i}
                        width='300'
                        height='300'
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='h-24 sm:h-12'></div>
        </section>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: 'rgba(0,0,0,0.9)',
            }}
            closeOnClickOutside={true}
          />
        )}
      </main>
    </>
  );
}
