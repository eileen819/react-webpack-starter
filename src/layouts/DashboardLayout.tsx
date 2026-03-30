import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

type Props = {
  title?: string;
};

export default function DashboardLayout({ title = "Demo Overview" }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isSidebarOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSidebarOpen]);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="dash-root">
      <div
        className={`dash-overlay${isSidebarOpen ? " is-open" : ""}`}
        role="presentation"
        onClick={closeSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} onNavigate={closeSidebar} />
      <div className="dash-main">
        <Header
          title={title}
          isMenuOpen={isSidebarOpen}
          onMenuClick={() => setIsSidebarOpen((v) => !v)}
        />
        <div className="dash-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
