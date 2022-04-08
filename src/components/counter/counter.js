import React, {useState, useEffect} from "react";

export const Counter = () => {
    const [count, setCounter ] = useState(0); // bei Ännderung der State => wird gerendert
    
    useEffect(() => { // Aufgerufen wenn, der Component gerendert wird
        setCounter(count);
    }); // worauf solls hören? Wenn sich dieser Wert ändert, soll das passieren
    
    console.log("render");

    return ( 
        <div>
            <div>Counter: {count}</div>
            <button onClick={() => setCounter(count + 1)}>Add Scharf</button>
        </div>
    );
};

// export default Counter;
