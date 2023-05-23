import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Guess: {
      keySchema: {
        id:"uint32",
        wallet: "address",
        randomness: "uint32",
        playerinput: "uint32",
      },
      schema: "uint32",
    },
  },
});
