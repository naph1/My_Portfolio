import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Skills() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={styles.wrapper}
    >
      <h2 style={styles.title}>Skills & Expertise</h2>

      <div style={styles.grid}>
        {["Web Development", "Cybersecurity", "Professional Practices"].map(
          (skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              style={styles.card}
            >
              <h3>{skill}</h3>
            </motion.div>
          )
        )}
      </div>
    </motion.section>
  );
}

const styles = {
  wrapper: {
    marginTop: "6rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2rem",
  },
  card: {
    padding: "2rem",
    borderRadius: "12px",
    background: "var(--card)",
  },
};
