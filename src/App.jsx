import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import Card from './components/Card'
import Navbar from './components/Navbar'

import Rick from './assets/rick.png'
import Rick01 from './assets/Rick01.png'
import Rick02 from './assets/Rick02.png'
import Rick03 from './assets/Rick03.png'
import Rick04 from './assets/Rick04.png'
import Rick05 from './assets/Rick05.png'
// import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        <Navbar></Navbar>
        <Head></Head>
        <div className="Container">
          <Card image={Rick}></Card>
          <Card image={Rick01}></Card>
          <Card image={Rick02}></Card>
          <Card image={Rick03}></Card>
          <Card image={Rick04}></Card>
          <Card image={Rick05}></Card>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </>
  )
}

export default App
