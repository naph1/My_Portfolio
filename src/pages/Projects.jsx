export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ================= HEADER ================= */}
        <header className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Projects & Case Studies
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            A curated selection of projects spanning full-stack web development
            and cybersecurity. Each project highlights practical problem-solving,
            system design decisions, and real-world trade-offs.
          </p>
        </header>

        {/* ================= WEB DEVELOPMENT ================= */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
            Web Development
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Recipe Remixer */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 space-y-5">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                Recipe Remixer (AI-Powered)
              </h3>

              <p className="text-[var(--text-secondary)]">
                An AI-driven cooking assistant that transforms available
                ingredients into fully structured recipes based on cuisine or
                dietary preferences.
              </p>

              <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                <li>Prompt engineering with strict JSON output enforcement</li>
                <li>Dynamic UI rendering for ingredients, steps, and nutrition</li>
                <li>Designed for sharing, exporting, and completion workflows</li>
              </ul>

              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">React / Next.js</span>
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">Tailwind CSS</span>
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">Google Gemini API</span>
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">Prompt Engineering</span>
              </div>

              <a
                href="https://github.com/naph1/recipe-remixer-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* Event Aggregator */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 space-y-5">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                Vibe-Based Event Aggregator
              </h3>

              <p className="text-[var(--text-secondary)]">
                A data-heavy event discovery platform that allows users to find
                local events based on mood, energy level, and social context.
              </p>

              <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                <li>Non-traditional “vibe-based” discovery model</li>
                <li>Geospatial filtering by distance and price</li>
                <li>Optimized PostgreSQL queries for real-time data</li>
              </ul>

              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">React</span>
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">Supabase (PostgreSQL)</span>
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">Leaflet / MapLibre</span>
                <span className="px-2 py-1 rounded bg-[var(--surface-muted)]">API Integration</span>
              </div>

              <a
                href="https://github.com/naph1/vibe-event-aggregator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub →
              </a>
            </div>

          </div>
        </section>

        {/* ================= CYBERSECURITY ================= */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
            Cybersecurity & DFIR
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* OverTheWire */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 space-y-5">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                OverTheWire Wargames
              </h3>

              <p className="text-[var(--text-secondary)]">
                A series of Linux-focused security challenges emphasizing
                privilege escalation, restricted shell bypassing, and system-level exploitation.
              </p>

              <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                <li>Linux permissions and SUID/SGID abuse</li>
                <li>Advanced CLI tooling and scripting</li>
                <li>Automation for large-scale data extraction</li>
              </ul>

              <a
                href="https://github.com/naph1/overthewire-bandit-writeups"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* Juice Shop */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 space-y-5">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                OWASP Juice Shop Security Audit
              </h3>

              <p className="text-[var(--text-secondary)]">
                A comprehensive security assessment of a modern JavaScript
                application targeting OWASP Top 10 vulnerabilities.
              </p>

              <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                <li>Manual and automated vulnerability discovery</li>
                <li>SQL Injection, XSS, and authentication flaws</li>
                <li>Code-level remediation guidance</li>
              </ul>

              <a
                href="https://github.com/naph1/juice-shop-security-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* DFIR Labs */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 space-y-5">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                DFIR Incident Response Labs
              </h3>

              <p className="text-[var(--text-secondary)]">
                Hands-on DFIR simulations involving real attack traffic,
                forensic artifacts, and SIEM-based investigation workflows.
              </p>

              <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                <li>PCAP analysis and C2 beacon detection</li>
                <li>MITRE ATT&CK mapping</li>
                <li>Incident timeline reconstruction</li>
              </ul>

              <a
                href="https://github.com/naph1/dfir-incident-response-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* CISA Tabletop */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 space-y-5">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                CISA Cybersecurity Tabletop Exercise
              </h3>

              <p className="text-[var(--text-secondary)]">
                Facilitated a ransomware-focused tabletop exercise evaluating
                organizational readiness and crisis response coordination.
              </p>

              <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                <li>Business continuity and crisis communication</li>
                <li>Supply-chain risk analysis</li>
                <li>After-Action Report with remediation steps</li>
              </ul>

              <a
                href="https://github.com/naph1/cisa-tabletop-aar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub →
              </a>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}
