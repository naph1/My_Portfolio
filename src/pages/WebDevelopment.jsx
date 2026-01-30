import { useState } from "react";

export default function WebDevelopment() {
  const [showFrontendMore, setShowFrontendMore] = useState(false);

  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ================= HERO ================= */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Web Development & Software Engineering
          </h1>
          <p className="text-lg max-w-3xl text-[var(--text-secondary)] leading-relaxed">
            Practical, systems-oriented web engineering demonstrated through
            real-world applications that integrate frontend interfaces,
            backend logic, APIs, and external services.
          </p>
        </header>

        {/* ================= TIMELINE ================= */}
        <section className="relative pl-12 border-l-2 border-[var(--border-strong)] space-y-24">

          {/* ===== Voice-Based Email System ===== */}
          <div className="relative space-y-6">
            <span className="absolute -left-[26px] top-2 h-4 w-4 rounded-full bg-[var(--timeline-dot)]" />

            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Voice-Based Email System
            </h2>

            <p className="max-w-3xl text-[var(--text-secondary)] leading-relaxed">
              Designed and implemented a voice-driven email system that enables
              users to compose, send, and manage emails using speech input.
              The project emphasizes accessibility, automation, and robust
              system integration.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                <p className="font-medium mb-3 text-[var(--text-primary)]">
                  Core Capabilities
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                  <li>Speech-to-text email composition</li>
                  <li>Voice command execution</li>
                  <li>Backend-driven message handling</li>
                  <li>Integrated text-to-speech</li>
                  <li>Validation and error control</li>
                </ul>
              </div>

              <a
                href="/assets/web-development/voice-email-ui.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/web-development/voice-email-ui.png"
                  alt="Voice email user interface"
                  className="rounded-xl border border-[var(--border)] cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* ===== Frontend Engineering ===== */}
          <div className="relative space-y-6">
            <span className="absolute -left-[26px] top-2 h-4 w-4 rounded-full bg-[var(--timeline-dot)]" />

            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Frontend Architecture & Interaction
            </h2>

            <p className="max-w-3xl text-[var(--text-secondary)] leading-relaxed">
              Engineered a responsive frontend interface capable of capturing
              voice input, guiding users through spoken workflows, and
              delivering real-time feedback with accessibility in mind.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                <p className="font-medium mb-3 text-[var(--text-primary)]">
                  Frontend Responsibilities
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                  <li>Voice input capture and prompts</li>
                  <li>UI state management</li>
                  <li>Real-time data visualization</li>
                  <li>Responsive design and cross-device compatiblility</li>
                  <li>API request handling</li>
                  <li>User feedback and error states</li>
                  <li>Client-side form validation</li>
                </ul>
              </div>

              <div className="space-y-4">
                <a
                  href="/assets/web-development/voice-command-1.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/web-development/voice-command-1.png"
                    alt="Voice command processing"
                    className="rounded-xl border border-[var(--border)] cursor-pointer"
                  />
                </a>

                {showFrontendMore && (
                  <a
                    href="/assets/web-development/voice-command-2.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/assets/web-development/voice-command-2.png"
                      alt="Voice command interaction"
                      className="rounded-xl border border-[var(--border)] cursor-pointer"
                    />
                  </a>
                )}

                <button
                  onClick={() => setShowFrontendMore(!showFrontendMore)}
                  className="text-sm text-[var(--accent)] underline"
                >
                  {showFrontendMore ? "Show less" : "See more"}
                </button>
              </div>
            </div>
          </div>

          {/* ===== Backend Logic ===== */}
          <div className="relative space-y-6">
            <span className="absolute -left-[26px] top-2 h-4 w-4 rounded-full bg-[var(--timeline-dot)]" />

            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Backend Logic & API Design
            </h2>

            <p className="max-w-3xl text-[var(--text-secondary)] leading-relaxed">
              Implemented backend services responsible for processing
              speech-derived input, validating email data, and managing message
              delivery through clean, RESTful APIs.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                <p className="font-medium mb-3 text-[var(--text-primary)]">
                  Backend Focus Areas
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                  <li>REST API endpoint design</li>
                  <li>Input validation & sanitization</li>
                  <li>Email processing logic</li>
                  <li>Error handling consistency</li>
                </ul>
              </div>

              <a
                href="/assets/web-development/voice-email-api.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/web-development/voice-email-api.png"
                  alt="Backend API response"
                  className="rounded-xl border border-[var(--border)] cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* ===== Engineering Value ===== */}
          <div className="relative space-y-6">
            <span className="absolute -left-[26px] top-2 h-4 w-4 rounded-full bg-[var(--timeline-dot)]" />

            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Engineering Value & Outcomes
            </h2>

            <p className="max-w-3xl text-[var(--text-secondary)] leading-relaxed">
              This project demonstrates the ability to design and implement
              complete software systems that integrate user interaction,
              backend logic, and real-world services.
            </p>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 max-w-xl">
              <p className="font-medium mb-3 text-[var(--text-primary)]">
                Demonstrated Skills
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                <li>Full-stack system design</li>
                <li>Frontend–backend integration</li>
                <li>API-driven architecture</li>
                <li>Accessibility-focused engineering</li>
              </ul>
            </div>
          </div>

        </section>
      </div>
    </section>
  );
}
