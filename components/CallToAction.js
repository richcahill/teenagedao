export default function CallToAction(props) {
  return (
    <section className='bg-te-orange pt-10 pb-16 px-4 z-10 relative'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl text-white uppercase tracking-wide'>
          great products should exist
        </h2>
        <p className=' max-w-xl mx-auto text-xl font-light lowercase mt-4'>
          web3 is exploding. NFTs, DeFi, DAOs. <br />
          a global hivemind of curious people builds together, 24/7. <br />
          However, the hardware wallets we use daily has been stuck in the past.
          The best we got so far are{' '}
          <a
            className=' border-b border-black'
            href='https://www.inputmag.com/design/fendi-ledger-nano-x-crypto-wallet-price-june-2022-release'
            target='_blank'
          >
            Fendi bags for our Ledgers
          </a>
          .
          <br />
          <br />
          We can do better. <br />
          <br />
          We believe in beauty. We believe in craft. <br />
          We believe in better technology for everyday.
          <br />
          <br />
          It's time for a designed driven approach, <br />
          in line with the needs for security and reliability.
        </p>
      </div>
    </section>
  );
}
