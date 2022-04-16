// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore'

import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAIPjnkgjw91TAcjEIjhaEXM-Oh2UON1mQ',
  authDomain: 'buddygym00.firebaseapp.com',
  projectId: 'buddygym00',
  storageBucket: 'buddygym00.appspot.com',
  messagingSenderId: '395545021100',
  appId: '1:395545021100:web:609c5e543959d09210ad09',
  measurementId: 'G-PTH8RVZ0G3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore()

export const createUserProfileDocument = async (user) => {
  if (!user) return
  console.log(user)
  const createAt = new Date()
  await setDoc(doc(firestore, 'users', user.id), {
    uid: user.id,
    email: user.email,
    createAt: createAt,
  })
    .then(() => console.log('AGGIUNTO'))
    .catch((error) => {
      const messageCode = error.message
      console.log(messageCode)
    })
}
