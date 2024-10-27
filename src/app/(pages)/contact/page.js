import NavBar from '@/app/components/NavBar';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='contact-section' style={{ 
        backgroundImage: "url('/bg.jpg')", 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        }}>
      <div className='contact-container'>
        <NavBar/>
        <h1>Contact Us Page</h1>

        <div className='footer'>
            
        </div>


        <div className='shape-1'>
          <Image className='zoom-fade white-image' src='/shape2.png' width={200} height={200} alt='shape' />
        </div>

        <div className='topBlur'>  </div>
        <div className='bottomBlur'>  </div>
      </div>
    </div>
  );
}

export default Page;
