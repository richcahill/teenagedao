import { useState } from 'react';
import { useConnect } from 'wagmi';

export default function Sign(props) {
  // steps for additional steps that haven't been built yet
  const [step, setIsStep] = useState(1);
  const [info, setInfo] = useState({ name: '', handle: '' });

  // we'll need to do something with twitter tweet events  here
  // https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview

  let tweet =
    "Let's build a beautiful hardware wallet with alpha.teenageDAO.xyz\n\n@teenageDAO @jugendingenieur";

  let signLetter = async (e) => {
    e.preventDefault();
    props.sign(info);
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
            <h2 className='text-3xl font-light'>Sign our love letter</h2>
            <p className='text-md font-light mt-2 opacity-80'>
              Enter your name to sign
            </p>
            <form className='mt-6 flex flex-col'>
              <input
                className='px-5 py-3 border border-te-black w-96 rounded-sm'
                placeholder='your name or alias'
                id='name'
                onChange={updateInfo}
                value={info.name}
              ></input>
              {/* do something funky here to prepend a @ symbol to the front of the handle */}
              <div className='mt-2  border border-te-black w-96 rounded-sm relative flex'>
                <div className='pl-4 pr-4 py-3 border-r border-te-black'>@</div>
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
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  tweet
                )}`}
                data-size='large'
                target='_blank'
              >
                <div className=' opacity-20 inline-block mt-6 lowercase font-light rounded-sm cursor-pointer bg-te-black px-4 py-3 text-white mx-auto hover:opacity-90 hover:shadow-lg transition duration-300'>
                  (test twitter button)
                </div>
              </a>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
