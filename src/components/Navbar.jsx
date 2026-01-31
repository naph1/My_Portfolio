import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 text-sm font-medium transition
     ${
       isActive
         ? "text-[var(--accent)]"
         : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
     }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-[var(--surface)]/90 border-b border-[var(--border)] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

        {/* Brand */}
        <NavLink
          to="/"
          className="text-lg font-bold tracking-wide text-[var(--text-primary)]"
        >
          Naphtali Peter
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/web-development" className={linkClass}>Web Development</NavLink>
          <NavLink to="/cybersecurity" className={linkClass}>Cybersecurity</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-11 h-6 rounded-full
                       bg-[var(--surface-muted)]
                       border border-[var(--border)]
                       transition"
          >
            <span
              className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full
                          bg-[var(--accent)]
                          transition-transform duration-300
                          ${
                            theme === "dark"
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
            />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle (mobile) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-10 h-5 rounded-full
                       bg-[var(--surface-muted)]
                       border border-[var(--border)]"
          >
            <span
              className={`absolute top-[2px] left-[2px] h-4 w-4 rounded-full
                          bg-[var(--accent)]
                          transition-transform duration-300
                          ${
                            theme === "dark"
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
            />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg border border-[var(--border)]
                       text-[var(--text-primary)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="flex flex-col py-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/web-development" className={linkClass}>Web Development</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/cybersecurity" className={linkClass}>Cybersecurity</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
