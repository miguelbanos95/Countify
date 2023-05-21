import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Register_styles.css'
import InputComponent from '../../components/misc/InputComponent'
import InputSelect from '../../components/misc/InputSelect'
// import InputComponent from '../../components/misc/InputComponent'

const schema = yup.object({
  first_name: yup.string().required('Introduce un nombre'),
  last_name: yup.string().required('Introduce un apellido'),
  gender: yup.string().required('Slecciona un género')
}).required()

// const schema2 = yup.object({
//   height: yup.string().required('Introduce su altura'),
//   weight: yup.string().required('Introduce su peso'),
//   date_of_birth: yup.string().required('Slecciona un fecha')
// }).required()

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)
  return (
    <div>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        {/* _____________________________________NOMBRE_______________________________________ */}
        <div className='inputDiv'>
          <InputComponent
            id='first_name'
            label='Introduce tu nombre'
            name='first_name'
            register={register}
            error={errors.first_name?.message}
          />
          {/* ____________________________________APELLIDO______________________________________ */}

          <InputComponent
            id='last_name'
            label='Introduce tu apellido'
            name='last_name'
            register={register}
            error={errors.last_name?.message}
          />

          {/* _____________________________________GENERO________________________________________ */}

          <InputSelect
            name='gender'
            register={register}
            error={errors.gender?.message}
          />
        </div>
        <div className='next'>
          <button className='cool-button' type='submit'>Siguiente</button>
        </div>
      </form>
    </div>
  )
}

export default Register
