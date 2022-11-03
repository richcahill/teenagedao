import { useEffect, useState } from 'react';
import { useEnsName, useAccount, useSignMessage } from 'wagmi';
import { verifyMessage } from 'ethers/lib/utils';
import { useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { app } from '../lib/clientApp';
import { getAuth } from 'firebase/auth';
import Image from 'next/image';
import truncateEthAddress from 'truncate-eth-address';

// phew that was a lot of imports, now let's get to the meat of the component

export default function Sign(props) {
  // state to set if the signing has worked or not
  const [hasSigned, setHasSigned] = useState(false);
  // ethereum address hook
  const { address, isConnecting, isDisconnected } = useAccount();
  // ens name lookup hook
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  // get auth from firebase instance
  const auth = getAuth(app);
  const [signInWithTwitter, twitterUser, twitterLoading, twitterError] =
    useSignInWithTwitter(auth);

  // signing hooks
  const { signedData, error, signedDataIsLoading, signMessage } =
    useSignMessage({
      onSuccess(signedData, variables) {
        const signedAddress = verifyMessage(variables.message, signedData);
        setHasSigned(true);
      },
    });

  // message that the user is signing with
  let defaultMessage = `Let's build a beautiful hardware wallet with teenageDAO.xyz — ${
    data ?? truncateEthAddress(address)
  }`;

  // signing function
  let signLetter = async (e) => {
    e.preventDefault();
    signMessage({
      message: defaultMessage,
    });
  };

  // nicely tidy up the twitter and wagmi data before adding to the database
  let addToList = () => {
    props.addToSignaturesList(
      {
        ens: data ? data : null,
        address: address,
        handle: twitterUser ? twitterUser._tokenResponse.screenName : null,
        photo: twitterUser
          ? twitterUser.user.photoURL.replace('normal', 'bigger')
          : null,
      },
      data ?? truncateEthAddress(address),
      defaultMessage
    );
  };

  // TODO you need to sort out the flow where it signs it, then adds to database and then closes the modal

  // jankily use an effect to see if the state for signed has updated and then add to db and close the modal
  useEffect(() => {
    if (!hasSigned) {
      props.setIsSigning(true);
    }

    if (hasSigned) {
      props.addToSignaturesList(
        {
          ens: data ? data : null,
          address: address,
          handle: twitterUser ? twitterUser._tokenResponse.screenName : null,
          photo: twitterUser
            ? twitterUser.user.photoURL.replace('normal', 'bigger')
            : null,
        },
        data ?? truncateEthAddress(address),
        defaultMessage
      );
    }
  });

  return (
    <div className='fixed h-full w-full  top-0 left-0 z-40 flex justify-center items-center'>
      <div className='fixed bg-te-black opacity-90 w-full h-full' />
      <div
        className='fixed backdrop-blur-lg w-full h-full'
        onClick={() => {
          props.setIsSigning(false);
        }}
      />
      <div className='bg-white relative z-40 py-12 pb-6 px-6 rounded-sm text-center md:-mt-40'>
        <h2 className='text-3xl font-light'>sign our love letter</h2>

        <form className='mt-6 flex flex-col'>
          {/* check that there's an ens, else use the full ethereum address */}
          {data ? (
            <>
              <div className='mt-2  border border-te-black w-96 rounded-sm relative flex'>
                <div className='pl-4 pr-4 py-3 border-r border-te-black flex justify-center align-middle w-14'>
                  <Image
                    src='/img/icons/ens.svg'
                    width={16}
                    height={16}
                    alt='ens icon'
                  />
                </div>
                <div className='pr-4 pl-4 py-3 w-96 rounded-sm flex cursor-not-allowed bg-slate-100'>
                  {data}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='mt-2  border border-te-black w-96 rounded-sm relative flex'>
                <div className='pl-4 pr-4 py-3 border-r border-te-black flex justify-center align-middle w-14'>
                  <Image
                    src='/img/icons/ethereum.svg'
                    width={16}
                    height={16}
                    alt='ethereum icon'
                  />
                </div>
                <div className='pr-4 pl-4 py-3 w-96 rounded-sm flex cursor-not-allowed bg-slate-100'>
                  {truncateEthAddress(address)}
                </div>
              </div>
            </>
          )}
          {/* check that the user has added their twitter and display their handle or show them an add twitter handle button */}
          {twitterUser ? (
            <div className='mt-2  border border-te-black w-96 rounded-sm relative flex'>
              <div className='pl-4 pr-4 py-3 border-r border-te-black flex justify-center align-middle w-14'>
                <Image
                  src='/img/icons/twitter.svg'
                  width={16}
                  height={16}
                  alt='twitter icon'
                />
              </div>
              <div className='pr-4 pl-4 py-3 w-96 rounded-sm flex cursor-not-allowed bg-slate-100'>
                @{twitterUser._tokenResponse.screenName}
              </div>
            </div>
          ) : (
            <div
              onClick={() => signInWithTwitter()}
              className='mt-2 pr-4 py-3 w-96 rounded-sm relative flex justify-center cursor-pointer bg-te-blue text-white'
            >
              add your twitter handle
            </div>
          )}

          <button
            onClick={signLetter}
            className='mt-16 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white  hover:opacity-90 hover:shadow-lg transition duration-300 flex justify-between'
          >
            {' '}
            <span>✎</span>
            <span>sign</span>
          </button>
        </form>
      </div>
    </div>
  );
}
