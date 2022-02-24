import "../styles/globals.css"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletProvider } from "@solana/wallet-adapter-react"

const wallets = [new PhantomWalletAdapter()]

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <Component {...pageProps} />
    </WalletProvider>
  )
}

export default MyApp
