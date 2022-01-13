import "./common.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Main from "./pages/Main"
import Select from "./pages/Select"
import GlobalStyle from "./styles/GlobalStyle.js"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
