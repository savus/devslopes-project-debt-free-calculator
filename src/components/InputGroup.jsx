export function InputGroup({
  name,
  title,
  placeHolder,
  onChange,
  value
}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{title}:</label>
      <input
        id={name} 
        name={name}
        type="number" 
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
  </div>
  )
}