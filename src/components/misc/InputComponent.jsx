import './InputComponent.css'
const InputComponent = ({ label, id, name, type, placeholder, register, error, multiple }) => {
  return (
    <div className='inputGroup'>
      <label htmlFor={id} className='label_input'>
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
      {error &&
        <p id='outlined_error_help' className='text-xs text-red-600 dark:text-red-400'>
          {error}
        </p>}
    </div>
  )
}

InputComponent.defaultProps = {
  type: 'text'
}

export default InputComponent
