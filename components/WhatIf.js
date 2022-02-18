export default function WhatIf(props) {
  return (
    <section className="pt-10 pb-16 px-4">
      <div className="container mx-auto relative ">
        <div className="relative ">
          <img src="/img/te-products.png" alt="teenage engineering products" />
        </div>
        <div className="mt-6 uppercase text-xl  text-center tracking-wide ">
          what if...
        </div>
        <div className="text-center text-8xl lowercase font-light tracking-tight mt-6">
          we build it together.
        </div>
        <div className="text-center text-lg lowercase font-light tracking-tight mt-12">
          yes — with you,{" "}
          <a
            href="https://teenage.engineering"
            target="_blank"
            className=" border-b border-black"
          >
            teenage engineering
          </a>
          .<br />
          let's do it.
        </div>
        {/* collaborators */}
        {/* todo, more collaborators */}
        {/* <div className="flex justify-center space-x-16 items-center h-20 mt-8"> */}
        <div className="flex flex-wrap justify-center items-center space-x-16 mt-8">
          <img
            src="/img/collaborators/colab.png"
            alt="colab"
            className="h-16"
          />
          <img src="/img/collaborators/we3.png" alt="colab" className="h-8" />
          <img
            src="/img/collaborators/delphi.png"
            alt="colab"
            className="h-14"
          />
        </div>
      </div>
    </section>
  );
}
