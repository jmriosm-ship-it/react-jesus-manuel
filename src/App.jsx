import Header from './components/header.jsx'
import Perfil from './components/Perfil.jsx'
import Tarjeta from './components/Tarjeta.jsx'
import DatoCurioso from './components/DatoCurioso.jsx'
import Footer from './components/Footer.jsx'
import HolaMundo from './components/HolaMundo.jsx'
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
