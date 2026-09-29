import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export default function App() {
  const [state, setState] = useState({ loading: true })

  useEffect(() => {
    fetch(`${API_URL}/api/v1/health/`)
      .then(async (response) => {
        const data = await response.json()
        setState({ loading: false, ok: response.ok, data })
      })
      .catch((error) => {
        setState({ loading: false, ok: false, error: error.message })
      })
  }, [])

  if (state.loading) {
    return <p>Comprobando estado del sistema...</p>
  }

  return (
    <main>
      <section className="card">
        <p className="eyebrow">SALA DE MAESTROS ULSA</p>
        <h1>Control de citas</h1>
        {state.ok ? (
          <p>
            API y PostgreSQL en línea
            (base de datos: {state.data.database.name}).
          </p>
        ) : (
          <p>Sistema no disponible: {state.error ?? state.data?.detail}</p>
        )}
      </section>
    </main>
  )
}
