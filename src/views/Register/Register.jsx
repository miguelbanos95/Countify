import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Register_styles.css'
import InputComponent from '../../components/misc/InputComponent'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../services/users'
// import InputComponent from '../../components/misc/InputComponent'

const schema = yup.object({
  email: yup.string().email().required('Email o password incorrectas'),
  password: yup.string().min(8).required('Email o password incorrectas'),
  first_name: yup.string().required('Escriba su nombre'),
  //.required('Introduce un nombre'),
  last_name: yup.string().required('Escriba su apellido'),
  //.required('Introduce un apellido'),
  gender: yup.string()
}).required()

// const schema2 = yup.object({ tun
//   height: yup.string().required('Introduce su altura'),
//   weight: yup.string().required('Introduce su peso'),
//   date_of_birth: yup.string().required('Selecciona un fecha')
// }).required()

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const { signup } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async data => {
    try {
       await signup(data)
      //console.log(getUser())
       navigate('/login')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          id="email"
          label="Email"
          type="email"
          name="email"
          register={register}
          placeholder="Introduzca su email"
          error={errors.email?.message}
        />
        <InputComponent
          id="password"
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />
        {/* _____________________________________NOMBRE_______________________________________ */}
        <InputComponent
          id='userName'
          label='Introduce tu nombre'
          name='first_name'
          register={register}
          error={errors.userName?.message}
        />
        {/* ____________________________________APELLIDO______________________________________ */}
        <InputComponent
          id='userSurname'
          label='Introduce tu apellido'
          name='last_name'
          register={register}
          error={errors.userSurname?.message}
        />
        {/* _____________________________________GENERO________________________________________ */}
        <label htmlFor='underline_select' className='sr-only'>Underline select</label>
        {/* <select
          {...register('gender', { required: true })}
          id='underline_select'
          className='select_box block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
        >
          <option selected>Elige un sexo</option>
          <option value='male'>Hombre</option>
          <option value='female'>Mujer</option>
        </select> */}
        <div className='next'>
          <button className='cool-button' type='submit'>Siguiente</button>
        </div>
      </form>
    </div>
  )
}

export default Register
