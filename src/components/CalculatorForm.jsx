import { useState } from "react";
import { InputGroup } from "./InputGroup";

export function CalculatorForm({ userInformation, handleUserInformation }) {
  const [totalDebtInput, setDebtInput] = useState("");
  const [interestRateInput, setInterestRateInput] = useState("");
  const [paymentInput, setPaymentInput] = useState("");

  const percentToDecimal = (percent) => percent / 100;

  const deductPayment = (total, payment) => total - payment;

  const minimumPayment = (total) => total * 0.01;

  const interestAmount = (total, interest) => total * interest;

  const recommendedMinimum = (total, interest) => interestAmount(total, interest) + minimumPayment(total); 

  return (
    <form
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
        label={"total-debt"}
        title={"Total Debt"}
        placeHolder={"Enter total amount"}
        onChange={({ target: { value } }) => setDebtInput(value)}
        value={totalDebtInput}
      />

      <InputGroup
        label={"interest-rate"}
        title={"Interest Rate"}
        placeHolder={"Enter percentage"}
        onChange={({ target: { value } }) => setInterestRateInput(value)}
        value={interestRateInput}
      />

      <InputGroup
        label={"make-payment"}
        title={"Make A Payment"}
        placeHolder={"Enter amount"}
        onChange={({ target: { value } }) => setPaymentInput(value)}
        value={paymentInput}
      />
      <div>Total Debt: {userInformation.totalDebt}</div>
      <div>Interest Rate: {userInformation.interestRate}%</div>
      <div>
        Interest Percentage: {percentToDecimal(userInformation.interestRate)}
      </div>
      <div>Payment Made: {userInformation.paymentAmount}</div>
      <input type="submit" value="submit" />
    </form>
  );
}
