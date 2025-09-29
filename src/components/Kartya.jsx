import { useState } from "react";

function Kartya() {
    
    const [adatok, setAdatok] = useState({cimzett: "", szoveg: ""});

    return 
    <>
        <label htmlFor="cimzett">Címzett neve</label>
        <input type="text" id="cimzett" name="cimzett" 
        value={adatok.cimzett} 
        onChange={(e) => setAdatok({...adatok, cimzett: e.target.value})}
        />
        <br />
        <label htmlFor="szoveg">Kártya szövege</label>
        <textarea name="szoveg" id="szoveg" value={adatok.szoveg} 
        onChange={(e) => setAdatok({...adatok, szoveg: e.target.value})}
        ></textarea>

        <p>Cimzett: {adatok.cimzett}</p>
        <p>Szöveg: {adatok.szoveg}</p>
    </>
}

export default Kartya;