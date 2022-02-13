export default function Nav(props) {
  return (
    <div className=' fixed top-0 z-30 w-screen '>
      <nav className='container mx-auto flex text-white justify-between py-4 '>
        <h1 className=' text-3xl font-light tracking-tight mx leading-8 text-white'>
          <p className=' opacity-70'>teenage</p>
          <p className='opacity-100 relative z-20'>dao</p>
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
    </div>
  );
}
