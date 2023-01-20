import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { Motion } from "./pages/Motion"
import { Teste } from "./pages/Teste"



export function Router() {
  return (
    <Routes  >
      <Route path="/" element={<Home />} />
      <Route path="/teste" element={<Teste />} />
      <Route path="/motion" element={<Motion />} />
    </Routes>
  )
}