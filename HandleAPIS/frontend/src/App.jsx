import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // ()() this is Immideatly invoked function
    setError(false)
    ;(async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/products')
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [])

  if (error) {
    return <h1>Something Went Wrong.</h1>
  }

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Handle API Like a Pro...</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
