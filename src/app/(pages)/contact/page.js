import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='contact-section' style={{ backgroundImage: "url('/bg.jpg')", objectFit:'cover'}}>
      <div className='contact-container'>
        <h1>Contact Us Page</h1>
        <div className='shape-1'>
          <Image src='/shape-1.png' width={100} height={100} alt='shape' />
        </div>
      </div>
    </div>
  );
}

export default Page;
