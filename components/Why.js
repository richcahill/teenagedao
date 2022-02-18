export default function Why(props) {
  return (
    <section className=" relative">
      <div className="absolute w-1/2 left-0 h-full bg-te-blue"></div>
      <div className="absolute w-1/2 right-0 h-full bg-te-red"></div>
      <div className="container mx-auto relative z-10 flex flex-col sm:flex-row text-white font-light">
        <div className=" bg-te-blue flex-1 flex justify-center py-12 px-4 sm:p-16">
          <div className="max-w-md">
            <div className="uppercase text-xl tracking-wide mb-4">
              Why Teenage Engineering?
            </div>
            <div className=" leading-tight lowercase">
              You have tons of experience designing wonderful hardware products
              that people love. <br />
              We love them, indeed.
            </div>
          </div>
        </div>
        <div className=" bg-te-red flex-1 flex justify-center py-12 px-4 sm:p-16">
          <div className="max-w-md">
            <div className="uppercase text-xl tracking-wide mb-4">
              Why The rest of us?
            </div>
            <div className=" leading-tight lowercase">
              The people signed below know Web3 in and out. This is our
              enthusiastic moonshot to build a community that wants to meme this
              collaboration into existence. <br />
              Consider this a love letter from us.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
