import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAlllowd, setNumberAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordInput = useRef(null);

  const passwordGenerater = useCallback(() => {
    let pass = ""; // Initialize an empty string to store the password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyz"; // Base string with lowercase and uppercase letters
  
    // Conditionally add numbers and special characters to the string
    if (numberAlllowd) {
      // Ensure at least one number in the password
      pass += Math.floor(Math.random() * 10); // Append a random number (0-9)
      str += "0123456789";
    }
    if (charAllowed) str += "!@#$%^&*{}~";
  
    // Loop to generate the password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1); // Generate a random index within the string's length
      pass += str.charAt(char); // Append the character at the random index to the password string
      console.log(char)
    }
    
    setPassword(pass); // Update the password state with the generated password
  }, [length, numberAlllowd, charAllowed, setPassword]);
  const copyPasswordToclip = useCallback( () => {
    passwordInput.current?.select();
    passwordInput.current.setSelectionRange(0,20) 
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerater()
  }, [length, numberAlllowd, charAllowed, passwordGenerater])
  return (
    <>
      <div className="w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-black">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="outline-none w-full py-1 px-3 "
            ref={passwordInput}
          />
          <button 
          onClick={copyPasswordToclip}
          className="bg-green-500 px-4 py-2 mx-2 rounded-lg transition-all duration-300 transform active:translate-y-1">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2  text-orange-400">
          <div className="flex items-center gap-x-1">
            <input
              onChange={(e) => setLength(e.target.value)}
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
           <input
              type="checkbox"
              defaultChecked={numberAlllowd}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              SetCharAllowed((prev) => !prev);
            }} />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
