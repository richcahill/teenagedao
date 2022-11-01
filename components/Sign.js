import { useState } from 'react';
import { ConnectKitProvider, ConnectKitButton } from 'connectkit';
import { useEnsName, useAccount, useSignMessage } from 'wagmi';
import { verifyMessage } from 'ethers/lib/utils';

import Image from 'next/image';
import truncateEthAddress from 'truncate-eth-address';

export default function Sign(props) {
  // steps for additional steps that haven't been built yet
  const [step, setIsStep] = useState(1);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  const [info, setInfo] = useState({
    ens: data,
    address: address,
    handle: '',
  });

  const { signedData, error, signedDataIsLoading, signMessage } =
    useSignMessage({
      onSuccess(signedData, variables) {
        // Verify signature when sign message succeeds
        const signedAddress = verifyMessage(variables.message, signedData);
        console.log(signedData);
      },
    });

  let defaultMessage = `Let's build a beautiful hardware wallet with teenageDAO.xyz — ${
    data ?? truncateEthAddress(address)
  }`;

  let tweet =
    "Let's build a beautiful hardware wallet with alpha.teenageDAO.xyz\n\n@teenageDAO @jugendingenieur";

  let signLetter = async (e) => {
    // TODO some kind of async stuff here to stop it from adding the message until it's signed
    e.preventDefault();

    signMessage({
      message: defaultMessage,
    });

    props.addToSignaturesList(
      info,
      data ?? truncateEthAddress(address),
      defaultMessage
    );
  };

  let updateInfo = (e) => {
    if (e.target.id === 'handle') {
      var strippedString = e.target.value.replace(
        /[`" "~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
        ''
      );
      setInfo({ ...info, [e.target.id]: strippedString });
    } else {
      setInfo({ ...info, [e.target.id]: e.target.value });
    }
  };

  return (
    <div className='fixed h-full w-full  top-0 left-0 z-40 flex justify-center items-center'>
      <div className='fixed bg-te-black opacity-90 w-full h-full' />
      <div
        className='fixed backdrop-blur-lg w-full h-full'
        onClick={() => {
          props.setIsSigning(false);
        }}
      />
      <div className='bg-white relative z-40 py-12 px-6 rounded-sm text-center md:-mt-40'>
        {step === 1 && (
          <>
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

              {/* do something funky here to prepend a @ symbol to the front of the handle */}
              <div className='mt-2  border border-te-black w-96 rounded-sm relative flex'>
                <div className='pl-4 pr-4 py-3 border-r border-te-black flex justify-center align-middle w-14 text-md'>
                  @
                </div>
                <input
                  className='pr-4 pl-4 py-3 w-96 rounded-sm'
                  placeholder='your twitter username'
                  id='handle'
                  onChange={updateInfo}
                  value={info.handle}
                ></input>
              </div>
              <button
                onClick={signLetter}
                className='mt-6 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white mx-auto hover:opacity-90 hover:shadow-lg transition duration-300'
              >
                sign our love letter
              </button>
              {/* <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  tweet
                )}`}
                data-size='large'
                target='_blank'
              >
                <div className='opacity-80 inline-block mt-6 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white mx-auto hover:opacity-90 hover:shadow-lg transition duration-300'>
                  tweet support
                </div>
              </a> */}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
