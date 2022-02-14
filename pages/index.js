import How from "../components/How";
import LFB from "../components/LFB";
import Why from "../components/Why";
import WhatIf from "../components/WhatIf";
import Sign from "../components/Sign";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
      <div className='h-screen bg-zinc-100 overflow-y-scroll'>
        {/* <Nav/> */}
        <Hero />
        <CallToAction />
        <WhatIf />
        <Why />
        <How />
        <Sign />
        <LFB />
        <Footer />
      </div>
  );
}
