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
    amountFromInterest(debtInput, interestRate) + debtInput * 0.01;

  const deductPaymentFromTotal = () => setDebtInput(debtInput - paymentMade);
  
    return (
      <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();

        handleUserInformation({
          interestRate: interestRateInput,
          paymentMade: paymentInput
        });

        deductPaymentFromTotal();
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
        <li>Total Debt: {debtInput}</li>
        <li>Interest Rate: {interestRate}</li>
        <li>Interest Percentage: {percentageToDecimal(interestRate)}</li>
        <li>
          Amount From Interest: {amountFromInterest(debtInput, interestRate)}
        </li>
        <li>Minimum Percentage: {debtInput * 0.01}</li>
        <li>Recommended Minimum Payment: {minimumRecommendedPayment}</li>
      </ul>
    </form>
  );
}
