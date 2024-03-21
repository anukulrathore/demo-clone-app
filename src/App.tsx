import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Careers from "./pages/Careers"

function App() {
  

  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/career" element={<Careers />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
