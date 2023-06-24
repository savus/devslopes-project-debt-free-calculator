import { useState } from 'react'
import './App.css'
import { CalculatorForm } from './components/CalculatorForm'
function App() {
  const [userInformation, setUserInformation] = useState({
    totalDebt:0,
    interestRate:0,
    paymentMade:0
  });

  const percentageToDecimal = (percent) => percent / 100;
  const amountFromInterest = (total, percent) => total * percentageToDecimal(percent);
  return (
    <>
      <CalculatorForm 
        userInformation={userInformation}
        handleUserInformation={(userInformation) => {
          setUserInformation(userInformation);
        }}
        percentageToDecimal={percentageToDecimal}
        amountFromInterest={amountFromInterest}
      />
    </>
  )
}

export default App
