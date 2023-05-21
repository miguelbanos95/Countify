import { getAuth } from "firebase/auth";



export const getUser = () => {
    
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
        const uid = user.uid;
        const email = user.email;
        const name = user.first_name;
        const lastName = user.last_name;
        const gender = user.gender;
       
    }
    return user
};