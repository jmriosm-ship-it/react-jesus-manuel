function Perfil() {
  return (
    //Selection para los estilos de syles
    <section
      id="perfil"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '24px',
        alignItems: 'center',
        padding: '28px 20px',
        background: '#f8fafc',
        borderRadius: '18px',
        border: '1px solid #e2e8f0',
        marginTop: '24px',
      }}
    >
      <div>
        <p style={{ margin: 0, color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Sobre mí
        </p>
        <h2 style={{ margin: '12px 0 10px', fontSize: '2rem', color: '#111827' }}>
          Estudiante de ingeniería en sistemas
        </h2>
        <p style={{ margin: 0, color: '#374151', lineHeight: 1.7, fontSize: '1rem' }}>
          Me apasiona crear soluciones digitales, aprender nuevas tecnologías y transformar ideas en proyectos funcionales.
          Busco crecer como desarrollador y construir experiencias útiles para las personas.
        </p>
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg, #dbeafe, #e0e7ff)',
          minHeight: '180px',
          borderRadius: '18px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#1e3a8a',
          fontWeight: 700,
          fontSize: '1.25rem',
        }}
      >
        ¡Siempre aprendiendo!
      </div>
    </section>
  )
}

export default Perfil
