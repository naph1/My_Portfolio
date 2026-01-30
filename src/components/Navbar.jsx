import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

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
    `px-3 py-2 text-sm font-medium transition
     ${
       isActive
         ? "text-[var(--accent)]"
         : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
     }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur
                    bg-[var(--surface)]/80 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

        {/* Brand */}
        <NavLink
          to="/"
          className="text-lg font-bold tracking-wide text-[var(--text-primary)]"
        >
          Naphtali Peter
        </NavLink>

        {/* Links + Theme Toggle */}
        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/web-development" className={linkClass}>
            Web Development
          </NavLink>

          <NavLink to="/cybersecurity" className={linkClass}>
            Cybersecurity
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative ml-2 w-11 h-6 rounded-full
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
      </div>
    </nav>
  );
}
