import "./common.css"
import {Reset} from "styled-reset"
import {BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <Routes></Routes>
    </BrowserRouter>
  )
}

export default App
