import { Link } from "react-router";
import logo from "@/assets/logo.png";

const items = [
  { label: "Overview", href: "/" },
  { label: "Analytics", href: "/analytics" },
  { label: "Customers", href: "/customers" },
  { label: "Settings", href: "/settings" },
];

type Props = {
  isOpen: boolean;
  onNavigate: () => void;
};

export default function Sidebar({ isOpen, onNavigate }: Props) {
  return (
    <aside className={`dash-sidebar${isOpen ? " is-open" : ""}`}>
      <div className="dash-brand">
        <img src={logo} className="dash-logo" alt="Logo" aria-hidden />
        <div>
          <div className="dash-brand-title">Starter</div>
          <div className="dash-brand-sub">React + Webpack</div>
        </div>
      </div>

      <nav className="dash-nav" aria-label="Primary">
        {items.map((it) => (
          <Link
            to={it.href}
            key={it.label}
            className="dash-nav-item"
            onClick={onNavigate}
          >
            {it.label}
          </Link>
        ))}
      </nav>

      <div className="dash-sidebar-footer">
        <div className="dash-muted">Signed in as</div>
        <div className="dash-strong">demo@local</div>
      </div>
    </aside>
  );
}
