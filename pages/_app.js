import '../public/styles/globals.css';
import { Provider, chain, createClient } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

// API key for Ethereum node
// Two popular services are Alchemy (alchemy.com) and Infura (infura.io)
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_SECRET;

const defaultChain = chain.mainnet;

// Set up connectors
const client = createClient({
  autoConnect: true,
  connectors({ chainId }) {
    const chain = defaultChain;
    const rpcUrl = chain.rpcUrls.alchemy
      ? `${chain.rpcUrls.alchemy}/${alchemyId}`
      : chain.rpcUrls.default;
    return [
      new InjectedConnector(),
      new CoinbaseWalletConnector({
        options: {
          appName: 'wagmi',
          chainId: chain.id,
          jsonRpcUrl: rpcUrl,
        },
      }),
      new WalletConnectConnector({
        options: {
          qrcode: true,
          rpc: {
            [chain.id]: rpcUrl,
          },
        },
      }),
    ];
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider client={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
