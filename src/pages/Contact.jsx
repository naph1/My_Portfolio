export default function Contact() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Contact
          </h1>
          <p className="text-lg max-w-2xl text-[var(--text-secondary)]">
            I’m open to opportunities in web development, software engineering,
            and cybersecurity-focused roles. If you’d like to discuss a role,
            collaboration, or project, feel free to reach out.
          </p>
        </header>

        {/* Contact Card */}
        <div className="rounded-xl border border-[var(--border)]
                        bg-[var(--surface-elevated)] p-8 space-y-6">

          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--text-secondary)]">
              Email
            </p>
            <a
              href="mailto:your.email@example.com"
              className="text-lg font-medium text-[var(--accent)] hover:underline"
            >
              peternaph19@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--text-secondary)]">
              GitHub
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-[var(--text-primary)] hover:underline"
            >
              github.com/naph1
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--text-secondary)]">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-[var(--text-primary)] hover:underline"
            >
              linkedin.com/in/naphtali-peter-501887298
            </a>
          </div>

          {/* CV */}
          <div className="pt-4">
            <a
              href="\assets\cv\Naphtali's CV(resume).pdf"
              target="_blank"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg font-medium
                bg-[var(--accent)] text-white
                hover:opacity-90 transition
              "
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
