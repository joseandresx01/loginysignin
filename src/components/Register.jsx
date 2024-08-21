import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const Register = () => {
    const [estado, setEstado] = useState(false);
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const registro = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;   
                console.log(errorCode, errorMessage);
            });
    };




    return (
        <div className='usuarios'>
            <div className='lyr'>
                <h1>{estado ? "Login" : "Register"}</h1>
            </div>
            <div className='correoycontra'>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email:" type="text" />
            </div>
            <div className='correoycontra'>
                <input onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña:" type="password" />
            </div>
            <div className='registra'>
                <button className='registrarse' onClick={() => registro(email, contraseña)}>Registrarse</button>
                <button onClick={() => setEstado(!estado)}>{estado ? "Inicia Seccion Con Nosotros" : "Crea Una Cuenta"}</button>
            </div>
        </div>
    )
}

export default Register; 