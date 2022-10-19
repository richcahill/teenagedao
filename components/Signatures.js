import { db, app } from '../lib/clientApp.js';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

let ellipsify = (str) => {
  let shortened = str.substring(0, 2) + '...' + str.slice(-4);
  return shortened;
};

function Signature(props) {
  // console.log(props);

  return (
    <div className='mx-auto max-w-[720px] container py-4 md:py-8 flex flex-row flex-nowrap space-x-2 sm:space-x-4 space-between border-te-blue border-b text-te-blue'>
      <div className='flex-none w-8 h-8 sm:w-14 sm:h-14 rounded-full border-2 border-te-blue bg-te-blue'>
        {props.icon && <img src={props.icon} className=' rounded-full' />}
      </div>
      <div className='flex-1 flex flex-col flex-nowrap space-y-2 lowercase text-xl ml-2 font-light sm:flex-row sm:space-y-0 sm:space-x-8'>
        <span className='text-base flex-1'>
          {props.ens || (props.address && ellipsify(props.address))}
          <br />
          <span className='text-xs opacity-60'>
            {props.signedDate && props.signedDate.toDate().toDateString()}
          </span>
        </span>
        <button className='flex-initial mr-auto'>
          {props.handle && (
            <div className='py-2 px-3 pr-4 bg-te-orange text-white text-sm font-light flex rounded-sm space-x-2'>
              <img src='/img/check.svg' />
              <p>@{props.handle}</p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Signatures(props) {
  const [signatures, loading, error] = useCollection(
    collection(db, 'testSignatures'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  // if (!loading && signatures) {
  //   signatures.docs.map((doc) => console.log(doc.data()));
  // }

  return (
    <>
      <section className='pb-16 py-8 px-4 bg-te-greytext-te-blue'>
        <div className='container mx-auto relative text-center'>
          <div className='mt-6 uppercase text-xl text-center tracking-wide '>
            Step 1
          </div>
          <div className='text-center text-8xl lowercase font-light tracking-tight mt-6 max-w-4xl mx-auto'>
            This love letter needs your signature.
          </div>
          <div className='text-center text-lg lowercase font-light tracking-tight mt-12 max-w-2xl mx-auto'>
            sign with your wallet to show support for this idea and potential
            customer interest. It might eventually lead to DAO creation and
            raising fund to collaborate with TE on designing a hardware wallet.
          </div>
          <button
            onClick={() => {
              props.setIsSigning(true);
            }}
            className='mt-8 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white mx-auto hover:opacity-90 hover:shadow-lg transition duration-300'
          >
            sign with metamask
          </button>
        </div>
      </section>
      <section className='bg-te-grey py-16 px-4'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>loading signatures...</span>}
        {signatures && (
          <>
            {signatures.docs.map((signature, i) => {
              return <Signature {...signature.data()} key={i} />;
            })}
          </>
        )}

        <div className=' flex justify-center mt-8'>
          <button className='uppercase border-b border-te-blue text-te-blue text-sm transition hover:opacity-80 duration-300'>
            show more
          </button>
        </div>
      </section>
    </>
  );
}
