import { useState } from "react";
import { InputGroup } from "./InputGroup";

export function CalculatorForm({ userInformation, handleUserInformation }) {
  const [totalDebtInput, setTotalDebt] = useState("");
  const [interestRateInput, setInterestRate] = useState("");
  const [paymentInput, setPaymentInput] = useState("");

  const percentToDecimal = (percent) => percent / 100;

  const minimumPayment = (total) => total * 0.01;

  const interestAmount = (total, interest) => total * interest;

  const recommendedMinimum = (total, interest) =>
    minimumPayment(total) + interestAmount(total, interest);
    
  const deductPayment = (total, payment) => total - payment;
  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        handleUserInformation({
          totalDebt: totalDebtInput,
          interestRate: interestRateInput,
          paymentAmount: paymentInput
        });
      }}
    >
      <InputGroup
        name={"total-debt"}
        title={"Total Debt:"}
        placeholder={"Enter total amount"}
        onChange={({ target: { value } }) => setTotalDebt(value)}
        value={totalDebtInput}
      />

      <InputGroup
        name={"interest-rate"}
        title={"Interest Rate:"}
        placeholder={"Enter percentage"}
        onChange={({ target: { value } }) => setInterestRate(value)}
        value={interestRateInput}
      />

      <InputGroup
        name={"payment-input"}
        title={"Make a Payment:"}
        placeholder={"Enter amount"}
        onChange={({ target: { value } }) => setPaymentInput(value)}
        value={paymentInput}
      />

      <input type="submit" value="submit" />
      <div>Total Debt: {userInformation.totalDebt}</div>
      <div>Interest Rate: {userInformation.interestRate}%</div>
      <div>Interest Percent: {percentToDecimal(userInformation.interestRate)}</div>
      <div>Payment Amount: {userInformation.paymentAmount}</div>
    </form>
  );
}
