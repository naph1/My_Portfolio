import { useState } from "react";

export default function Cybersecurity() {
  const [activeImage, setActiveImage] = useState(null);
  const [showLinuxMore, setShowLinuxMore] = useState(false);
  const [showNetworkMore, setShowNetworkMore] = useState(false);

  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ================= HERO ================= */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Cybersecurity & Network Engineering
          </h1>
          <p className="text-lg max-w-3xl text-[var(--text-secondary)] leading-relaxed">
            Hands-on cybersecurity engineering through Linux administration,
            network monitoring, and defensive lab environments designed to
            simulate real-world threats.
          </p>
        </header>

        {/* ================= TIMELINE ================= */}
        <section className="relative pl-12 border-l-2 border-[var(--border-strong)] space-y-24">

          {/* ===== Linux Security ===== */}
          <div className="relative space-y-6">
            <span className="absolute -left-[26px] top-2 h-4 w-4 rounded-full bg-[var(--timeline-dot)]" />

            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Linux & Ubuntu System Security
            </h2>

            <p className="max-w-3xl text-[var(--text-secondary)]">
              Designed and hardened Linux and Ubuntu systems to simulate
              real-world server environments. Implemented strict user privilege
              separation, secured remote access via SSH hardening, and applied
              firewall rules to reduce attack surfaces. Conducted system auditing
              and log analysis to detect misconfigurations and unauthorized
              access attempts, reinforcing defense-in-depth principles.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                <p className="font-medium mb-3 text-[var(--text-primary)]">
                  Key Focus Areas
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                  <li>User & privilege management</li>
                  <li>Firewall and SSH hardening</li>
                  <li>Log analysis and auditing</li>
                  <li>Service and port optimization</li>
                  <li>Automated Security patching</li>
                  <li>Disk encryption and file system security</li>
                  <li>Storage security and file integration</li>
                  <li>System resource and process monitoring</li>
                </ul>
              </div>

              <div className="space-y-4">
                <img
                  src="/assets/cybersecurity/linux-system-hardening-1.png"
                  alt="Linux system hardening"
                  onClick={() =>
                    setActiveImage("/assets/cybersecurity/linux-system-hardening-1.png")
                  }
                  className="cursor-pointer rounded-xl border border-[var(--border)] hover:opacity-90"
                />

                {showLinuxMore && (
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/assets/cybersecurity/linux-system-hardening-2.png"
                      alt="Linux system hardening"
                      onClick={() =>
                        setActiveImage("/assets/cybersecurity/linux-system-hardening-2.png")
                      }
                      className="cursor-pointer rounded-xl border border-[var(--border)] hover:opacity-90"
                    />
                    <img
                      src="/assets/cybersecurity/linux-system-hardening-3.png"
                      alt="Linux system hardening"
                      onClick={() =>
                        setActiveImage("/assets/cybersecurity/linux-system-hardening-3.png")
                      }
                      className="cursor-pointer rounded-xl border border-[var(--border)] hover:opacity-90"
                    />
                  </div>
                )}

                <button
                  onClick={() => setShowLinuxMore(!showLinuxMore)}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  {showLinuxMore ? "Show less" : "See more"}
                </button>
              </div>
            </div>
          </div>

          {/* ===== Security Onion ===== */}
          <div className="relative space-y-6">
            <span className="absolute -left-[26px] top-2 h-4 w-4 rounded-full bg-[var(--timeline-dot)]" />

            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Security Onion & Network Monitoring
            </h2>

            <p className="max-w-3xl text-[var(--text-secondary)]">
              Deployed and configured Security Onion within a controlled lab
              environment to monitor east–west and north–south network traffic.
              Leveraged Suricata for intrusion detection, Zeek for protocol and
              metadata analysis, and the Elastic Stack for centralized logging
              and visualization. Practiced alert triage and correlation to
              distinguish between benign activity and actionable threats.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                <p className="font-medium mb-3 text-[var(--text-primary)]">
                  Tools & Methods
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                  <li>Suricata IDS alerts</li>
                  <li>Zeek traffic metadata</li>
                  <li>Elastic Stack dashboards</li>
                  <li>Alert triage</li>
                  <li>Network traffic visibility</li>
                  <li>Packet-level deep dive</li>
                  <li>Centralized log management</li>
                </ul>
              </div>

              <img
                src="/assets/cybersecurity/security-onion-dashboard.png"
                alt="Security Onion dashboard"
                onClick={() =>
                  setActiveImage("/assets/cybersecurity/security-onion-dashboard.png")
                }
                className="cursor-pointer rounded-xl border border-[var(--border)] hover:opacity-90"
              />
            </div>
          </div>

          {/* ===== Network Analysis ===== */}
          <div className="relative space-y-6">
            <span className="absolute -left-[26px] top-2 h-4 w-4 rounded-full bg-[var(--timeline-dot)]" />

            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Network Traffic Analysis & Defense
            </h2>

            <p className="max-w-3xl text-[var(--text-secondary)]">
              Analyzed packet-level traffic and IDS alerts to understand attack
              patterns, reconnaissance behavior, and lateral movement
              techniques. Correlated alerts across multiple data sources to
              improve detection accuracy and reduce false positives.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                <p className="font-medium mb-3 text-[var(--text-primary)]">
                  Experience Gained
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                  <li>Packet inspection</li>
                  <li>Alert correlation</li>
                  <li>Network segmentation</li>
                  <li>Intrusion detection monitoring</li>
                  <li>Threat pattern identification</li>
                  <li>False positive reduction</li>
                  <li>Protocol and metadata analysis</li>
                  <li>Strategic defense implementation</li>
                  <li>Incident reconstruction and forensics</li>
                </ul>
              </div>

              <div className="space-y-4">
                <img
                  src="/assets/cybersecurity/network-traffic-analysis-1.png"
                  alt="Network traffic analysis"
                  onClick={() =>
                    setActiveImage("/assets/cybersecurity/network-traffic-analysis-1.png")
                  }
                  className="cursor-pointer rounded-xl border border-[var(--border)] hover:opacity-90"
                />

                {showNetworkMore && (
                  <img
                    src="/assets/cybersecurity/network-traffic-analysis-2.png"
                    alt="Network traffic analysis"
                    onClick={() =>
                      setActiveImage("/assets/cybersecurity/network-traffic-analysis-2.png")
                    }
                    className="cursor-pointer rounded-xl border border-[var(--border)] hover:opacity-90"
                  />
                )}

                <button
                  onClick={() => setShowNetworkMore(!showNetworkMore)}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  {showNetworkMore ? "Show less" : "See more"}
                </button>
              </div>
            </div>
          </div>

        </section>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
        >
          <img
            src={activeImage}
            alt="Expanded view"
            className="max-h-[90vh] max-w-full rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
