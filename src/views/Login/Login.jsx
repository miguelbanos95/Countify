import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as yup from 'yup';
// import bcrypt from 'bcrypt'
import "./Login_styles.css";
import InputComponent from "../../components/misc/InputComponent";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
    email: yup.string().email().required('email is a required field'),
    password: yup.string().required('Password is a required field').min(8)
}).required()

// const schema1 = yup.object({
//   }).required()  


const Login = () => {
    const [formStep, setFormStep] = useState(0)
    const auth = getAuth();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        //console.log(data)
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    register={register}
                    placeholder="Introduzca su email"
                />
                <InputComponent
                    id="password"
                    label="Pasword"
                    type="password"
                    name="password"
                    register={register}
                />
                <button size="lg" type="submit" onClick={handleSubmit}>
                    Continuar
                </button>
            </form>
        </div>
    );
}

export default Login