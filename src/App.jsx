import { useState } from 'react'
import heroImg from './assets/jesus.png'
import reactLogo from './assets/jesus.png'
import viteLogo from './assets/jesus.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>HOLA MUNDO</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onMouseEnter={() => setCount((count) => count + 1)}
          //pasa el cursor y aumenta los count
          //onclick presiona
          //ondoubleclick presionar dos besee
        >
          Count is {count}
        </button>
      </section>

    </>
  )
}

export default App
