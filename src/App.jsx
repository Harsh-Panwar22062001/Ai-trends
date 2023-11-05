import Canvas from './canvas/Canvas'
import Caustomizer from './pages/Caustomizer'
import Home from './pages/Home'

import './App.css'

function App() {

  return (
    
    <>
      <main className="app-transition-all ease-in">
       <Home/>
       <Canvas/>
       <Caustomizer/>
      </main>
    </>
  )
}

export default App
