import Image from 'next/image';
import Ben from '../../public/ben.jpeg';

const Profile = () => {
  return (
    <div className='absolute bottom-0'>
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
  );
};

export default Profile;
