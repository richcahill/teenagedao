import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain,
} from 'wagmi';
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from 'connectkit';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { Analytics } from '@vercel/analytics/react';

import '../public/styles/globals.css';

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_SECRET }),
  publicProvider(),
]);

// Set up client
const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains: [chain.mainnet] }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'teenageDAO',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

// Pass client to React Context Provider
function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme='minimal'>
        <Component {...pageProps} />
        <Analytics />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
