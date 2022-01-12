import "./common.scss"
import {Reset} from "styled-reset"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from "./pages/Main"
import Select from "./pages/Select"

const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
