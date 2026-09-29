import { useEffect, useState } from 'react'

export default function App() {
  const [state, setState] = useState({ loading: true })

  useEffect(() => {
    // Al usar solo la ruta relativa (/api/...), usamos el proxy sin activar el error CORS
    fetch('/api/v1/health/')
      .then(async (res) => setState({ loading: false, ok: res.ok, data: await res.json() }))
      .catch((err) => setState({ loading: false, ok: false, error: err.message }))
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center', width: '100%', maxWidth: '450px' }}>
        <h1 style={{ color: '#1e293b', fontSize: '24px', margin: '0 0 10px 0' }}>Control de Citas</h1>
        <p style={{ color: '#64748b', fontSize: '16px', margin: '0 0 30px 0' }}>Walking Skeleton</p>
        
        {state.loading ? (
          <p style={{ color: '#94a3b8' }}>⏳ Comprobando estado del sistema...</p>
        ) : state.ok ? (
          <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '20px' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>✅</div>
            <h2 style={{ color: '#065f46', fontSize: '20px', margin: '0 0 10px 0' }}>Sistema en Línea</h2>
            <p style={{ color: '#047857', margin: '5px 0', fontWeight: '500' }}>Status API: {state.data?.status}</p>
            <p style={{ color: '#047857', margin: '5px 0', fontWeight: '500' }}>Database: {state.data?.database}</p>
          </div>
        ) : (
          <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '20px' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>❌</div>
            <h2 style={{ color: '#991b1b', fontSize: '20px', margin: '0 0 10px 0' }}>Error de Conexión</h2>
            <p style={{ color: '#b91c1c', margin: 0 }}>{state.error ?? state.data?.detail}</p>
          </div>
        )}
      </div>
    </div>
  )
}