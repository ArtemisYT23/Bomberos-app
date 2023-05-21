import { Routes, Route, HashRouter, Navigate } from "react-router-dom"
import { Private } from "./pages/Private"
import { PublicRoute, PrivateRoute } from "./routes/routes"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoute.private} />} />
        <Route path={`${PrivateRoute.private}/*`} element={<Private/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
