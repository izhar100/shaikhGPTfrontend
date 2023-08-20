import { useState } from 'react'
import Answers from './components/Answers'
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <>
    <Box h={"100vh"} bgColor={"#312949"} color={"white"}>
      <Answers/> 
    </Box>
    </>
  )
}

export default App
