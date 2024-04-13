import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    // ()() this is Immideatly invoked function
    const controller = new AbortController()
    setError(false)
    ;(async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        })

        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Canceled", error.message);
          return
        }
        setError(true)
        setLoading(false)
      }
    })()

    //cleanup code
    return () => {
      controller.abort()
    }

  }, [search])

  return (
    <>
      <h1>Handle API Like a Pro...</h1>

      <input 
        type="text" 
        placeholder='Search here'
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Something went wrong...</h1>)}

      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
