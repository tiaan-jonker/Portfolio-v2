// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5lFO034p_cBOVUEHbqA3oJAIEdB7ded0',
  authDomain: 'portfolio-v2-9b34c.firebaseapp.com',
  projectId: 'portfolio-v2-9b34c',
  storageBucket: 'portfolio-v2-9b34c.appspot.com',
  messagingSenderId: '408672461227',
  appId: '1:408672461227:web:a39a513c7fd3aa09c7b2ee',
  measurementId: 'G-99RXN4WX1T',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
