import { useState } from "react"
import { InputGroup } from "./InputGroup"

export function CalculatorForm() {

  const [totalDebt, setTotalDebt] = useState("");
  const [debtPayment, setDebtPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [principalMessage, setPrincipalMessage] = useState("");

  const aboveMinimum = () => (debtPayment >= getMinimumPrincipal());

  const makePayment = () => setTotalDebt(totalDebt - debtPayment);

  const percentageToDecimal = (percent) => percent / 12 / 100;

  const getInterestAmount = () => percentageToDecimal(interestRate) * totalDebt;

  const getMinimumPrincipal = () => totalDebt * 0.01;

  const getRecommendedMinimum = () => (getMinimumPrincipal() + getInterestAmount());

  const yearsToMonths = (year) => year * 12;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputGroup 
        text={"Total Debt"}
        placeholder="Enter the amount"
        onChange={(e) => setTotalDebt(e.target.value)}
        value={totalDebt}
      />

      <InputGroup 
        text={"Interest Rate %"}
        placeholder="Enter the amount"
        onChange={(e) => setInterestRate(e.target.value)}
        value={interestRate}
      />

      <InputGroup 
        text={"Make Payment"}
        placeholder="Enter the amount"
        onChange={(e) => setDebtPayment(e.target.value)}
        value={debtPayment}
      />
      <div>{principalMessage}</div>
      <button onClick={() => {
        if (!aboveMinimum()) {
          setPrincipalMessage(`A 1% minimum payment (currently ${getMinimumPrincipal()}) is required`);
        } else {
          setPrincipalMessage('Payment Received!');
          makePayment(debtPayment);
        }
      }}>Make Payment</button>

      <button type="submit" onClick={() => {}}>
        Calculate
      </button>
    </form>
  )
}