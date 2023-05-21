import './InputSelect.css'
const InputSelect = ({ name, register, error }) => {
  return (
    <div>
      <select
        id='underline_select'
        {...register(name)}
        className='select_box block py-2.5 px-0 w-full text-l text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
        // className={`input dark:text-gray-400 ${error ? 'invalid-input block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600' : ''}`}
      >
        <option value='' hidden>Elige un sexo</option>
        <option value='' disabled>Elige un sexo</option>
        <option value='Male'>Hombre</option>
        <option value='Female'>Mujer</option>
      </select>
      {error &&
        <span className='errorSpan text-xs text-red-600 dark:text-red-400'>{error}
        </span>}
    </div>
  )
}

export default InputSelect
