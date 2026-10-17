function Tarjeta() {
  return (
    <article
      id="proyectos"
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '18px',
        padding: '20px',
        boxShadow: '0 8px 20px rgba(15, 23, 42, 0.06)',
      }}
    >
      <div
        style={{
          height: '140px',
          background: 'linear-gradient(135deg, #c7d2fe, #bfdbfe)',
          borderRadius: '14px',
          marginBottom: '16px',
        }}
      />

      <p style={{ margin: 0, color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Proyecto
      </p>
      <h3 style={{ margin: '10px 0', color: '#111827', fontSize: '1.4rem' }}>Diseño personal</h3>
      <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6 }}>
        Desarrollo de una interfaz moderna y clara para presentar información personal, habilidades y proyectos.
      </p>

      <button
        type="button"
        style={{
          marginTop: '18px',
          border: 'none',
          background: '#111827',
          color: '#ffffff',
          padding: '10px 16px',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        Ver más
      </button>
    </article>
  )
}

export default Tarjeta
