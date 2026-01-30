const API_BASE = "http://127.0.0.1:5000/api";

export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/projects/`);
  if (!res.ok) throw new Error("Failed to load projects");
  return res.json();
}

export async function fetchCybersecurity() {
  const res = await fetch(`${API_BASE}/cybersecurity/`);
  if (!res.ok) throw new Error("Failed to load cybersecurity data");
  return res.json();
}

export async function fetchContact() {
  const res = await fetch(`${API_BASE}/contact/`);
  if (!res.ok) throw new Error("Failed to load contact info");
  return res.json();
}
