import React, { useState } from "react";
import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const Guess = () => {
  const { width, height } = useWindowSize();
  const [formInput, updateFormInput] = useState({ name: "" });

  const {
    components: { Counter },
    systemCalls: { increment },
    network: { singletonEntity },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);

  const check = () => {
  const { name } = formInput;
    if (!name) return;
    console.log('user input name is', {name})
  }

  async function rad() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
// Receiver Address which receives Ether
const receiverAddress = '0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228'// Ether amount to send
const amountInEther = '0.0001'// Create a transaction object
const tx = await {
    to: receiverAddress,
    // Convert currency unit from ether to wei
    value: ethers.utils.parseEther(amountInEther)
}// Send a transaction
    await signer.sendTransaction(tx)
  
.then((txObj) => {
    console.log('txHash', txObj.hash)
    // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
    // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
})


    // random value generated
    const y = Math.floor(Math.random() * 10 + 1);
    console.log('Random number is', y)
      let guess = 1;
      // number guessed by user    
      const x = Number(formInput.name.valueOf());
      console.log('X Inputed number is', x)
      if (x === y)
      {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
          + guess + " GUESS ");
      }
      else if (x > y) /* if guessed number is greater than actual number*/
      {
        guess++;
        alert("OOPS SORRY!! THE NUMBER IS " + y);
      }
      else
      {
        guess++;
        alert("OOPS SORRY!! THE NUMBER IS " + y)
      }
    
  }
  
  return (
    <div className=" justify-center mt-20 pb-20 bg-green-700">  
        
            <Confetti
              width={width}
              height={height}
            />
          
      <div className="flex justify-center mt-20">
        <div className="w-1/2 flex flex-col pb-20 ">
        <p className="text-4xl font-bold underline text-center mt-10">
      Guess Me!
        </p>
      <div className="text-green-700">
        Counter: <span>{counter?.value ?? "??"}</span>
        <br />
      </div>

      
      <button className=" text-2xl font-bold text-center"
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
         Choose a number between 1 and 10!
      </button>
          

          <input
            placeholder="Enter a number between 1 - 50"
            className="mt-14 border rounded p-4 text-xl "
            onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
            
          />
             <br />


          <button type="button" onClick={async () => {
          check();
            console.log("new number value:", formInput);
            rad();
          }}
            className="font-bold mt-20 bg-green-500 text-white text-2xl rounded p-4 shadow-lg">
            Spin Number
          </button>
        </div>
      </div>
     
    </ div>
  );
};
export default Guess