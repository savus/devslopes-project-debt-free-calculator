import { useState } from "react";
import { InputGroup } from "./InputGroup";

export function CalculatorForm() {
   const percentageToDecimal = (percent) => percent / 100;  
   const [userInformation, setUserInformation] = useState({
      totalDebt:0,
      interestRate:0
   })
   return (
      
      <form onSubmit={(e) => {
         e.preventDefault();
         console.log(`Interest Decimal: ${percentageToDecimal(userInformation.interestRate)}`);
      }}>
         <InputGroup 
            name={"total-debt"}
            title={"Total Debt"}
            userInformation={userInformation}
            handleUserInformation={(userInformation) => {
               setUserInformation({totalDebt: userInformation})
            }}
         />
          <InputGroup 
            name={"total-debt"}
            title={"Interest Rate"}
            userInformation={userInformation}
            handleUserInformation={(userInformation) => {
               setUserInformation({interestRate: userInformation})
            }}
         />
         <div>Total Debt: {userInformation.totalDebt}</div>
         <div>Interest Rate: {userInformation.interestRate}%</div>
         <div>Interest Decimal: {isNaN(percentageToDecimal(userInformation.interestRate)) ? 0 : percentageToDecimal(userInformation.interestRate)}
         </div>
         <input type="submit" value="submit" />
      </form>
   )
}