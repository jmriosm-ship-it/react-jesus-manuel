function Header() {
  return (
    <header
      style={{
        background: 'linear-gradient(135deg, #1f2937, #374151)',
        color: '#ffffff',
        padding: '24px 32px',
        borderRadius: '18px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: '0.85rem', letterSpacing: '0.12em', opacity: 0.8 }}>
            PORTAFOLIO
          </p>
          <h1 style={{ margin: '8px 0 0', fontSize: '2rem' }}>Jesús Manuel Ríos Mejía</h1>
        </div>

        <nav
          style={{
            display: 'flex',
            gap: '18px',
            flexWrap: 'wrap',
            fontSize: '0.95rem',
          }}
        >
          <a href="#inicio" style={{ color: '#ffffff', textDecoration: 'none' }}>Inicio</a>
          <a href="#perfil" style={{ color: '#ffffff', textDecoration: 'none' }}>Perfil</a>
          <a href="#proyectos" style={{ color: '#ffffff', textDecoration: 'none' }}>Proyectos</a>
          <a href="#contacto" style={{ color: '#ffffff', textDecoration: 'none' }}>Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
