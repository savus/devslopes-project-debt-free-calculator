import { useState } from "react";
import { InputGroup2 } from "./InputGroup2";

export function CalculatorForm2() {

   const [homeValue, setHomeValue] = useState("");
   const [downPayment, setDownPayment] = useState("");
   const [loanAmount, setLoanAmount] = useState("");
   const [interestRate, setInterestRate] = useState("");
   const [loanDuration, setLoanDuration] = useState("");
   const [monthlyPayment, setMonthlyPayment] = useState("");

   function calculateLoanAmount() {
      setLoanAmount(homeValue - downPayment);
      return loanAmount;
   }

   function calculateMonthlyPayments() {
      function percentageToDecimal(percent) {
         return percent / 12 / 100;  
      }

      function yearsToMonths(years) {
         return years * 12;
      }

   }

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <InputGroup2 
            text="Home Value"
            placeholder="Enter the value of the home"
            onKeyUp={calculateLoanAmount}
            value={homeValue}
            onInput={(e) => setHomeValue(e.target.value)}
         />

         <InputGroup2 
            text="Down Payment"
            placeholder="Enter your funds"
            onKeyUp={calculateLoanAmount}
            value={downPayment}
            onInput={(e) => setDownPayment(e.target.value)}
         />

         <InputGroup2 
            text="Interest Rate %"
            placeholder="Enter your interest rate"
            value={interestRate}
            onInput={(e) => setInterestRate(e.target.value)}
         />

         <InputGroup2 
            text="Loan duration (years)"
            placeholder="Enter the duration of your loan in years"
            value={loanDuration}
            onInput={(e) => setLoanDuration(e.target.value)}
         />

         <InputGroup2 
            text="Loan Amount"
            placeholder="Funds Needed"
            readOnly={true}
            value={loanAmount}
         />


         <button type="submit">Calculate</button>
      </form>
   )
}