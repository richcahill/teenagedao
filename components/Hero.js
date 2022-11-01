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
        <title>teenage dao ?</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='twitter:card' content='photo' />
        <meta name='twitter:site' content='@teenagedao' />
        <meta name='twitter:title' content='TeenageDAO' />
        <meta
          name='twitter:description'
          content="Let's build a beautiful hardware wallet together."
        />
        <meta name='twitter:image' content='https://i.imgur.com/Rqxgre3.png' />
        {/* TODO make sure to remove alpha. before launch */}
        <meta name='twitter:url' content='https://alpha.teenagedao.xyz' />
      </Head>
      <section className='relative min-h-[75vh] flex flex-col justify-between'>
        <Nav></Nav>
        <div className='absolute top-0 left-0 w-full bg-blue-500 h-full'>
          <Image
            priority
            src='/img/wallet-render.png'
            fill
            quality={90}
            alt='a mysterious rendering of a product that could be'
          />
        </div>

        <div className='px-4 call-to-action container m-auto text-white relative font-light flex flex-col justify-end flex-1 py-16'>
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
