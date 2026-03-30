type Props = {
  title: string;
  onMenuClick: () => void;
  isMenuOpen: boolean;
};

export default function Header({ title, onMenuClick, isMenuOpen }: Props) {
  return (
    <header className="dash-header">
      <div>
        <h1 className="dash-h1">{title}</h1>
        <p className="dash-subtitle">A simple dashboard UI demo.</p>
      </div>

      <div className="dash-header-actions">
        <button
          className="dash-icon-btn dash-menu-btn"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={onMenuClick}
        >
          <span className="dash-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div className="dash-search">
          <input
            className="dash-input"
            placeholder="Search…"
            aria-label="Search"
          />
        </div>
        <button className="dash-btn" type="button">
          Export
        </button>
        <button className="dash-btn dash-btn-primary" type="button">
          Create
        </button>
      </div>
    </header>
  );
}
