// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Guess } from "../codegen/Tables.sol";

contract GuessSystem() is System {
  function guess() public returns (uint32, address, uint32, uint32 ) {
    uint32 counter = Counter.get();
    uint32 newValue = counter + 1;
    Counter.set(newValue);
    address wallet = _msg.sender();
    uint32 randomness = rand;
    uint userinput = usr;
    Guess.set(newValue, wallet, randomness, userinput )
    return (newValue);
  }
}
