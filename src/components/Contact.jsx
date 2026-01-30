

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 80px",
        background: "#0f172a",
        color: "#f8fafc",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "40px",
          fontWeight: "700",
          marginBottom: "30px",
        }}
      >
        Let’s Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          maxWidth: "720px",
          fontSize: "18px",
          opacity: 0.9,
          marginBottom: "50px",
        }}
      >
        I’m open to full-time roles, remote opportunities, and contract work in
        web development and cybersecurity. If you’re looking for someone who
        values clean code, secure systems, and thoughtful design — let’s talk.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        <a
          href="mailto:your.email@example.com"
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            background: "#38bdf8",
            color: "#020617",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Contact Me
        </a>

        <a
          href="/resume.pdf"
          download
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            border: "1px solid #38bdf8",
            color: "#38bdf8",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
