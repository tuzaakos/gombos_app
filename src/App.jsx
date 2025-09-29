import { useState } from "react";
import { useEffect } from "react";
import Kartya from "./components/Kartya.jsx";


function App() {
  const szam = 2;
  const [uzenet, setUzenet] = useState("");
  const [db, setDb] = useState(0);

  function Tippel(tipp){
    if (tipp === szam) {
      setUzenet("Helyes!")
  }
  else {
    setUzenet("Helytelen!")
    setDb(db + 1);
  }
  }
  return (
    <>
      <h2>Tippelj egy számra 1 és 5 között:</h2>
      <button onClick={() => Tippel(1)}>1</button>
      <button onClick={() => Tippel(2)}>2</button>
      <button onClick={() => Tippel(3)}>3</button>
      <button onClick={() => Tippel(4)}>4</button>
      <button onClick={() => Tippel(5)}>5</button>
      
      <h3>A tipped: {uzenet}</h3>
      <p>Tippek száma: {db}</p>

      <Kartya />
    </>
  )
}

export default App
