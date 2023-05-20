import React, { useState, useContext } from "react";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import Onboard from "@web3-onboard/core";
import { useNavigate } from "react-router-dom";
//import logo1 from "../assets/banner.jpg";
import { GlobalAppContext } from '../contexts/GlobalAppContext';
import { connectToMetamask } from '../services/metamaskService';

const coinbaseWalletSdk = coinbaseWalletModule();
const walletConnect = walletConnectModule();
const injected = injectedModule();

const modules = [coinbaseWalletSdk, walletConnect, injected];

const TESTNET_RPC_URL = "https://testnet.hashio.io/api";

const onboard = Onboard({
  wallets: modules, // created in previous step
  chains: [
    {
      id: "0x128",
      token: "HBAR",
      namespace: "evm",
      label: "Hedera Testnet",
      rpcUrl: TESTNET_RPC_URL
    },
  ],
  appMetadata: {
    name: "Undo",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "Undo - Save our Planet through community service",
    recommendedInjectedWallets: [
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
      { name: "MetaMask", url: "https://metamask.io" }
    ]
  }
});

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState();

    // use the GlobalAppContext to keep track of the metamask account connection
    const { metamaskAccountAddress, setMetamaskAccountAddress } = useContext(GlobalAppContext);

    const retrieveWalletAddress = async () => {
      const addresses = await connectToMetamask();
      console.log("address group",addresses);
      const { accounts, } = addresses[0];
      console.log("accounts 0 is",addresses[0]);
      if (addresses) {
        // grab the first wallet address
        setMetamaskAccountAddress(addresses[0]);
        //setAccount(accounts[0].address);
        console.log("setMetamaskAccountAddres wallet is", {metamaskAccountAddress});
      }
    }

  const connectWallet2 = async () => {
    try {
      const wallets = await onboard.connectWallet();
      const { accounts, } = wallets[0];
      setAccount(accounts[0].address);
      //navigate("/explore");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full mf:flex-row flex-col justify-center items-center">

          <button
            type="button"
            onClick={retrieveWalletAddress}
            className="flex flex-row justify-center items-center mx-3 my-3 bg-green-300 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white text-black text-xl font-semibold py-2 px-10"
          >
          {metamaskAccountAddress === "" ?
            "Connect Wallet" :
            `Connected to: ${metamaskAccountAddress.substring(0, 6)}...${metamaskAccountAddress.substring(metamaskAccountAddress.length - 4)}`}
          </button>
     </div>
  );
};

export default ConnectWallet;
