let dummySignatures = [
  {
    icon: 'https://i.pravatar.cc/100',
    ens: 'address.eth',
    address: '0xcdff...ef',
    signedDate: '17.1.2022 22:34',
    handle: 'handle',
  },
  {
    icon: 'https://i.pravatar.cc/110',
    ens: 'jolene.eth',
    address: '0xcdff...ef',
    signedDate: '17.1.2022 22:34',
    handle: 'jolene',
  },
  {
    icon: 'https://i.pravatar.cc/120',
    ens: 'potato.eth',
    address: '0xcdff...ef',
    signedDate: '17.1.2022 22:34',
    handle: 'potato',
  },
];

function Signature(props) {
  return (
    <div className=' border-te-blue border-b text-te-blue'>
      <div className='mx-auto container p-4 md:py-8 flex justify-between items-center'>
        <div className='flex items-center flex-1'>
          <img
            src='https://i.pravatar.cc/100'
            className='h-12 rounded-full outline-2 outline outline-te-blue'
          />
          <div className='lowercase text-xl ml-4 font-light'>{props.ens}</div>
        </div>
        <div className='flex-1 flex justify-center items-center space-x-8 opacity-40 text-sm'>
          <div>{props.address}</div>
          <div>{props.signedDate}</div>
        </div>
        <button className='flex-1 flex justify-end '>
          <div className='py-2 px-3 pr-4 bg-te-orange text-white text-lg font-light flex rounded-sm space-x-2'>
            <img src='/img/check.svg' />
            <p>@{props.handle}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function Sign() {
  return (
    <>
      <section className='pb-16 bg-te-grey py-8 text-te-blue'>
        <div className='container mx-auto relative text-center'>
          <div className='mt-6 uppercase text-xl text-center tracking-wide '>
            Step 1
          </div>
          <div className='text-center text-8xl lowercase font-light tracking-tight mt-6 max-w-4xl mx-auto'>
            This love letter needs your signature.
          </div>
          <div className='text-center text-lg lowercase font-light tracking-tight mt-12 max-w-lg mx-auto'>
            sign with your wallet to show support for this idea and potential
            customer interest. It might eventually lead to DAO creation and
            raising fund to collaborate with TE on designing a hardware wallet.
          </div>
          <button className='mt-8 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white mx-auto hover:opacity-90 hover:shadow-lg transition duration-300'>
            sign with metamask
          </button>
        </div>
      </section>
      <section className='bg-te-grey py-16'>
        {dummySignatures.map((signature, i) => {
          return <Signature {...signature} key={i} />;
        })}
        <div className=' flex justify-center mt-8'>
          <button className='uppercase border-b border-te-blue text-te-blue text-sm transition hover:opacity-80 duration-300'>
            show more
          </button>
        </div>
      </section>
    </>
  );
}