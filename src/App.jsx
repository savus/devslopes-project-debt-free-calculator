import { useState } from 'react'
import './App.css'
import { CalculatorForm } from './components/CalculatorForm'
function App() {
  const [userInformation, setUserInformation] = useState({
    totalDebt:0,
    interestRate:0,
    paymentAmount:0
  })

  return (
    <>
      <CalculatorForm 
        userInformation={userInformation}
        handleUserInformation={(userInformation) => {
          setUserInformation(userInformation);
        }}
      />
    </>
  )
}

export default App
