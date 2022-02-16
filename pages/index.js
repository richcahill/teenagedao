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

export default function Home() {
  const [isSigning, setIsSigning] = useState(false);
  const [signingAddress, setSigningAddress] = useState(undefined);

  let web3Provider, signer = undefined;

  let closeSigningModal = () => {
    setIsSigning(false);
  }

  let startSigning = async () => {
    await web3Provider.send("eth_requestAccounts", []);

    signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    setSigningAddress(address);

    console.log(`Connected as ${address}`);

    setIsSigning(true);
  }

  useEffect(() => {
    // Do this here as window is not available elsewhere b/c of SSR
    web3Provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) 
      : undefined;
  });

  return (
    <div className='h-screen bg-zinc-100 overflow-y-scroll'>
      {isSigning && <Sign close={closeSigningModal} />}
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
