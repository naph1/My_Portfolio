import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { fetchPosts } from "../services/api";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <section>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Writing & Insights
      </motion.h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginTop: "2rem", display: "grid", gap: "1.5rem" }}
      >
        {posts.map((post) => (
          <motion.article
            key={post.title}
            variants={fadeUp}
            style={styles.card}
          >
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

const styles = {
  card: {
    background: "var(--card)",
    padding: "1.8rem",
    borderRadius: "14px",
    border: "1px solid var(--border)",
  },
};
