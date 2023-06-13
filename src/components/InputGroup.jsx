export function InputGroup(
   { 
      text, 
      placeholder, 
      value, 
      onChange
   }) {

  return (
    <div className="input-container">
      <label htmlFor="home-value">{text}</label>
      <input 
         type="number" 
         placeholder={placeholder} 
         value={value}
         onChange={onChange}
      />
    </div>
  );
}
