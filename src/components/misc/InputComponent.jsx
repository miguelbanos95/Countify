import './InputComponent.css'
const InputComponent = ({ label, id, name, type, placeholder, register, error, multiple }) => {
  return (
    <div className='inputGroup'>
      <label htmlFor={id} className='label_input'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        style={{ backgroundColor: 'transparent' }}
        className={`input dark:text-gray-400 ${error ? 'invalid-input block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600' : ''}`}
        multiple={multiple}
        {...register(name)}
      />
      {error &&
        <span id='outlined_error_help' className='text-xs text-red-600 dark:text-red-400 errorInput'>
          {error}
        </span>}
    </div>
  )
}

InputComponent.defaultProps = {
  type: 'text'
}

export default InputComponent
