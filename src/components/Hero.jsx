import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      style={{
        padding: "140px 80px 120px",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "#f8fafc",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "58px",
          fontWeight: "800",
          marginBottom: "24px",
          letterSpacing: "-1px",
        }}
      >
        Naphtali Peter
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: "24px",
          fontWeight: "500",
          color: "#38bdf8",
          marginBottom: "32px",
        }}
      >
        Full-Stack Web Developer & Cybersecurity-Focused Engineer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          fontSize: "19px",
          maxWidth: "760px",
          lineHeight: "1.7",
          opacity: 0.9,
          marginBottom: "48px",
        }}
      >
        I build secure, scalable, and high-performance web applications with a
        strong focus on clean architecture, modern user experience, and
        security-first thinking. I bridge development and cybersecurity to
        deliver systems that are reliable, resilient, and production-ready.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        <a
          href="#projects"
          style={{
            padding: "14px 30px",
            borderRadius: "12px",
            background: "#38bdf8",
            color: "#020617",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          View Projects
        </a>

        <a
          href="#contact"
          style={{
            padding: "14px 30px",
            borderRadius: "12px",
            border: "1px solid #38bdf8",
            color: "#38bdf8",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
