import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { AsideNavigation } from "./components/home/aside/AsideNavigation";
import { ContentMain } from "./components/home/content/ContentMain";
import { Navbar } from "./components/Navbar";
import { Router } from "./Router";


export function App() {


  return (
    <AnimatePresence initial={false}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </AnimatePresence>
  )
}