import { useState } from "react";

function App() {
  const szam = 2;
  const [uzenet, setUzenet] = useState("");

  function Tippel(tipp){
    if (tipp === szam) {
      setUzenet("Jól tippeltél!")
  }
  else {
    setUzenet("Rossz tipp!")
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
      
      <h3>{uzenet}</h3>
    </>
  )
}

export default App
