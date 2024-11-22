import { Route, Routes } from "react-router-dom"
import Start from "./pages/start/Start";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
    </Routes>
  )
}
export default App;