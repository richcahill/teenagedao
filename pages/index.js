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
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/clientApp.js';

export default function Home() {
  const [isSigning, setIsSigning] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  let addToSignaturesList = async (info, address, signedMessage) => {
    const payload = {
      message: signedMessage,
      info: info,
      created: Date.now(),
    };

    const reference = await addDoc(collection(db, 'testSignatures'), payload);
    console.log(reference.id);

    if (reference.id) {
      setIsSigning(false);
    }
  };

  return (
    <div className='h-screen bg-zinc-100 overflow-y-scroll'>
      {isSigning && !hasSigned && (
        <Sign
          setIsSigning={setIsSigning}
          setHasSigned={setHasSigned}
          addToSignaturesList={addToSignaturesList}
        />
      )}
      <Hero />
      <CallToAction />
      <WhatIf />
      <Why />
      <How />
      <Signatures
        setIsSigning={setIsSigning}
        setHasSigned={setHasSigned}
        hasSigned={hasSigned}
      />
      <LFB />
      <Footer />
    </div>
  );
}
