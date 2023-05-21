import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCpAWVb9oR3HXVSefb4Zo25vDAFMLdveQc",
  authDomain: "countify-d6705.firebaseapp.com",
  projectId: "countify",
  storageBucket: "countify.appspot.com",
  messagingSenderId: "933558918794",
  appId: "1:933558918794:web:8b04dce414aac942be1773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default db
