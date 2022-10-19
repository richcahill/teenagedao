import How from '../components/How';
import LFB from '../components/LFBsvg';
import Why from '../components/Why';
import WhatIf from '../components/WhatIf';
import Signatures from '../components/Signatures';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Sign from '../components/Sign';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db, app } from '../lib/clientApp.js';

export default function Home() {
  const [isSigning, setIsSigning] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className='h-screen bg-zinc-100 overflow-y-scroll'>
      {isSigning && <Sign setIsSigning={setIsSigning} />}
      <Hero />
      <CallToAction />
      <WhatIf />
      <Why />
      <How />
      <Signatures setIsSigning={setIsSigning} />
      <LFB />
      <Footer />
    </div>
  );
}
