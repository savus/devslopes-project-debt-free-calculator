export function InputGroup2({
   text, 
   placeholder, 
   value, 
   onInput, 
   onKeyUp,
   readOnly = false}) {
   return (
      <div className="form-input-group">
         <span>{text}</span>
         <input 
            type="number" 
            placeholder={placeholder}
            value={value}
            className={"form-control"}
            onInput={onInput}
            onKeyUp={onKeyUp}
            readOnly={readOnly}
         />
      </div>
   )
}