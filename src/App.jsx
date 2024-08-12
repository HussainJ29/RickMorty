import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import Card from './components/Card'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        <Navbar></Navbar>
        <Head></Head>
        <div className="Container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </>
  )
}

export default App
