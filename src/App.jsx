import { useState } from 'react'
import {Button} from "@shadcn/ui/button"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500'>hello react</h1>
      <Button>Click me</Button>

    </>
  )
}

export default App
