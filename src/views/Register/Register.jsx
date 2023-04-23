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
          label='Introduce tu Apellido'
          name='last_name'
          register={register}
        />

        {/* _____________________________________GENERO________________________________________ */}

        <select {...register('gender', { required: true })}>
          <option value='male'>Hombre</option>
          <option value='female'>Mujer</option>
          <option value='other'>other</option>
        </select>

        <input type='submit' />
      </form>
    </div>
  )
}

export default Register
