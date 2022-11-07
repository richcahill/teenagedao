export default function Mockup(props) {
  return (
    <section className='relative min-h-[75vh] flex flex-col justify-between overflow-hidden'>
      <div
        className='absolute top-0 left-0 w-full bg-blue-500 h-full flex justify-end'
        style={{ backgroundColor: '#020202' }}
      >
        <img
          src='/img/packaging.png'
          className=' object-cover w-full relative  '
          alt='a mysterious mockup of a product that could be'
        />
      </div>
    </section>
  );
}
