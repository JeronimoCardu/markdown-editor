export default function getLocalStorage() {
  const stored = localStorage.getItem("files");
  return stored ? JSON.parse(stored) : [];
}
