import './InputComponent.css'
const InputComponent = ({ label, id, name, type, placeholder, register, error, multiple }) => {
  return (
    <div className='inputGroup'>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        className='input'
        type={type}
        style={{ backgroundColor: 'transparent' }}
        id={id}
        placeholder={placeholder}
        {...register(name)}
        multiple={multiple}
      />
      <p>{error}</p>
    </div>
  )
}

InputComponent.defaultProps = {
  type: 'text'
}

export default InputComponent
