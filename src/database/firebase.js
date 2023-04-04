import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCXSJXRLqPSkzaGwAniTo-S_xIRO0p7fRM',
  authDomain: 'countify-c0c38.firebaseapp.com',
  projectId: 'countify-c0c38',
  storageBucket: 'countify-c0c38.appspot.com',
  messagingSenderId: '889367812551',
  appId: '1:889367812551:web:5e414e034a8b49637021e2',
  measurementId: 'G-25JFGLMCYP'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
