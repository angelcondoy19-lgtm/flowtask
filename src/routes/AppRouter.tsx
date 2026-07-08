import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/dashboard/Dashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}