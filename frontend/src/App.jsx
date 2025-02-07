import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Features from './components/Features'

function App() {

  return (
    <div className="min-h-screen flex flex-col h-screen">
      <Navbar />
        <main className="flex-1">
          <Features />
        </main>
      <Footer />
    </div>
  )
}

export default App
