import { useState } from "react";
import { InputGroup } from "./InputGroup";
export function CalculatorForm({
  userInformation: { totalDebt, interestRate, paymentMade },
  handleUserInformation,
  percentageToDecimal,
  amountFromInterest,
}) {
  const [debtInput, setDebtInput] = useState("");
  const [interestRateInput, setInterestRateInput] = useState("");
  const [paymentInput, setPaymentInput] = useState("");

  const minimumRecommendedPayment =
    amountFromInterest(totalDebt, interestRate) + totalDebt * 0.01;
  const deductPayment = (total, deduction) => total - deduction;
  
    return (
      <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        handleUserInformation({
          totalDebt: debtInput,
          interestRate: interestRateInput,
          paymentMade: paymentInput
        });

        deductPayment(totalDebt, paymentMade);
      }}
    >
      <InputGroup
        name={"total-debt"}
        title="Total Debt"
        placeHolder={"Enter total amount here"}
        onChange={({ target: { value } }) => setDebtInput(value)}
        value={debtInput}
      />

      <InputGroup
        name={"interest-rate"}
        title={"Interest Rate"}
        placeHolder={"Enter percentage here"}
        onChange={({ target: { value } }) => setInterestRateInput(value)}
        value={interestRateInput}
      />

      <InputGroup
        name={"make-payment"}
        title={"Make a Payment"}
        placeHolder={"Enter amount here"}
        onChange={({ target: { value } }) => setPaymentInput(value)}
        value={paymentInput}
      />
     
      <input type="submit" value="submit" />
      <ul>
        <li>Total Debt: {totalDebt}</li>
        <li>Interest Rate: {interestRate}</li>
        <li>Interest Percentage: {percentageToDecimal(interestRate)}</li>
        <li>
          Amount From Interest: {amountFromInterest(totalDebt, interestRate)}
        </li>
        <li>Minimum Percentage: {totalDebt * 0.01}</li>
        <li>Recommended Minimum Payment: {minimumRecommendedPayment}</li>
      </ul>
    </form>
  );
}
