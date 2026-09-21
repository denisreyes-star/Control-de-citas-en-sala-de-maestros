const apiUrl = import.meta.env.VITE_API_URL;

export default function App() {
  return (
    <main>
      <section className="card">
        <p className="eyebrow">ULSA</p>
        <h1>Control de citas</h1>
        <p>El frontend está listo para comenzar.</p>
        <small>API configurada en: {apiUrl}</small>
      </section>
    </main>
  );
}
