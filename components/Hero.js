import Image from 'next/image';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';

export default function Hero(props) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuestion(!question);
    }, 2000);

    return () => clearInterval(intervalId);
  });

  const [question, setQuestion] = useState('');

  return (
    <>
      <Head>
        <title>teenage dao {question ? '?' : ''}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <section className='relative header flex flex-col justify-between'>
        <Nav></Nav>
        <div className='header absolute top-0 left-0 w-full bg-blue-500 h-full'>
          <Image
            src='/img/wallet-render.png'
            layout='fill'
            quality={90}
            objectFit='cover'
          />
        </div>

        <div className='call-to-action container m-auto text-white relative font-light flex flex-col justify-end flex-1 py-16'>
          <p className='uppercase text-xl mb-4'>imagine</p>
          <p className='text-8xl tracking-tight max-w-4xl'>
            finally, a beautiful hardware wallet{question ? '?' : ''}
          </p>
        </div>
      </section>
      <style jsx>{`
        .header {
          height: 42rem;
        }
      `}</style>
    </>
  );
}
