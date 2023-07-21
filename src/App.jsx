import { Box } from '@chakra-ui/react'
import Projects from './Components/Projects'
import { Route, Routes } from 'react-router-dom'
import Head from './Head'
import Header from './Components/Header'
function App() {


  return (
    <Box as='div' className="App"  >
      <Header />
      <Routes>
          <Route path="/" element={<Head />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
  )
}

export default App
