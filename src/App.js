import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom"
import * as React from "react"
import Canvas from "./views/canvas/index"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/canvas" element={<Canvas />} />
          <Route path="*" element={<Navigate to="/canvas" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
