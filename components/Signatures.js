import { db, app } from '../lib/clientApp.js';
import {
  getFirestore,
  collection,
  orderBy,
  query,
  doc,
} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import truncateEthAddress from 'truncate-eth-address';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import ShareToTwitterButton from '../components/elements/ShareToTwitterButton';

function Signature(props) {
  // console.log(props);

  return (
    <div
      className={`mx-auto max-w-[720px] container py-4 px-4 md:py-8 flex flex-row flex-nowrap space-x-2 sm:space-x-4 space-between ${
        props.info.address === props.activeAddress && ' bg-white'
      } border-te-blue border-b text-te-blue`}
    >
      <div className='flex w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-te-blue relative'>
        {props.info.photo && (
          <img
            src={props.info.photo}
            className=' rounded-full opacity-80 w-full'
          />
        )}
      </div>
      <div className='flex-1 flex flex-col flex-nowrap space-y-2 lowercase text-xl ml-2 font-light sm:flex-row sm:space-y-0 sm:space-x-8'>
        <div className='text-base flex-1'>
          {props.info.ens ||
            (props.info.address && truncateEthAddress(props.info.address))}
          <br />
          <div className='text-xs opacity-100 mb-4 max-w-xs'>
            {props.message}
          </div>
          <div className='text-xs opacity-60'>
            {props.created &&
              dayjs(props.created).format('YYYY/MM/DD @ HH:mm:ssA')}
          </div>
        </div>
        <button className='flex items-start'>
          {props.info.handle && (
            <a
              href={`https://twitter.com/${props.info.handle}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='py-2 px-3 pr-4 bg-te-orange text-white text-sm font-light flex rounded-sm space-x-2'>
                <img src='/img/check.svg' />
                <p>@{props.info.handle}</p>
              </div>
            </a>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Signatures(props) {
  // set the amount of signatures to initally show
  const [shownSignatureCount, setShownSignatureCount] = useState(10);

  // get the collection of signatures from firebase
  // TODO update this to production signatures db
  const [signatures, loading, error] = useCollection(
    query(collection(db, 'testSignatures'), orderBy('created', 'desc')),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  // get the ethereum address from wagmi
  const { address, isConnecting, isDisconnected, useEnsAddress } = useAccount();

  // once the signatures have loaded, check to see if the user has already signed
  if (!loading && signatures) {
    signatures.docs.map((doc) => {
      if (doc.data().info.address == address) {
        console.log(address + ' has already signed');
        props.setHasSigned(true);
      }
      // console.log(doc.data());
    });
  }

  // Pop up the sign flow once the user has connected their wallet
  // useEffect(() => {
  //   if (address) {
  //     props.setIsSigning(true);
  //   }
  // });

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
          <div className='text-center text-lg lowercase font-light tracking-tight mt-12 max-w-3xl mx-auto'>
            sign with your wallet to show support for this idea and potential
            customer interest. It might eventually lead to DAO creation and
            raising funds to collaborate with TE on designing a hardware wallet.
          </div>

          {/* conditional check to see if there is a wallet connected, otherwise show the connectkit button */}
          {address ? (
            !props.hasSigned ? (
              <button
                onClick={() => {
                  props.setIsSigning(true);
                }}
                className='mt-8 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white mx-auto hover:opacity-90 hover:shadow-lg transition duration-300'
              >
                sign letter
              </button>
            ) : (
              <div className='flex mt-16  justify-center space-x-4'>
                <div className='p-4 px-6 text-te-black space-x-12  border border-te-black bg-te-grey box-border'>
                  <span>you've signed</span> <span>✓</span>
                </div>
                <div className=' flex '>
                  <ShareToTwitterButton></ShareToTwitterButton>
                </div>
              </div>
            )
          ) : (
            <ConnectKitButton.Custom>
              {({ isConnected, show }) => {
                return (
                  <button
                    onClick={show}
                    className='mt-8 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white mx-auto hover:opacity-90 hover:shadow-lg transition duration-300'
                  >
                    {isConnected ? 'sign letter' : 'connect wallet and sign'}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          )}
        </div>
      </section>
      <section className='bg-te-grey py-16 px-4'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>loading signatures...</span>}
        {signatures && (
          <>
            <div className='max-w-[720px] container mx-auto text-te-blue flex justify-center font-light mb-8'>
              {shownSignatureCount > signatures.docs.length
                ? signatures.docs.length
                : shownSignatureCount}{' '}
              of {signatures.docs.length} signatures
            </div>
            {signatures.docs
              .slice(0, shownSignatureCount)
              .map((signature, i) => {
                return (
                  <Signature
                    {...signature.data()}
                    activeAddress={address}
                    key={i}
                  />
                );
              })}
          </>
        )}

        <div className=' flex justify-center mt-8 font-light'>
          {signatures && shownSignatureCount < signatures.docs.length && (
            <button
              onClick={() => {
                setShownSignatureCount(shownSignatureCount + 10);
              }}
              className='uppercase border-b border-te-blue text-te-blue text-sm transition hover:opacity-80 duration-300'
            >
              show more
            </button>
          )}
        </div>
      </section>
    </>
  );
}
