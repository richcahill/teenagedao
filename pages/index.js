import How from '../components/How';
import LFB from '../components/LFB';
import Why from '../components/Why';
import WhatIf from '../components/WhatIf';
import Signatures from '../components/Signatures';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Sign from '../components/Sign';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { collection, addDoc } from 'firebase/firestore';
import { db, app } from '../lib/clientApp.js';

export default function Home() {
  const [isSigning, setIsSigning] = useState(false);

  // probably doesn't need to be React components state
  let web3Provider = undefined;

  let closeSigningModal = () => {
    setIsSigning(false);
  }

  let startSigning = async () => {
    // Ask user to unlock Metamask if its locked
    await web3Provider.send("eth_requestAccounts", []);
    setIsSigning(true);
  }

  let completeSigning = async (info) => {
    const msg = "I want Teenage Engineering to make a beautiful and functional hardware wallet";

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    // This will open a Metamask window and ask user to sign the message
    const signedMessage = await signer.signMessage(msg);

    const payload = { address, signedMessage, info }

    console.log(payload);
    const reference = await addDoc(collection(db, 'testSignatures'), info);
    
    setIsSigning(false);
  };

  useEffect(() => {
    // Do this here as window is not available elsewhere b/c of SSR
    // FIXME handle case where metamask is not installed. In that case, web3Provider
    // will stay undefined. Could conditionally render elsewhere on the page to say
    // user needs to install metamask.
    web3Provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) 
      : undefined;
  });

  return (
    <div className='h-screen bg-zinc-100 overflow-y-scroll'>
      {isSigning && <Sign sign={completeSigning} close={closeSigningModal} />}
      <Hero />
      <CallToAction />
      <WhatIf />
      <Why />
      <How />
      <Signatures openSigningModal={startSigning} />
      <LFB />
      <Footer />
    </div>
  );
}
