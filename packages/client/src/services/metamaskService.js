export const switchToHederaNetwork = async (ethereum) => {
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1a4' }] // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainName: 'Optimism Goerli Testnet',
              chainId: '0x1a4',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://goerli.optimism.io']
            },
          ],
        });
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

// returns a list of accounts
// otherwise empty array
export const connectToMetamask = async () => {
  const { ethereum } = window;
  // keep track of accounts returned
  let accounts = [];
  if (!ethereum) {
    throw new Error("Metamask is not installed! Go install the extension!");
  }
  
  await switchToHederaNetwork(ethereum);

  accounts = await ethereum.request({
    method: 'eth_requestAccounts',
  });

  return accounts;
}

