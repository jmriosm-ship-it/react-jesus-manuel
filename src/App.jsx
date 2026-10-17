import Header from './playground/header.jsx'
import Perfil from './playground/Perfil.jsx'
import Tarjeta from './playground/Tarjeta.jsx'
import DatoCurioso from './playground/DatoCurioso.jsx'
import Footer from './playground/Footer.jsx'
import './App.css'

function App() {
  return (
    <main
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '32px 20px 40px',
        fontFamily: 'Arial, sans-serif',
        background: '#f3f4f6',
      }}
    >
      <Header />
      <Perfil />

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '22px',
          marginTop: '28px',
        }}
      >
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </section>

      <DatoCurioso />
      <Footer />
    </main>
  )
}

export default App
