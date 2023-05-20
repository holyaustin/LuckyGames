import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
//import { Navbar } from "./components";

const Guess = () => {
  const {
    components: { Counter },
    systemCalls: { increment },
    network: { singletonEntity },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);

  return (
    <>  
        <p className="text-4xl font-bold underline">
      Hello world!
    </p>
      <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button>
     
    </>
  );
};
export default Guess