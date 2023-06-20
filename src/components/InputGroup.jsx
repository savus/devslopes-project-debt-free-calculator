export function InputGroup({name, title, placeholder, value, onChange}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{title}:</label>
      <input 
        type="number" 
        placeholder={placeholder} 
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
