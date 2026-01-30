import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.title}>Project Case Study</h2>

      <p style={styles.label}>Project ID</p>
      <p style={styles.value}>{id}</p>

      <p style={styles.text}>
        This project demonstrates problem solving, technical execution,
        and real-world application of modern development and security practices.
      </p>
    </section>
  );
}

const styles = {
  wrapper: {
    maxWidth: "800px",
    margin: "6rem auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  label: {
    opacity: 0.6,
    fontSize: "0.85rem",
  },
  value: {
    fontWeight: 600,
    marginBottom: "1.5rem",
  },
  text: {
    lineHeight: 1.7,
    opacity: 0.85,
  },
};
