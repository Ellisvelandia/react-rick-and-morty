import React, {useEffect} from 'react'

function App() {

  useEffect(() => {
  console.log("charge")
  }, [])

  return (
    <div>Rick and Morty</div>
  )
}

export default App

