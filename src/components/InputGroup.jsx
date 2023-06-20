
export function InputGroup({label, title, placeHolder, onChange, value}) {
  return (
    <div className="input-group">
      <label htmlFor={label}>{title}</label>
      <input
        name={label}
        type="number"
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
