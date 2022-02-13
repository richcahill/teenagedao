import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuestion(!question)
    }, 2000);

    return () => clearInterval(intervalId);
  },);

  const [question, setQuestion] = useState("");

  return (
    <>
      <div className='h-screen bg-zinc-100 overflow-y-scroll'>
        <Head>
          <title>teenage dao {question?"?":""}</title>
          <link rel='icon' href='/favicon.png' />
        </Head>
  
        {/* hero section */}
        <section className='relative header flex flex-col justify-between'>
          <div className="header absolute top-0 left-0 w-full bg-blue-500 h-full">
            <Image src="/img/wallet-render.png" layout="fill" quality={90} objectFit="cover"/>
          </div>
          <nav className='container mx-auto flex text-white justify-between py-4'>
            <h1 className=' text-3xl font-light tracking-tight mx leading-8 text-white'>
              <p className=' opacity-70'>teenage</p>
              <p className="opacity-100 relative z-20">dao</p>
            </h1>
            <div className='flex'>
              <img
                src='/img/icons/metamask.svg'
                alt='metamask logo'
                className='opacity-70 h-12 mr-4'
              />
  
              <h1 className='title text-3xl font-light tracking-tight opacity-70 mt-1'>
                sign in with metamask
              </h1>
            </div>
          </nav>
          <div className="call-to-action container m-auto text-white relative font-light flex flex-col justify-end flex-1 py-16">
            <p className="uppercase text-xl mb-4">imagine</p>
            <p className="text-8xl tracking-tight max-w-4xl">finally, a beautiful hardware wallet{question?"?":""}</p>
          </div>
        </section>
        {/* call to action section */}
        <section className="bg-te-orange pt-10 pb-16">
          <div className="container mx-auto text-center"><h2 className="text-xl text-white uppercase tracking-wide">great products should exist</h2>
          <p className=" max-w-xl mx-auto text-xl font-light lowercase mt-4">
            web3 is exploding. NFTs, DeFi, DAOs. <br />
            a global hivemind of curious people builds together, 24/7. <br />
            However, the hardware wallets we use daily has been stuck in the past. The best we got so far are <a className=" border-b border-black" href="https://www.inputmag.com/design/fendi-ledger-nano-x-crypto-wallet-price-june-2022-release" target="_blank">Fendi bags for our Ledgers</a>.
            <br /><br />
            We can do better. <br /><br />
            We believe in beauty. We believe in craft. <br />
            We believe in better technology for everyday.
            <br /><br />
            It's time for a designed driven approach, <br />
            in line with the needs for security and reliability.</p>
          </div>
        </section>
        {/* products section */}
        {/* could be cool to do some kind of physics based products raining thing */}
        <section className="pb-16">
          <div className="container mx-auto relative ">
            <div class="relative "><img src="/img/te-products.png" alt="teenage engineering products" /></div>
            <div className="mt-6 uppercase text-xl  text-center tracking-wide ">what if...</div>
            <div className="text-center text-8xl lowercase font-light tracking-tight mt-6">we build it together.</div>
            <div className="text-center text-lg lowercase font-light tracking-tight mt-12">yes — with you, <a href="https://teenage.engineering" target="_blank" className=" border-b border-black">teenage engineering</a>.<br />let's do it.</div>
            {/* collaborators */}
            {/* todo, more collaborators */}
            <div className="flex justify-center space-x-16 items-center h-20 mt-8">
            <img src="/img/collaborators/colab.png" alt="colab" className="h-16"/>
            <img src="/img/collaborators/we3.png" alt="colab" className="h-8"/>
            <img src="/img/collaborators/delphi.png" alt="colab" className="h-14"/>

            </div>
          </div>
        </section>

        <section className=" bg-te-blue relative">
        <div className="absolute w-1/2 left-0 h-full bg-te-blue"></div>
        <div className="absolute w-1/2 right-0 h-full bg-te-red"></div>
          <div className="container mx-auto relative z-10 flex text-white font-light">
            <div className=" bg-te-blue flex-1 flex justify-center p-12">
              <div className="max-w-md">           
                <div className="uppercase text-xl tracking-wide mb-4">Why Teenage Engineering?</div>
                <div className=" leading-tight lowercase">
                  You have tons of experience designing wonderful hardware products that people love. <br />
                  We love them, indeed.
                </div>
              </div>
            </div>
            <div className=" bg-te-red flex-1 flex justify-center p-12">
            <div className="max-w-md">           
                <div className="uppercase text-xl tracking-wide mb-4">Why The rest of us?</div>
                <div className=" leading-tight lowercase">
                The people signed below know Web3 in and out. This is our enthusiastic moonshot to build a community that wants to meme this collaboration into existence. Consider this a love letter from us.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer  */}
        <section className="mt-20 bg-te-black">
          <div className="container mx-auto py-8 px-4 text-white font-light">
            footer
          </div>
        </section>
        
      </div>
      <style jsx>{`
        .header {
          height: 42rem
        }
      `}</style>
    </>
  );
}
