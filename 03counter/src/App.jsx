import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
    let [counter, setCounter] = useState(10)

    const addValue = () => {
      if (counter < 20){
        setCounter(counter + 1)
      }
    }

    const removeValue = () => {
      if (counter > 0){
        setCounter(counter - 1)
      }
    }

    return (
        <>
            <h1>MahaShivaRatri</h1>
            <p>Counter: {counter}</p>
            <button onClick={addValue}>add</button>
            <button onClick={removeValue}>remove</button>
            <p>Counter: {counter}</p>
        </>
    )
}

export default App
