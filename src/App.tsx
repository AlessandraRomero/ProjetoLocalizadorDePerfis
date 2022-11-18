import { useState } from 'react'
import { FormPerfil } from './components/FormPerfil'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormPerfil />
    </div>
  )
}

export default App
