JSX
import { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
export default function App() {
  const [state, setState] = useState({ loading: true })
  useEffect(() => {
    fetch(`${API_URL}/api/v1/health/`)
      .then(async (res) => setState({ loading: false, ok: res.ok, data: await res.json() }))
      .catch((err) => setState({ loading: false, ok: false, error: err.message }))
}, [])
if (state.loading) return <p>Comprobando estado del sistema...</p>
return (
  <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
    <h1>&lt;nombre-proyecto&gt; · Walking Skeleton</h1>
    {state.ok ? (
      <p> API y PostgreSQL en línea (database: {state.data.database})</p>
    ) : (
      <p> Sistema no disponible {state.error ?? state.data?.detail}</p>
    )}
  </main>
  )
}