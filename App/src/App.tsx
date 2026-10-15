import { Route, Routes } from "react-router"
import { AppShell } from "@/components/layout/app-shell"
import { HomePage } from "@/pages/home-page"
import { StudioPage } from "@/pages/studio-page"

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="studio" element={<StudioPage />} />
      </Route>
    </Routes>
  )
}
