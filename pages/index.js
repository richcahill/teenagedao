import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='h-screen bg-zinc-100'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
  
        <main className='relative header flex flex-col justify-between'>
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
            <p className="text-8xl tracking-tight max-w-4xl">finally, a beautiful hardware wallet.</p>
          </div>
        </main>
        
      </div>
      <style jsx>{`
        .header {
          height: 42rem
        }
      `}</style>
    </>
  );
}
