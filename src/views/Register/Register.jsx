import React from 'react'
import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
import './Register_styles.css'
import InputComponent from '../../components/misc/InputComponent'
// import InputComponent from '../../components/misc/InputComponent'

// const schema1 = yup.object({
//   name: yup.string().required('Introduce un nombre'),
//   surname: yup.string().required('Introduce un apellido'),
//   gender: yup.string().required('Slecciona un género')
// }).required()

// const schema2 = yup.object({
//   height: yup.string().required('Introduce su altura'),
//   weight: yup.string().required('Introduce su peso'),
//   date_of_birth: yup.string().required('Slecciona un fecha')
// }).required()

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* _____________________________________NOMBRE_______________________________________ */}

        <InputComponent
          id='userName'
          label='Introduce tu nombre'
          name='first_name'
          register={register}
        />
        {/* ____________________________________APELLIDO______________________________________ */}

        <InputComponent
          id='userSurname'
          label='Introduce tu apellido'
          name='last_name'
          register={register}
        />

        {/* _____________________________________GENERO________________________________________ */}

        <label for='underline_select' className='sr-only'>Underline select</label>
        <select
          {...register('gender', { required: true })}
          id='underline_select'
          className='select_box block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
        >
          <option selected>Elige un sexo</option>
          <option value='male'>Hombre</option>
          <option value='female'>Mujer</option>
        </select>

        <div className='next'>
          <button className='cool-button' type='submit'>Siguiente</button>
        </div>
      </form>
    </div>
  )
}

export default Register
