import "./styles/dashboard.css";
import { lazy, Suspense } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import Overview from "@/pages/Overview";
import Loading from "@/components/Loading";
import { BrowserRouter, Route, Routes } from "react-router";

const Analytics = lazy(() => import("./pages/Analytics"));
const Customers = lazy(() => import("./pages/Customers"));
const Settings = lazy(() => import("./pages/Settings"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route
            path="analytics"
            element={
              <Suspense fallback={<Loading />}>
                <Analytics />
              </Suspense>
            }
          />
          <Route
            path="customers"
            element={
              <Suspense fallback={<Loading />}>
                <Customers />
              </Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <Suspense fallback={<Loading />}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
