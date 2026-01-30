import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-24 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= HERO ================= */}
        <header className="space-y-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            Full-Stack Developer & Cybersecurity Engineer
          </h1>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            I build production-ready web applications and apply hands-on
            cybersecurity engineering to design systems that are secure,
            resilient, and grounded in real-world threat models.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/projects"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg font-medium
                border border-[var(--border)]
                text-white
                bg-[var(--accent)]
                hover:opacity-90
                transition
              "
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg font-medium
                border border-[var(--border)]
                text-[var(--text-primary)]
                hover:bg-[var(--surface-muted)]
                transition
              "
            >
              Contact Me
            </Link>
          </div>
        </header>

        {/* ================= VALUE SECTIONS ================= */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Web Development
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Full-stack systems built with React, APIs, and structured data
              flows — focused on maintainability, performance, and clarity.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Cybersecurity & DFIR
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Practical security work including Linux hardening, SIEM analysis,
              PCAP inspection, and incident response simulations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Security-First Engineering
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Every system is designed with threat awareness, risk reduction,
              and long-term resilience as first-class concerns.
            </p>
          </div>
        </section>

      </div>
    </section>
  );
}
