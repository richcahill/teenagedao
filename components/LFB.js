export default function LFB(props) {
  return (
    <>
      <section>
        <div className='container mx-auto h-full relative'>
          <h2 className=' font-light w-full overflow-hidden text-center'>
            LFB
          </h2>
          <h3 className='text-xl lg:text-3xl absolute lowercase tracking-tight leading-5 '>
            let's
            <br />
            f**king
            <br />
            build
            <br />
            <br />
            <span className='opacity-20'>
              this
              <br />
              together
            </span>
          </h3>
        </div>
      </section>
      <style jsx>{`
        h2 {
          font-size: 42vw;
          line-height: 1;
          -webkit-text-stroke: 2px black;
          -webkit-text-fill-color: transparent;
        }

        h3 {
          top: 14%;
          left: 14%;
        }
      `}</style>
    </>
  );
}
