// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
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

// export const createUserProfileDocument = async (user, additionalData) => {
//   if (!user) return
//   console.log(user)
//   // get the reference where the data can might be
//   const userRef = firestore.doc(`users/${user.id}`)

//   // fetch document location
//   const snapshot = await userRef.get()
//   if (!snapshot.exists) {
//     const { id, email, country } = user
//     const createAt = new Date()
//     try {
//       await userRef.set({
//         id,
//         email,
//         country,
//         createAt,
//         // photoURL,
//         ...additionalData,
//       })
//     } catch (error) {
//       console.log('errore nella creazione', error)
//     }
//   }
//   // eslint-disable-next-line consistent-return
//   return getUserDocument(user.uid)
// }
