import { Routes, Route } from 'react-router-dom'

import About from 'pages/About'
import Home from 'pages/Home'

import Header from './Header'

const App = () => {
  return (
    <main id='__layout'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Footer/> */}
    </main>
  )
}

export default App
