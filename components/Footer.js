export default function Footer(props) {
  return (
    <section className='mt-20 bg-te-black'>
      <footer className='container mx-auto py-8 pb-64 px-4 text-white font-light flex justify-between'>
        <h1 className='text-3xl font-light tracking-tight mx leading-8 text-white'>
          <p className='opacity-70'>teenage</p>
          <p className='opacity-100 relative z-20'>dao</p>
        </h1>

        <h1 className='text-3xl font-light tracking-tight mx leading-8 text-white'>
          <a
            className=''
            href='https://twitter.com/teenageDAO'
            target='_blank'
            rel='noopener noreferrer'
          >
            twitter
          </a>
        </h1>
      </footer>
    </section>
  );
}
