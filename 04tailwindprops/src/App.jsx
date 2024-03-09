import { useState } from "react"
import "./App.css"
import Card from "./components/Card"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="bg-green-500 text-black p-4 rounded-xl">
                Tailwind Test
            </h1>
            <Card
                username="Rachana"
                image="https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card 
              username="Aayushma"
              image="https://images.unsplash.com/photo-1485586752437-03021cfb7ea4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              />
        </>
    )
}

export default App
