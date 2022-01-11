import "./common.scss"
import {Reset} from "styled-reset"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from "./pages/Main"

const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
