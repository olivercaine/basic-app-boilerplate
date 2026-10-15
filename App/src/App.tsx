import { Route, Routes } from "react-router"
import { AppShell } from "@/components/layout/app-shell"
import { AirbnbHome } from "@/pages/airbnb-home"
import { StudioPage } from "@/pages/studio-page"

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<AirbnbHome />} />
        <Route path="studio" element={<StudioPage />} />
      </Route>
    </Routes>
  )
}
