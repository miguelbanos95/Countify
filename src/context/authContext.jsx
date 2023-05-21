import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../database/firebase'
import { addDoc, collection } from "firebase/firestore";
import db from '../database/firebase';
import bcrypt from 'bcryptjs';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('There is no auth provider');
    }
    return context;
};

export function AuthProvider({ children }) {

    const signup = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            // Agregar el usuario a la colección 'Users' en Firestore
            //   await addDoc(collection(db, 'Users'), {
            //     ...data,
            //     password: hashedPassword,
            //     createdAt: new Date(),
            //     completed: false,
            //   });

        } catch (error) {
            console.error('Error al crear el usuario:', error);
        }
    };

    return (
        <authContext.Provider value={{ signup }}>
            {children}
        </authContext.Provider>
    );
}
