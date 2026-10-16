import { Route, Routes } from "react-router"
import AirbnbHome from "@/pages/AirbnbHome"

export default function App() {
  return (
    <Routes>
      <Route index element={<AirbnbHome />} />
    </Routes>
  )
}
