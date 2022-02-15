import How from '../components/How';
import LFB from '../components/LFB';
import Why from '../components/Why';
import WhatIf from '../components/WhatIf';
import Signatures from '../components/Signatures';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Sign from '../components/Sign';
import { useState } from 'react';

export default function Home() {
  const [isSigning, setIsSigning] = useState(false);

  let openClose = () => {
    setIsSigning(!isSigning);
  };

  return (
    <div className='h-screen bg-zinc-100 overflow-y-scroll'>
      {isSigning && <Sign close={openClose} />}
      <Hero />
      <CallToAction />
      <WhatIf />
      <Why />
      <How />
      <Signatures openSigningModal={openClose} />
      <LFB />
      <Footer />
    </div>
  );
}
