export function PaymentHistory({items}) {
   return (
      <div className="payment-history-container">
        <ul className="payment-history">
         {items.map((item) => (
            <li key={item.id}>{item.text}</li>
         ))}
        </ul>
      </div>
   )
}